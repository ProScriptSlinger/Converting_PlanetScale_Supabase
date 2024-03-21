// Prisma client imports
const { PrismaClient: PrismaClientSupabase } = require("./generated/supabase");
const {
  PrismaClient: PrismaClientPlanetScale,
} = require("./generated/planetscale");

// Database clients initialization
const prisma = new PrismaClientPlanetScale();
const supaPrisma = new PrismaClientSupabase();

function displayProgressBar(current, total) {
  const progressBarLength = 50;
  const percentage = current / total;
  const filledLength = Math.round(progressBarLength * percentage);
  const emptyLength = progressBarLength - filledLength;
  const filledBar = "█".repeat(filledLength);
  const emptyBar = "-".repeat(emptyLength);
  const displayPercentage = (percentage * 100).toFixed(2);

  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);
  process.stdout.write(
    `Progress: [${filledBar}${emptyBar}] ${current}/${total} (${displayPercentage}%)`
  );
}

async function fetchAndInsertInChunks(modelName, chunkSize, totalCount) {
  let offset = 0;
  let allRecords = [];

  displayProgressBar(offset, totalCount);
  while (offset < totalCount) {
    try {
      const records = await prisma[modelName].findMany({
        take: chunkSize,
        skip: offset,
      });

      if (records.length > 0) {
        await supaPrisma[modelName].createMany({
          data: records,
          skipDuplicates: true,
        });
        allRecords.push(...records);
        offset += records.length; // Update offset based on the number of records fetched
        displayProgressBar(offset, totalCount);
      } else {
        break; // No more records to fetch
      }
    } catch (error) {
      console.error(
        `An error occurred while processing model ${modelName}:`,
        error
      );
      break;
    }
  }

  return allRecords;
}

async function convertModelData(modelName) {
  console.log(`\n-------- Converting ${modelName} --------`);
  const chunkSize = 100;

  try {
    const totalCount = await prisma[modelName].count();
    await fetchAndInsertInChunks(modelName, chunkSize, totalCount);
  } catch (error) {
    console.error(`Failed to convert model ${modelName}:`, error);
  }
  ``;
}

async function main() {
  const modelNames = [
    "User",
    "Account",
    "Block",
    "EnrolledEvent",
    "Prompt",
    "Token",
  ];

  for (const modelName of modelNames) {
    await convertModelData(modelName);
  }

  console.log("\nData conversion completed successfully!");
}

main().catch((error) => {
  console.error("An error occurred in the main function:", error);
});
