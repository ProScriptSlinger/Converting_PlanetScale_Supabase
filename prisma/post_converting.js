const { PrismaClient: PrismaClientSupabase } = require("./generated/supabase");
const {
  PrismaClient: PrismaClientPlanetScale,
} = require("./generated/planetscale");

// Initialize database clients
const prisma = new PrismaClientPlanetScale();
const supaPrisma = new PrismaClientSupabase();

function displayProgressBar(current, total) {
  const progressBarLength = 50;
  const percentage = current / total;
  const filledLength = Math.max(0, Math.round(progressBarLength * percentage));
  const emptyBarLength = Math.max(0, progressBarLength - filledLength);
  const filledBar = "█".repeat(filledLength);
  const emptyBar = "-".repeat(emptyBarLength);
  const displayPercentage = (percentage * 100).toFixed(2);

  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);
  process.stdout.write(
    `Progress: [${filledBar}${emptyBar}] ${current}/${total} (${displayPercentage}%)`
  );
}

async function createPostAndParentPosts(parentId) {
  if (!parentId) return null;

  const parentPost = await prisma.post.findUnique({
    where: { id: parentId },
  });

  if (!parentPost) {
    // console.log(`\nNo post found with ID: ${parentId}`);
    return null;
  }

  const createdId = await createPostAndParentPosts(parentPost.parentId); // Recursive call for parent posts

  // Check if the post already exists to prevent duplicates
  const existing = await supaPrisma.post.findUnique({
    where: { id: parentPost.id },
  });

  if (!existing) {
  }
  try {
    await supaPrisma.post.create({
      data: {
        ...parentPost,
        parentId: createdId,
      },
    });
  } catch (error) {
    if (error.code === "P2002") {
      // Handle duplicate record by possibly logging it or ignoring it, as per your requirement.
      // console.warn(`Duplicate record found for ${modelName}:`, record.id);
    } else {
      // Handle other errors normally.
      console.error(`Error creating record in ${modelName}:`, error);
    }
  }
  return parentId;
}

async function convertRecords(modelName, totalCount) {
  let skip = 0;
  const chunkSize = 100; // Increased chunk size for better performance

  console.log(`\n------ Converting ${modelName.toUpperCase()} ------`);

  displayProgressBar(skip, totalCount);
  while (skip < totalCount) {
    const records = await prisma[modelName].findMany({
      where: {
        createdAt: {
          gte: new Date("2024-03-20"), // Latest date
        },
      },
      take: chunkSize,
      skip: skip,
    });

    // Process records in parallel
    const promises = records.map(async (record) => {
      if (modelName.toLowerCase() === "post") {
        record.parentId = await createPostAndParentPosts(record.parentId); // Assign the new parent ID
      } else {
        record.postId = await createPostAndParentPosts(record.postId); // Assign the new post ID
        if (!record.postId) return;
      }
      try {
        await supaPrisma[modelName].create({
          data: record,
        });
      } catch (error) {
        if (error.code === "P2002") {
          // console.error(`Duplicate record found for ${modelName}:`, record.id);
        } else {
          console.error(`Error creating record in ${modelName}:`, error);
        }
      }
    });

    await Promise.all(promises); // Wait for all insertions to complete before continuing

    skip += chunkSize;
    displayProgressBar(skip, totalCount);
  }
}

async function convert(modelName = "post") {
  try {
    const totalCount = await prisma[modelName].count();

    await convertRecords(modelName, totalCount);
  } catch (error) {
    console.error(`Error converting model ${modelName}:`, error);
  }
}

async function main() {
  const models = ["flag", "post", "like"];

  for (const modelName of models) {
    await convert(modelName);
  }

  console.log("Data conversion completed successfully!");
}

main().catch((error) => console.error("An unexpected error occurred:", error));
