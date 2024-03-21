
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Like
 * 
 */
export type Like = $Result.DefaultSelection<Prisma.$LikePayload>
/**
 * Model Flag
 * 
 */
export type Flag = $Result.DefaultSelection<Prisma.$FlagPayload>
/**
 * Model Block
 * 
 */
export type Block = $Result.DefaultSelection<Prisma.$BlockPayload>
/**
 * Model Prompt
 * 
 */
export type Prompt = $Result.DefaultSelection<Prisma.$PromptPayload>
/**
 * Model EnrolledEvent
 * 
 */
export type EnrolledEvent = $Result.DefaultSelection<Prisma.$EnrolledEventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const TokenType: {
  REFRESH_TOKEN: 'REFRESH_TOKEN',
  VERIFY_EMAIL: 'VERIFY_EMAIL',
  RESET_PASSWORD: 'RESET_PASSWORD'
};

export type TokenType = (typeof TokenType)[keyof typeof TokenType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type TokenType = $Enums.TokenType

export const TokenType: typeof $Enums.TokenType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs>;

  /**
   * `prisma.like`: Exposes CRUD operations for the **Like** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.like.findMany()
    * ```
    */
  get like(): Prisma.LikeDelegate<ExtArgs>;

  /**
   * `prisma.flag`: Exposes CRUD operations for the **Flag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flags
    * const flags = await prisma.flag.findMany()
    * ```
    */
  get flag(): Prisma.FlagDelegate<ExtArgs>;

  /**
   * `prisma.block`: Exposes CRUD operations for the **Block** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blocks
    * const blocks = await prisma.block.findMany()
    * ```
    */
  get block(): Prisma.BlockDelegate<ExtArgs>;

  /**
   * `prisma.prompt`: Exposes CRUD operations for the **Prompt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prompts
    * const prompts = await prisma.prompt.findMany()
    * ```
    */
  get prompt(): Prisma.PromptDelegate<ExtArgs>;

  /**
   * `prisma.enrolledEvent`: Exposes CRUD operations for the **EnrolledEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EnrolledEvents
    * const enrolledEvents = await prisma.enrolledEvent.findMany()
    * ```
    */
  get enrolledEvent(): Prisma.EnrolledEventDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.11.0
   * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Account: 'Account',
    User: 'User',
    Token: 'Token',
    Post: 'Post',
    Like: 'Like',
    Flag: 'Flag',
    Block: 'Block',
    Prompt: 'Prompt',
    EnrolledEvent: 'EnrolledEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'account' | 'user' | 'token' | 'post' | 'like' | 'flag' | 'block' | 'prompt' | 'enrolledEvent'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>,
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>,
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>,
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Like: {
        payload: Prisma.$LikePayload<ExtArgs>
        fields: Prisma.LikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findFirst: {
            args: Prisma.LikeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findMany: {
            args: Prisma.LikeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          create: {
            args: Prisma.LikeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          createMany: {
            args: Prisma.LikeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LikeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          update: {
            args: Prisma.LikeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          deleteMany: {
            args: Prisma.LikeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LikeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LikeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          aggregate: {
            args: Prisma.LikeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLike>
          }
          groupBy: {
            args: Prisma.LikeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikeCountArgs<ExtArgs>,
            result: $Utils.Optional<LikeCountAggregateOutputType> | number
          }
        }
      }
      Flag: {
        payload: Prisma.$FlagPayload<ExtArgs>
        fields: Prisma.FlagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlagFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FlagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlagFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>
          }
          findFirst: {
            args: Prisma.FlagFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FlagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlagFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>
          }
          findMany: {
            args: Prisma.FlagFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>[]
          }
          create: {
            args: Prisma.FlagCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>
          }
          createMany: {
            args: Prisma.FlagCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FlagDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>
          }
          update: {
            args: Prisma.FlagUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>
          }
          deleteMany: {
            args: Prisma.FlagDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FlagUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FlagUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>
          }
          aggregate: {
            args: Prisma.FlagAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFlag>
          }
          groupBy: {
            args: Prisma.FlagGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FlagGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlagCountArgs<ExtArgs>,
            result: $Utils.Optional<FlagCountAggregateOutputType> | number
          }
        }
      }
      Block: {
        payload: Prisma.$BlockPayload<ExtArgs>
        fields: Prisma.BlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlockFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlockFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          findFirst: {
            args: Prisma.BlockFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlockFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          findMany: {
            args: Prisma.BlockFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>[]
          }
          create: {
            args: Prisma.BlockCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          createMany: {
            args: Prisma.BlockCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BlockDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          update: {
            args: Prisma.BlockUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          deleteMany: {
            args: Prisma.BlockDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BlockUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BlockUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          aggregate: {
            args: Prisma.BlockAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBlock>
          }
          groupBy: {
            args: Prisma.BlockGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlockCountArgs<ExtArgs>,
            result: $Utils.Optional<BlockCountAggregateOutputType> | number
          }
        }
      }
      Prompt: {
        payload: Prisma.$PromptPayload<ExtArgs>
        fields: Prisma.PromptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromptFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromptFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          findFirst: {
            args: Prisma.PromptFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromptFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          findMany: {
            args: Prisma.PromptFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>[]
          }
          create: {
            args: Prisma.PromptCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          createMany: {
            args: Prisma.PromptCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PromptDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          update: {
            args: Prisma.PromptUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          deleteMany: {
            args: Prisma.PromptDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PromptUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PromptUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          aggregate: {
            args: Prisma.PromptAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePrompt>
          }
          groupBy: {
            args: Prisma.PromptGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PromptGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromptCountArgs<ExtArgs>,
            result: $Utils.Optional<PromptCountAggregateOutputType> | number
          }
        }
      }
      EnrolledEvent: {
        payload: Prisma.$EnrolledEventPayload<ExtArgs>
        fields: Prisma.EnrolledEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnrolledEventFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EnrolledEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnrolledEventFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EnrolledEventPayload>
          }
          findFirst: {
            args: Prisma.EnrolledEventFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EnrolledEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnrolledEventFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EnrolledEventPayload>
          }
          findMany: {
            args: Prisma.EnrolledEventFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EnrolledEventPayload>[]
          }
          create: {
            args: Prisma.EnrolledEventCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EnrolledEventPayload>
          }
          createMany: {
            args: Prisma.EnrolledEventCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EnrolledEventDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EnrolledEventPayload>
          }
          update: {
            args: Prisma.EnrolledEventUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EnrolledEventPayload>
          }
          deleteMany: {
            args: Prisma.EnrolledEventDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EnrolledEventUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EnrolledEventUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EnrolledEventPayload>
          }
          aggregate: {
            args: Prisma.EnrolledEventAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEnrolledEvent>
          }
          groupBy: {
            args: Prisma.EnrolledEventGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EnrolledEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnrolledEventCountArgs<ExtArgs>,
            result: $Utils.Optional<EnrolledEventCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    blocking: number
    blockedBy: number
    enrolledEvents: number
    flags: number
    likes: number
    posts: number
    tokens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    blocking?: boolean | UserCountOutputTypeCountBlockingArgs
    blockedBy?: boolean | UserCountOutputTypeCountBlockedByArgs
    enrolledEvents?: boolean | UserCountOutputTypeCountEnrolledEventsArgs
    flags?: boolean | UserCountOutputTypeCountFlagsArgs
    likes?: boolean | UserCountOutputTypeCountLikesArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    tokens?: boolean | UserCountOutputTypeCountTokensArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlockingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlockedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEnrolledEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrolledEventWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFlagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlagWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
  }



  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    flags: number
    likes: number
    comments: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flags?: boolean | PostCountOutputTypeCountFlagsArgs
    likes?: boolean | PostCountOutputTypeCountLikesArgs
    comments?: boolean | PostCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountFlagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlagWhereInput
  }


  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }


  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expiresAt: number | null
  }

  export type AccountSumAggregateOutputType = {
    expiresAt: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    provider: string | null
    providerAccountId: string | null
    refreshToken: string | null
    accessToken: string | null
    expiresAt: number | null
    userId: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    provider: string | null
    providerAccountId: string | null
    refreshToken: string | null
    accessToken: string | null
    expiresAt: number | null
    userId: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    provider: number
    providerAccountId: number
    refreshToken: number
    accessToken: number
    expiresAt: number
    userId: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expiresAt?: true
  }

  export type AccountSumAggregateInputType = {
    expiresAt?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    provider?: true
    providerAccountId?: true
    refreshToken?: true
    accessToken?: true
    expiresAt?: true
    userId?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    provider?: true
    providerAccountId?: true
    refreshToken?: true
    accessToken?: true
    expiresAt?: true
    userId?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    provider?: true
    providerAccountId?: true
    refreshToken?: true
    accessToken?: true
    expiresAt?: true
    userId?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    provider: string
    providerAccountId: string
    refreshToken: string | null
    accessToken: string | null
    expiresAt: number | null
    userId: string
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refreshToken?: boolean
    accessToken?: boolean
    expiresAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refreshToken?: boolean
    accessToken?: boolean
    expiresAt?: boolean
    userId?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      provider: string
      providerAccountId: string
      refreshToken: string | null
      accessToken: string | null
      expiresAt: number | null
      userId: string
    }, ExtArgs["result"]["account"]>
    composites: {}
  }


  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountCreateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Accounts.
     *     @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly expiresAt: FieldRef<"Account", 'Int'>
    readonly userId: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }


  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }


  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }


  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }


  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    emailVerified: Date | null
    passwordHash: string | null
    displayName: string | null
    displayImage: string | null
    disabled: boolean | null
    weeklyDigestEmail: boolean | null
    role: $Enums.UserRole | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    emailVerified: Date | null
    passwordHash: string | null
    displayName: string | null
    displayImage: string | null
    disabled: boolean | null
    weeklyDigestEmail: boolean | null
    role: $Enums.UserRole | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    emailVerified: number
    passwordHash: number
    displayName: number
    displayImage: number
    disabled: number
    weeklyDigestEmail: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    emailVerified?: true
    passwordHash?: true
    displayName?: true
    displayImage?: true
    disabled?: true
    weeklyDigestEmail?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    emailVerified?: true
    passwordHash?: true
    displayName?: true
    displayImage?: true
    disabled?: true
    weeklyDigestEmail?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    emailVerified?: true
    passwordHash?: true
    displayName?: true
    displayImage?: true
    disabled?: true
    weeklyDigestEmail?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string | null
    emailVerified: Date | null
    passwordHash: string | null
    displayName: string | null
    displayImage: string | null
    disabled: boolean | null
    weeklyDigestEmail: boolean
    role: $Enums.UserRole
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    passwordHash?: boolean
    displayName?: boolean
    displayImage?: boolean
    disabled?: boolean
    weeklyDigestEmail?: boolean
    role?: boolean
    createdAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    blocking?: boolean | User$blockingArgs<ExtArgs>
    blockedBy?: boolean | User$blockedByArgs<ExtArgs>
    enrolledEvents?: boolean | User$enrolledEventsArgs<ExtArgs>
    flags?: boolean | User$flagsArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    tokens?: boolean | User$tokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    passwordHash?: boolean
    displayName?: boolean
    displayImage?: boolean
    disabled?: boolean
    weeklyDigestEmail?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    blocking?: boolean | User$blockingArgs<ExtArgs>
    blockedBy?: boolean | User$blockedByArgs<ExtArgs>
    enrolledEvents?: boolean | User$enrolledEventsArgs<ExtArgs>
    flags?: boolean | User$flagsArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    tokens?: boolean | User$tokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      blocking: Prisma.$BlockPayload<ExtArgs>[]
      blockedBy: Prisma.$BlockPayload<ExtArgs>[]
      enrolledEvents: Prisma.$EnrolledEventPayload<ExtArgs>[]
      flags: Prisma.$FlagPayload<ExtArgs>[]
      likes: Prisma.$LikePayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      tokens: Prisma.$TokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      emailVerified: Date | null
      passwordHash: string | null
      displayName: string | null
      displayImage: string | null
      disabled: boolean | null
      weeklyDigestEmail: boolean
      role: $Enums.UserRole
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'> | Null>;

    blocking<T extends User$blockingArgs<ExtArgs> = {}>(args?: Subset<T, User$blockingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'findMany'> | Null>;

    blockedBy<T extends User$blockedByArgs<ExtArgs> = {}>(args?: Subset<T, User$blockedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'findMany'> | Null>;

    enrolledEvents<T extends User$enrolledEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$enrolledEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrolledEventPayload<ExtArgs>, T, 'findMany'> | Null>;

    flags<T extends User$flagsArgs<ExtArgs> = {}>(args?: Subset<T, User$flagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, 'findMany'> | Null>;

    likes<T extends User$likesArgs<ExtArgs> = {}>(args?: Subset<T, User$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, 'findMany'> | Null>;

    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'> | Null>;

    tokens<T extends User$tokensArgs<ExtArgs> = {}>(args?: Subset<T, User$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly displayImage: FieldRef<"User", 'String'>
    readonly disabled: FieldRef<"User", 'Boolean'>
    readonly weeklyDigestEmail: FieldRef<"User", 'Boolean'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * User.blocking
   */
  export type User$blockingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockInclude<ExtArgs> | null
    where?: BlockWhereInput
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    cursor?: BlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }


  /**
   * User.blockedBy
   */
  export type User$blockedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockInclude<ExtArgs> | null
    where?: BlockWhereInput
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    cursor?: BlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }


  /**
   * User.enrolledEvents
   */
  export type User$enrolledEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledEvent
     */
    select?: EnrolledEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrolledEventInclude<ExtArgs> | null
    where?: EnrolledEventWhereInput
    orderBy?: EnrolledEventOrderByWithRelationInput | EnrolledEventOrderByWithRelationInput[]
    cursor?: EnrolledEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrolledEventScalarFieldEnum | EnrolledEventScalarFieldEnum[]
  }


  /**
   * User.flags
   */
  export type User$flagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlagInclude<ExtArgs> | null
    where?: FlagWhereInput
    orderBy?: FlagOrderByWithRelationInput | FlagOrderByWithRelationInput[]
    cursor?: FlagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlagScalarFieldEnum | FlagScalarFieldEnum[]
  }


  /**
   * User.likes
   */
  export type User$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }


  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * User.tokens
   */
  export type User$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    cursor?: TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    type: $Enums.TokenType | null
    expiresAt: Date | null
    sentTo: string | null
    usedAt: Date | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    type: $Enums.TokenType | null
    expiresAt: Date | null
    sentTo: string | null
    usedAt: Date | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    token: number
    type: number
    expiresAt: number
    sentTo: number
    usedAt: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TokenMinAggregateInputType = {
    id?: true
    token?: true
    type?: true
    expiresAt?: true
    sentTo?: true
    usedAt?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    token?: true
    type?: true
    expiresAt?: true
    sentTo?: true
    usedAt?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    token?: true
    type?: true
    expiresAt?: true
    sentTo?: true
    usedAt?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: string
    token: string
    type: $Enums.TokenType
    expiresAt: Date | null
    sentTo: string | null
    usedAt: Date | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    type?: boolean
    expiresAt?: boolean
    sentTo?: boolean
    usedAt?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    token?: boolean
    type?: boolean
    expiresAt?: boolean
    sentTo?: boolean
    usedAt?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      type: $Enums.TokenType
      expiresAt: Date | null
      sentTo: string | null
      usedAt: Date | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["token"]>
    composites: {}
  }


  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TokenFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>
    ): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Token that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TokenFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>
    ): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TokenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
    **/
    create<T extends TokenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TokenCreateArgs<ExtArgs>>
    ): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tokens.
     *     @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     *     @example
     *     // Create many Tokens
     *     const token = await prisma.token.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TokenCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
    **/
    delete<T extends TokenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>
    ): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TokenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>
    ): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TokenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TokenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
    **/
    upsert<T extends TokenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>
    ): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Token model
   */ 
  interface TokenFieldRefs {
    readonly id: FieldRef<"Token", 'String'>
    readonly token: FieldRef<"Token", 'String'>
    readonly type: FieldRef<"Token", 'TokenType'>
    readonly expiresAt: FieldRef<"Token", 'DateTime'>
    readonly sentTo: FieldRef<"Token", 'String'>
    readonly usedAt: FieldRef<"Token", 'DateTime'>
    readonly userId: FieldRef<"Token", 'String'>
    readonly createdAt: FieldRef<"Token", 'DateTime'>
    readonly updatedAt: FieldRef<"Token", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }


  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }


  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }


  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }


  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }


  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }


  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }


  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
  }


  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }


  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }


  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
  }


  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
  }



  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    baseLikeCount: number | null
  }

  export type PostSumAggregateOutputType = {
    baseLikeCount: number | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    content: string | null
    createdBy: string | null
    baseLikeCount: number | null
    parentId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    content: string | null
    createdBy: string | null
    baseLikeCount: number | null
    parentId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    content: number
    createdBy: number
    baseLikeCount: number
    parentId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    baseLikeCount?: true
  }

  export type PostSumAggregateInputType = {
    baseLikeCount?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    content?: true
    createdBy?: true
    baseLikeCount?: true
    parentId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    content?: true
    createdBy?: true
    baseLikeCount?: true
    parentId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    content?: true
    createdBy?: true
    baseLikeCount?: true
    parentId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    content: string
    createdBy: string | null
    baseLikeCount: number | null
    parentId: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdBy?: boolean
    baseLikeCount?: boolean
    parentId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    flags?: boolean | Post$flagsArgs<ExtArgs>
    likes?: boolean | Post$likesArgs<ExtArgs>
    parent?: boolean | Post$parentArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    content?: boolean
    createdBy?: boolean
    baseLikeCount?: boolean
    parentId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flags?: boolean | Post$flagsArgs<ExtArgs>
    likes?: boolean | Post$likesArgs<ExtArgs>
    parent?: boolean | Post$parentArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      flags: Prisma.$FlagPayload<ExtArgs>[]
      likes: Prisma.$LikePayload<ExtArgs>[]
      parent: Prisma.$PostPayload<ExtArgs> | null
      comments: Prisma.$PostPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      createdBy: string | null
      baseLikeCount: number | null
      parentId: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }


  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Post that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends PostCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PostCreateArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Posts.
     *     @param {PostCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends PostDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PostDeleteArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpdateArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends PostUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpsertArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    flags<T extends Post$flagsArgs<ExtArgs> = {}>(args?: Subset<T, Post$flagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, 'findMany'> | Null>;

    likes<T extends Post$likesArgs<ExtArgs> = {}>(args?: Subset<T, Post$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, 'findMany'> | Null>;

    parent<T extends Post$parentArgs<ExtArgs> = {}>(args?: Subset<T, Post$parentArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    comments<T extends Post$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Post$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Post model
   */ 
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly createdBy: FieldRef<"Post", 'String'>
    readonly baseLikeCount: FieldRef<"Post", 'Int'>
    readonly parentId: FieldRef<"Post", 'String'>
    readonly userId: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }


  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
  }


  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }


  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
  }


  /**
   * Post.flags
   */
  export type Post$flagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlagInclude<ExtArgs> | null
    where?: FlagWhereInput
    orderBy?: FlagOrderByWithRelationInput | FlagOrderByWithRelationInput[]
    cursor?: FlagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlagScalarFieldEnum | FlagScalarFieldEnum[]
  }


  /**
   * Post.likes
   */
  export type Post$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }


  /**
   * Post.parent
   */
  export type Post$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
  }


  /**
   * Post.comments
   */
  export type Post$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
  }



  /**
   * Model Like
   */

  export type AggregateLike = {
    _count: LikeCountAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  export type LikeMinAggregateOutputType = {
    postId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LikeMaxAggregateOutputType = {
    postId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LikeCountAggregateOutputType = {
    postId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LikeMinAggregateInputType = {
    postId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LikeMaxAggregateInputType = {
    postId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LikeCountAggregateInputType = {
    postId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Like to aggregate.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Likes
    **/
    _count?: true | LikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikeMaxAggregateInputType
  }

  export type GetLikeAggregateType<T extends LikeAggregateArgs> = {
        [P in keyof T & keyof AggregateLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLike[P]>
      : GetScalarType<T[P], AggregateLike[P]>
  }




  export type LikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithAggregationInput | LikeOrderByWithAggregationInput[]
    by: LikeScalarFieldEnum[] | LikeScalarFieldEnum
    having?: LikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikeCountAggregateInputType | true
    _min?: LikeMinAggregateInputType
    _max?: LikeMaxAggregateInputType
  }

  export type LikeGroupByOutputType = {
    postId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: LikeCountAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  type GetLikeGroupByPayload<T extends LikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikeGroupByOutputType[P]>
            : GetScalarType<T[P], LikeGroupByOutputType[P]>
        }
      >
    >


  export type LikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectScalar = {
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $LikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Like"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      postId: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["like"]>
    composites: {}
  }


  type LikeGetPayload<S extends boolean | null | undefined | LikeDefaultArgs> = $Result.GetResult<Prisma.$LikePayload, S>

  type LikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LikeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LikeCountAggregateInputType | true
    }

  export interface LikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Like'], meta: { name: 'Like' } }
    /**
     * Find zero or one Like that matches the filter.
     * @param {LikeFindUniqueArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LikeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LikeFindUniqueArgs<ExtArgs>>
    ): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Like that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LikeFindUniqueOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LikeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LikeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Like that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LikeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LikeFindFirstArgs<ExtArgs>>
    ): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Like that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LikeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LikeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.like.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.like.findMany({ take: 10 })
     * 
     * // Only select the `postId`
     * const likeWithPostIdOnly = await prisma.like.findMany({ select: { postId: true } })
     * 
    **/
    findMany<T extends LikeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LikeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Like.
     * @param {LikeCreateArgs} args - Arguments to create a Like.
     * @example
     * // Create one Like
     * const Like = await prisma.like.create({
     *   data: {
     *     // ... data to create a Like
     *   }
     * })
     * 
    **/
    create<T extends LikeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LikeCreateArgs<ExtArgs>>
    ): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Likes.
     *     @param {LikeCreateManyArgs} args - Arguments to create many Likes.
     *     @example
     *     // Create many Likes
     *     const like = await prisma.like.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LikeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LikeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Like.
     * @param {LikeDeleteArgs} args - Arguments to delete one Like.
     * @example
     * // Delete one Like
     * const Like = await prisma.like.delete({
     *   where: {
     *     // ... filter to delete one Like
     *   }
     * })
     * 
    **/
    delete<T extends LikeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LikeDeleteArgs<ExtArgs>>
    ): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Like.
     * @param {LikeUpdateArgs} args - Arguments to update one Like.
     * @example
     * // Update one Like
     * const like = await prisma.like.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LikeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LikeUpdateArgs<ExtArgs>>
    ): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Likes.
     * @param {LikeDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.like.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LikeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LikeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LikeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LikeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Like.
     * @param {LikeUpsertArgs} args - Arguments to update or create a Like.
     * @example
     * // Update or create a Like
     * const like = await prisma.like.upsert({
     *   create: {
     *     // ... data to create a Like
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Like we want to update
     *   }
     * })
    **/
    upsert<T extends LikeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LikeUpsertArgs<ExtArgs>>
    ): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.like.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends LikeCountArgs>(
      args?: Subset<T, LikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikeAggregateArgs>(args: Subset<T, LikeAggregateArgs>): Prisma.PrismaPromise<GetLikeAggregateType<T>>

    /**
     * Group by Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikeGroupByArgs['orderBy'] }
        : { orderBy?: LikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Like model
   */
  readonly fields: LikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Like.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Like model
   */ 
  interface LikeFieldRefs {
    readonly postId: FieldRef<"Like", 'String'>
    readonly userId: FieldRef<"Like", 'String'>
    readonly createdAt: FieldRef<"Like", 'DateTime'>
    readonly updatedAt: FieldRef<"Like", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Like findUnique
   */
  export type LikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }


  /**
   * Like findUniqueOrThrow
   */
  export type LikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }


  /**
   * Like findFirst
   */
  export type LikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }


  /**
   * Like findFirstOrThrow
   */
  export type LikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }


  /**
   * Like findMany
   */
  export type LikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }


  /**
   * Like create
   */
  export type LikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to create a Like.
     */
    data: XOR<LikeCreateInput, LikeUncheckedCreateInput>
  }


  /**
   * Like createMany
   */
  export type LikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Like update
   */
  export type LikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to update a Like.
     */
    data: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
    /**
     * Choose, which Like to update.
     */
    where: LikeWhereUniqueInput
  }


  /**
   * Like updateMany
   */
  export type LikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Likes.
     */
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikeWhereInput
  }


  /**
   * Like upsert
   */
  export type LikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The filter to search for the Like to update in case it exists.
     */
    where: LikeWhereUniqueInput
    /**
     * In case the Like found by the `where` argument doesn't exist, create a new Like with this data.
     */
    create: XOR<LikeCreateInput, LikeUncheckedCreateInput>
    /**
     * In case the Like was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
  }


  /**
   * Like delete
   */
  export type LikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter which Like to delete.
     */
    where: LikeWhereUniqueInput
  }


  /**
   * Like deleteMany
   */
  export type LikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to delete
     */
    where?: LikeWhereInput
  }


  /**
   * Like without action
   */
  export type LikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikeInclude<ExtArgs> | null
  }



  /**
   * Model Flag
   */

  export type AggregateFlag = {
    _count: FlagCountAggregateOutputType | null
    _min: FlagMinAggregateOutputType | null
    _max: FlagMaxAggregateOutputType | null
  }

  export type FlagMinAggregateOutputType = {
    comment: string | null
    resolved: boolean | null
    postId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlagMaxAggregateOutputType = {
    comment: string | null
    resolved: boolean | null
    postId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlagCountAggregateOutputType = {
    comment: number
    resolved: number
    postId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FlagMinAggregateInputType = {
    comment?: true
    resolved?: true
    postId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FlagMaxAggregateInputType = {
    comment?: true
    resolved?: true
    postId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FlagCountAggregateInputType = {
    comment?: true
    resolved?: true
    postId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FlagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flag to aggregate.
     */
    where?: FlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flags to fetch.
     */
    orderBy?: FlagOrderByWithRelationInput | FlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Flags
    **/
    _count?: true | FlagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlagMaxAggregateInputType
  }

  export type GetFlagAggregateType<T extends FlagAggregateArgs> = {
        [P in keyof T & keyof AggregateFlag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlag[P]>
      : GetScalarType<T[P], AggregateFlag[P]>
  }




  export type FlagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlagWhereInput
    orderBy?: FlagOrderByWithAggregationInput | FlagOrderByWithAggregationInput[]
    by: FlagScalarFieldEnum[] | FlagScalarFieldEnum
    having?: FlagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlagCountAggregateInputType | true
    _min?: FlagMinAggregateInputType
    _max?: FlagMaxAggregateInputType
  }

  export type FlagGroupByOutputType = {
    comment: string | null
    resolved: boolean
    postId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: FlagCountAggregateOutputType | null
    _min: FlagMinAggregateOutputType | null
    _max: FlagMaxAggregateOutputType | null
  }

  type GetFlagGroupByPayload<T extends FlagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlagGroupByOutputType[P]>
            : GetScalarType<T[P], FlagGroupByOutputType[P]>
        }
      >
    >


  export type FlagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comment?: boolean
    resolved?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flag"]>

  export type FlagSelectScalar = {
    comment?: boolean
    resolved?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FlagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $FlagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Flag"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      comment: string | null
      resolved: boolean
      postId: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["flag"]>
    composites: {}
  }


  type FlagGetPayload<S extends boolean | null | undefined | FlagDefaultArgs> = $Result.GetResult<Prisma.$FlagPayload, S>

  type FlagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FlagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FlagCountAggregateInputType | true
    }

  export interface FlagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Flag'], meta: { name: 'Flag' } }
    /**
     * Find zero or one Flag that matches the filter.
     * @param {FlagFindUniqueArgs} args - Arguments to find a Flag
     * @example
     * // Get one Flag
     * const flag = await prisma.flag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FlagFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FlagFindUniqueArgs<ExtArgs>>
    ): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Flag that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FlagFindUniqueOrThrowArgs} args - Arguments to find a Flag
     * @example
     * // Get one Flag
     * const flag = await prisma.flag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FlagFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FlagFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Flag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagFindFirstArgs} args - Arguments to find a Flag
     * @example
     * // Get one Flag
     * const flag = await prisma.flag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FlagFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FlagFindFirstArgs<ExtArgs>>
    ): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Flag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagFindFirstOrThrowArgs} args - Arguments to find a Flag
     * @example
     * // Get one Flag
     * const flag = await prisma.flag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FlagFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FlagFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Flags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flags
     * const flags = await prisma.flag.findMany()
     * 
     * // Get first 10 Flags
     * const flags = await prisma.flag.findMany({ take: 10 })
     * 
     * // Only select the `comment`
     * const flagWithCommentOnly = await prisma.flag.findMany({ select: { comment: true } })
     * 
    **/
    findMany<T extends FlagFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FlagFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Flag.
     * @param {FlagCreateArgs} args - Arguments to create a Flag.
     * @example
     * // Create one Flag
     * const Flag = await prisma.flag.create({
     *   data: {
     *     // ... data to create a Flag
     *   }
     * })
     * 
    **/
    create<T extends FlagCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FlagCreateArgs<ExtArgs>>
    ): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Flags.
     *     @param {FlagCreateManyArgs} args - Arguments to create many Flags.
     *     @example
     *     // Create many Flags
     *     const flag = await prisma.flag.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FlagCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FlagCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Flag.
     * @param {FlagDeleteArgs} args - Arguments to delete one Flag.
     * @example
     * // Delete one Flag
     * const Flag = await prisma.flag.delete({
     *   where: {
     *     // ... filter to delete one Flag
     *   }
     * })
     * 
    **/
    delete<T extends FlagDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FlagDeleteArgs<ExtArgs>>
    ): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Flag.
     * @param {FlagUpdateArgs} args - Arguments to update one Flag.
     * @example
     * // Update one Flag
     * const flag = await prisma.flag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FlagUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FlagUpdateArgs<ExtArgs>>
    ): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Flags.
     * @param {FlagDeleteManyArgs} args - Arguments to filter Flags to delete.
     * @example
     * // Delete a few Flags
     * const { count } = await prisma.flag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FlagDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FlagDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flags
     * const flag = await prisma.flag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FlagUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FlagUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Flag.
     * @param {FlagUpsertArgs} args - Arguments to update or create a Flag.
     * @example
     * // Update or create a Flag
     * const flag = await prisma.flag.upsert({
     *   create: {
     *     // ... data to create a Flag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flag we want to update
     *   }
     * })
    **/
    upsert<T extends FlagUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FlagUpsertArgs<ExtArgs>>
    ): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Flags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagCountArgs} args - Arguments to filter Flags to count.
     * @example
     * // Count the number of Flags
     * const count = await prisma.flag.count({
     *   where: {
     *     // ... the filter for the Flags we want to count
     *   }
     * })
    **/
    count<T extends FlagCountArgs>(
      args?: Subset<T, FlagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FlagAggregateArgs>(args: Subset<T, FlagAggregateArgs>): Prisma.PrismaPromise<GetFlagAggregateType<T>>

    /**
     * Group by Flag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FlagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlagGroupByArgs['orderBy'] }
        : { orderBy?: FlagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FlagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Flag model
   */
  readonly fields: FlagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Flag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Flag model
   */ 
  interface FlagFieldRefs {
    readonly comment: FieldRef<"Flag", 'String'>
    readonly resolved: FieldRef<"Flag", 'Boolean'>
    readonly postId: FieldRef<"Flag", 'String'>
    readonly userId: FieldRef<"Flag", 'String'>
    readonly createdAt: FieldRef<"Flag", 'DateTime'>
    readonly updatedAt: FieldRef<"Flag", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Flag findUnique
   */
  export type FlagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * Filter, which Flag to fetch.
     */
    where: FlagWhereUniqueInput
  }


  /**
   * Flag findUniqueOrThrow
   */
  export type FlagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * Filter, which Flag to fetch.
     */
    where: FlagWhereUniqueInput
  }


  /**
   * Flag findFirst
   */
  export type FlagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * Filter, which Flag to fetch.
     */
    where?: FlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flags to fetch.
     */
    orderBy?: FlagOrderByWithRelationInput | FlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flags.
     */
    cursor?: FlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flags.
     */
    distinct?: FlagScalarFieldEnum | FlagScalarFieldEnum[]
  }


  /**
   * Flag findFirstOrThrow
   */
  export type FlagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * Filter, which Flag to fetch.
     */
    where?: FlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flags to fetch.
     */
    orderBy?: FlagOrderByWithRelationInput | FlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flags.
     */
    cursor?: FlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flags.
     */
    distinct?: FlagScalarFieldEnum | FlagScalarFieldEnum[]
  }


  /**
   * Flag findMany
   */
  export type FlagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * Filter, which Flags to fetch.
     */
    where?: FlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flags to fetch.
     */
    orderBy?: FlagOrderByWithRelationInput | FlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Flags.
     */
    cursor?: FlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flags.
     */
    skip?: number
    distinct?: FlagScalarFieldEnum | FlagScalarFieldEnum[]
  }


  /**
   * Flag create
   */
  export type FlagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * The data needed to create a Flag.
     */
    data: XOR<FlagCreateInput, FlagUncheckedCreateInput>
  }


  /**
   * Flag createMany
   */
  export type FlagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Flags.
     */
    data: FlagCreateManyInput | FlagCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Flag update
   */
  export type FlagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * The data needed to update a Flag.
     */
    data: XOR<FlagUpdateInput, FlagUncheckedUpdateInput>
    /**
     * Choose, which Flag to update.
     */
    where: FlagWhereUniqueInput
  }


  /**
   * Flag updateMany
   */
  export type FlagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Flags.
     */
    data: XOR<FlagUpdateManyMutationInput, FlagUncheckedUpdateManyInput>
    /**
     * Filter which Flags to update
     */
    where?: FlagWhereInput
  }


  /**
   * Flag upsert
   */
  export type FlagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * The filter to search for the Flag to update in case it exists.
     */
    where: FlagWhereUniqueInput
    /**
     * In case the Flag found by the `where` argument doesn't exist, create a new Flag with this data.
     */
    create: XOR<FlagCreateInput, FlagUncheckedCreateInput>
    /**
     * In case the Flag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlagUpdateInput, FlagUncheckedUpdateInput>
  }


  /**
   * Flag delete
   */
  export type FlagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * Filter which Flag to delete.
     */
    where: FlagWhereUniqueInput
  }


  /**
   * Flag deleteMany
   */
  export type FlagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flags to delete
     */
    where?: FlagWhereInput
  }


  /**
   * Flag without action
   */
  export type FlagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlagInclude<ExtArgs> | null
  }



  /**
   * Model Block
   */

  export type AggregateBlock = {
    _count: BlockCountAggregateOutputType | null
    _min: BlockMinAggregateOutputType | null
    _max: BlockMaxAggregateOutputType | null
  }

  export type BlockMinAggregateOutputType = {
    blockerId: string | null
    blockingId: string | null
  }

  export type BlockMaxAggregateOutputType = {
    blockerId: string | null
    blockingId: string | null
  }

  export type BlockCountAggregateOutputType = {
    blockerId: number
    blockingId: number
    _all: number
  }


  export type BlockMinAggregateInputType = {
    blockerId?: true
    blockingId?: true
  }

  export type BlockMaxAggregateInputType = {
    blockerId?: true
    blockingId?: true
  }

  export type BlockCountAggregateInputType = {
    blockerId?: true
    blockingId?: true
    _all?: true
  }

  export type BlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Block to aggregate.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blocks
    **/
    _count?: true | BlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockMaxAggregateInputType
  }

  export type GetBlockAggregateType<T extends BlockAggregateArgs> = {
        [P in keyof T & keyof AggregateBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlock[P]>
      : GetScalarType<T[P], AggregateBlock[P]>
  }




  export type BlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockWhereInput
    orderBy?: BlockOrderByWithAggregationInput | BlockOrderByWithAggregationInput[]
    by: BlockScalarFieldEnum[] | BlockScalarFieldEnum
    having?: BlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockCountAggregateInputType | true
    _min?: BlockMinAggregateInputType
    _max?: BlockMaxAggregateInputType
  }

  export type BlockGroupByOutputType = {
    blockerId: string
    blockingId: string
    _count: BlockCountAggregateOutputType | null
    _min: BlockMinAggregateOutputType | null
    _max: BlockMaxAggregateOutputType | null
  }

  type GetBlockGroupByPayload<T extends BlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockGroupByOutputType[P]>
            : GetScalarType<T[P], BlockGroupByOutputType[P]>
        }
      >
    >


  export type BlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    blockerId?: boolean
    blockingId?: boolean
    blocker?: boolean | UserDefaultArgs<ExtArgs>
    blocking?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["block"]>

  export type BlockSelectScalar = {
    blockerId?: boolean
    blockingId?: boolean
  }

  export type BlockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blocker?: boolean | UserDefaultArgs<ExtArgs>
    blocking?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $BlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Block"
    objects: {
      blocker: Prisma.$UserPayload<ExtArgs>
      blocking: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      blockerId: string
      blockingId: string
    }, ExtArgs["result"]["block"]>
    composites: {}
  }


  type BlockGetPayload<S extends boolean | null | undefined | BlockDefaultArgs> = $Result.GetResult<Prisma.$BlockPayload, S>

  type BlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BlockFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BlockCountAggregateInputType | true
    }

  export interface BlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Block'], meta: { name: 'Block' } }
    /**
     * Find zero or one Block that matches the filter.
     * @param {BlockFindUniqueArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BlockFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BlockFindUniqueArgs<ExtArgs>>
    ): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Block that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BlockFindUniqueOrThrowArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BlockFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Block that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindFirstArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BlockFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockFindFirstArgs<ExtArgs>>
    ): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Block that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindFirstOrThrowArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BlockFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Blocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blocks
     * const blocks = await prisma.block.findMany()
     * 
     * // Get first 10 Blocks
     * const blocks = await prisma.block.findMany({ take: 10 })
     * 
     * // Only select the `blockerId`
     * const blockWithBlockerIdOnly = await prisma.block.findMany({ select: { blockerId: true } })
     * 
    **/
    findMany<T extends BlockFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Block.
     * @param {BlockCreateArgs} args - Arguments to create a Block.
     * @example
     * // Create one Block
     * const Block = await prisma.block.create({
     *   data: {
     *     // ... data to create a Block
     *   }
     * })
     * 
    **/
    create<T extends BlockCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BlockCreateArgs<ExtArgs>>
    ): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Blocks.
     *     @param {BlockCreateManyArgs} args - Arguments to create many Blocks.
     *     @example
     *     // Create many Blocks
     *     const block = await prisma.block.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BlockCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Block.
     * @param {BlockDeleteArgs} args - Arguments to delete one Block.
     * @example
     * // Delete one Block
     * const Block = await prisma.block.delete({
     *   where: {
     *     // ... filter to delete one Block
     *   }
     * })
     * 
    **/
    delete<T extends BlockDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BlockDeleteArgs<ExtArgs>>
    ): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Block.
     * @param {BlockUpdateArgs} args - Arguments to update one Block.
     * @example
     * // Update one Block
     * const block = await prisma.block.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BlockUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BlockUpdateArgs<ExtArgs>>
    ): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Blocks.
     * @param {BlockDeleteManyArgs} args - Arguments to filter Blocks to delete.
     * @example
     * // Delete a few Blocks
     * const { count } = await prisma.block.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BlockDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blocks
     * const block = await prisma.block.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BlockUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BlockUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Block.
     * @param {BlockUpsertArgs} args - Arguments to update or create a Block.
     * @example
     * // Update or create a Block
     * const block = await prisma.block.upsert({
     *   create: {
     *     // ... data to create a Block
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Block we want to update
     *   }
     * })
    **/
    upsert<T extends BlockUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BlockUpsertArgs<ExtArgs>>
    ): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockCountArgs} args - Arguments to filter Blocks to count.
     * @example
     * // Count the number of Blocks
     * const count = await prisma.block.count({
     *   where: {
     *     // ... the filter for the Blocks we want to count
     *   }
     * })
    **/
    count<T extends BlockCountArgs>(
      args?: Subset<T, BlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Block.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlockAggregateArgs>(args: Subset<T, BlockAggregateArgs>): Prisma.PrismaPromise<GetBlockAggregateType<T>>

    /**
     * Group by Block.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlockGroupByArgs['orderBy'] }
        : { orderBy?: BlockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Block model
   */
  readonly fields: BlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Block.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    blocker<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    blocking<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Block model
   */ 
  interface BlockFieldRefs {
    readonly blockerId: FieldRef<"Block", 'String'>
    readonly blockingId: FieldRef<"Block", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Block findUnique
   */
  export type BlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where: BlockWhereUniqueInput
  }


  /**
   * Block findUniqueOrThrow
   */
  export type BlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where: BlockWhereUniqueInput
  }


  /**
   * Block findFirst
   */
  export type BlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blocks.
     */
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }


  /**
   * Block findFirstOrThrow
   */
  export type BlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blocks.
     */
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }


  /**
   * Block findMany
   */
  export type BlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Blocks to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }


  /**
   * Block create
   */
  export type BlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * The data needed to create a Block.
     */
    data: XOR<BlockCreateInput, BlockUncheckedCreateInput>
  }


  /**
   * Block createMany
   */
  export type BlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blocks.
     */
    data: BlockCreateManyInput | BlockCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Block update
   */
  export type BlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * The data needed to update a Block.
     */
    data: XOR<BlockUpdateInput, BlockUncheckedUpdateInput>
    /**
     * Choose, which Block to update.
     */
    where: BlockWhereUniqueInput
  }


  /**
   * Block updateMany
   */
  export type BlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blocks.
     */
    data: XOR<BlockUpdateManyMutationInput, BlockUncheckedUpdateManyInput>
    /**
     * Filter which Blocks to update
     */
    where?: BlockWhereInput
  }


  /**
   * Block upsert
   */
  export type BlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * The filter to search for the Block to update in case it exists.
     */
    where: BlockWhereUniqueInput
    /**
     * In case the Block found by the `where` argument doesn't exist, create a new Block with this data.
     */
    create: XOR<BlockCreateInput, BlockUncheckedCreateInput>
    /**
     * In case the Block was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlockUpdateInput, BlockUncheckedUpdateInput>
  }


  /**
   * Block delete
   */
  export type BlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter which Block to delete.
     */
    where: BlockWhereUniqueInput
  }


  /**
   * Block deleteMany
   */
  export type BlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blocks to delete
     */
    where?: BlockWhereInput
  }


  /**
   * Block without action
   */
  export type BlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockInclude<ExtArgs> | null
  }



  /**
   * Model Prompt
   */

  export type AggregatePrompt = {
    _count: PromptCountAggregateOutputType | null
    _min: PromptMinAggregateOutputType | null
    _max: PromptMaxAggregateOutputType | null
  }

  export type PromptMinAggregateOutputType = {
    id: string | null
    content: string | null
  }

  export type PromptMaxAggregateOutputType = {
    id: string | null
    content: string | null
  }

  export type PromptCountAggregateOutputType = {
    id: number
    content: number
    _all: number
  }


  export type PromptMinAggregateInputType = {
    id?: true
    content?: true
  }

  export type PromptMaxAggregateInputType = {
    id?: true
    content?: true
  }

  export type PromptCountAggregateInputType = {
    id?: true
    content?: true
    _all?: true
  }

  export type PromptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prompt to aggregate.
     */
    where?: PromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prompts
    **/
    _count?: true | PromptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromptMaxAggregateInputType
  }

  export type GetPromptAggregateType<T extends PromptAggregateArgs> = {
        [P in keyof T & keyof AggregatePrompt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrompt[P]>
      : GetScalarType<T[P], AggregatePrompt[P]>
  }




  export type PromptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptWhereInput
    orderBy?: PromptOrderByWithAggregationInput | PromptOrderByWithAggregationInput[]
    by: PromptScalarFieldEnum[] | PromptScalarFieldEnum
    having?: PromptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromptCountAggregateInputType | true
    _min?: PromptMinAggregateInputType
    _max?: PromptMaxAggregateInputType
  }

  export type PromptGroupByOutputType = {
    id: string
    content: string
    _count: PromptCountAggregateOutputType | null
    _min: PromptMinAggregateOutputType | null
    _max: PromptMaxAggregateOutputType | null
  }

  type GetPromptGroupByPayload<T extends PromptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromptGroupByOutputType[P]>
            : GetScalarType<T[P], PromptGroupByOutputType[P]>
        }
      >
    >


  export type PromptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
  }, ExtArgs["result"]["prompt"]>

  export type PromptSelectScalar = {
    id?: boolean
    content?: boolean
  }


  export type $PromptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prompt"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
    }, ExtArgs["result"]["prompt"]>
    composites: {}
  }


  type PromptGetPayload<S extends boolean | null | undefined | PromptDefaultArgs> = $Result.GetResult<Prisma.$PromptPayload, S>

  type PromptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PromptFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PromptCountAggregateInputType | true
    }

  export interface PromptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prompt'], meta: { name: 'Prompt' } }
    /**
     * Find zero or one Prompt that matches the filter.
     * @param {PromptFindUniqueArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PromptFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PromptFindUniqueArgs<ExtArgs>>
    ): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Prompt that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PromptFindUniqueOrThrowArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PromptFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PromptFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Prompt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptFindFirstArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PromptFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PromptFindFirstArgs<ExtArgs>>
    ): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Prompt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptFindFirstOrThrowArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PromptFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PromptFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Prompts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prompts
     * const prompts = await prisma.prompt.findMany()
     * 
     * // Get first 10 Prompts
     * const prompts = await prisma.prompt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promptWithIdOnly = await prisma.prompt.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PromptFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PromptFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Prompt.
     * @param {PromptCreateArgs} args - Arguments to create a Prompt.
     * @example
     * // Create one Prompt
     * const Prompt = await prisma.prompt.create({
     *   data: {
     *     // ... data to create a Prompt
     *   }
     * })
     * 
    **/
    create<T extends PromptCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PromptCreateArgs<ExtArgs>>
    ): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Prompts.
     *     @param {PromptCreateManyArgs} args - Arguments to create many Prompts.
     *     @example
     *     // Create many Prompts
     *     const prompt = await prisma.prompt.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PromptCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PromptCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Prompt.
     * @param {PromptDeleteArgs} args - Arguments to delete one Prompt.
     * @example
     * // Delete one Prompt
     * const Prompt = await prisma.prompt.delete({
     *   where: {
     *     // ... filter to delete one Prompt
     *   }
     * })
     * 
    **/
    delete<T extends PromptDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PromptDeleteArgs<ExtArgs>>
    ): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Prompt.
     * @param {PromptUpdateArgs} args - Arguments to update one Prompt.
     * @example
     * // Update one Prompt
     * const prompt = await prisma.prompt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PromptUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PromptUpdateArgs<ExtArgs>>
    ): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Prompts.
     * @param {PromptDeleteManyArgs} args - Arguments to filter Prompts to delete.
     * @example
     * // Delete a few Prompts
     * const { count } = await prisma.prompt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PromptDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PromptDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prompts
     * const prompt = await prisma.prompt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PromptUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PromptUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Prompt.
     * @param {PromptUpsertArgs} args - Arguments to update or create a Prompt.
     * @example
     * // Update or create a Prompt
     * const prompt = await prisma.prompt.upsert({
     *   create: {
     *     // ... data to create a Prompt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prompt we want to update
     *   }
     * })
    **/
    upsert<T extends PromptUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PromptUpsertArgs<ExtArgs>>
    ): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptCountArgs} args - Arguments to filter Prompts to count.
     * @example
     * // Count the number of Prompts
     * const count = await prisma.prompt.count({
     *   where: {
     *     // ... the filter for the Prompts we want to count
     *   }
     * })
    **/
    count<T extends PromptCountArgs>(
      args?: Subset<T, PromptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromptAggregateArgs>(args: Subset<T, PromptAggregateArgs>): Prisma.PrismaPromise<GetPromptAggregateType<T>>

    /**
     * Group by Prompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromptGroupByArgs['orderBy'] }
        : { orderBy?: PromptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prompt model
   */
  readonly fields: PromptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prompt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Prompt model
   */ 
  interface PromptFieldRefs {
    readonly id: FieldRef<"Prompt", 'String'>
    readonly content: FieldRef<"Prompt", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Prompt findUnique
   */
  export type PromptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Filter, which Prompt to fetch.
     */
    where: PromptWhereUniqueInput
  }


  /**
   * Prompt findUniqueOrThrow
   */
  export type PromptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Filter, which Prompt to fetch.
     */
    where: PromptWhereUniqueInput
  }


  /**
   * Prompt findFirst
   */
  export type PromptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Filter, which Prompt to fetch.
     */
    where?: PromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prompts.
     */
    cursor?: PromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prompts.
     */
    distinct?: PromptScalarFieldEnum | PromptScalarFieldEnum[]
  }


  /**
   * Prompt findFirstOrThrow
   */
  export type PromptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Filter, which Prompt to fetch.
     */
    where?: PromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prompts.
     */
    cursor?: PromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prompts.
     */
    distinct?: PromptScalarFieldEnum | PromptScalarFieldEnum[]
  }


  /**
   * Prompt findMany
   */
  export type PromptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Filter, which Prompts to fetch.
     */
    where?: PromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prompts.
     */
    cursor?: PromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    distinct?: PromptScalarFieldEnum | PromptScalarFieldEnum[]
  }


  /**
   * Prompt create
   */
  export type PromptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * The data needed to create a Prompt.
     */
    data: XOR<PromptCreateInput, PromptUncheckedCreateInput>
  }


  /**
   * Prompt createMany
   */
  export type PromptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prompts.
     */
    data: PromptCreateManyInput | PromptCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Prompt update
   */
  export type PromptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * The data needed to update a Prompt.
     */
    data: XOR<PromptUpdateInput, PromptUncheckedUpdateInput>
    /**
     * Choose, which Prompt to update.
     */
    where: PromptWhereUniqueInput
  }


  /**
   * Prompt updateMany
   */
  export type PromptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prompts.
     */
    data: XOR<PromptUpdateManyMutationInput, PromptUncheckedUpdateManyInput>
    /**
     * Filter which Prompts to update
     */
    where?: PromptWhereInput
  }


  /**
   * Prompt upsert
   */
  export type PromptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * The filter to search for the Prompt to update in case it exists.
     */
    where: PromptWhereUniqueInput
    /**
     * In case the Prompt found by the `where` argument doesn't exist, create a new Prompt with this data.
     */
    create: XOR<PromptCreateInput, PromptUncheckedCreateInput>
    /**
     * In case the Prompt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromptUpdateInput, PromptUncheckedUpdateInput>
  }


  /**
   * Prompt delete
   */
  export type PromptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Filter which Prompt to delete.
     */
    where: PromptWhereUniqueInput
  }


  /**
   * Prompt deleteMany
   */
  export type PromptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prompts to delete
     */
    where?: PromptWhereInput
  }


  /**
   * Prompt without action
   */
  export type PromptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
  }



  /**
   * Model EnrolledEvent
   */

  export type AggregateEnrolledEvent = {
    _count: EnrolledEventCountAggregateOutputType | null
    _min: EnrolledEventMinAggregateOutputType | null
    _max: EnrolledEventMaxAggregateOutputType | null
  }

  export type EnrolledEventMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    start: Date | null
    end: Date | null
    userId: string | null
  }

  export type EnrolledEventMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    start: Date | null
    end: Date | null
    userId: string | null
  }

  export type EnrolledEventCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    start: number
    end: number
    userId: number
    _all: number
  }


  export type EnrolledEventMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    start?: true
    end?: true
    userId?: true
  }

  export type EnrolledEventMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    start?: true
    end?: true
    userId?: true
  }

  export type EnrolledEventCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    start?: true
    end?: true
    userId?: true
    _all?: true
  }

  export type EnrolledEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnrolledEvent to aggregate.
     */
    where?: EnrolledEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnrolledEvents to fetch.
     */
    orderBy?: EnrolledEventOrderByWithRelationInput | EnrolledEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnrolledEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnrolledEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnrolledEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EnrolledEvents
    **/
    _count?: true | EnrolledEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrolledEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrolledEventMaxAggregateInputType
  }

  export type GetEnrolledEventAggregateType<T extends EnrolledEventAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrolledEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrolledEvent[P]>
      : GetScalarType<T[P], AggregateEnrolledEvent[P]>
  }




  export type EnrolledEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrolledEventWhereInput
    orderBy?: EnrolledEventOrderByWithAggregationInput | EnrolledEventOrderByWithAggregationInput[]
    by: EnrolledEventScalarFieldEnum[] | EnrolledEventScalarFieldEnum
    having?: EnrolledEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrolledEventCountAggregateInputType | true
    _min?: EnrolledEventMinAggregateInputType
    _max?: EnrolledEventMaxAggregateInputType
  }

  export type EnrolledEventGroupByOutputType = {
    id: string
    name: string
    slug: string
    start: Date
    end: Date
    userId: string
    _count: EnrolledEventCountAggregateOutputType | null
    _min: EnrolledEventMinAggregateOutputType | null
    _max: EnrolledEventMaxAggregateOutputType | null
  }

  type GetEnrolledEventGroupByPayload<T extends EnrolledEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrolledEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrolledEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrolledEventGroupByOutputType[P]>
            : GetScalarType<T[P], EnrolledEventGroupByOutputType[P]>
        }
      >
    >


  export type EnrolledEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    start?: boolean
    end?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrolledEvent"]>

  export type EnrolledEventSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    start?: boolean
    end?: boolean
    userId?: boolean
  }

  export type EnrolledEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $EnrolledEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EnrolledEvent"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      start: Date
      end: Date
      userId: string
    }, ExtArgs["result"]["enrolledEvent"]>
    composites: {}
  }


  type EnrolledEventGetPayload<S extends boolean | null | undefined | EnrolledEventDefaultArgs> = $Result.GetResult<Prisma.$EnrolledEventPayload, S>

  type EnrolledEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EnrolledEventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EnrolledEventCountAggregateInputType | true
    }

  export interface EnrolledEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EnrolledEvent'], meta: { name: 'EnrolledEvent' } }
    /**
     * Find zero or one EnrolledEvent that matches the filter.
     * @param {EnrolledEventFindUniqueArgs} args - Arguments to find a EnrolledEvent
     * @example
     * // Get one EnrolledEvent
     * const enrolledEvent = await prisma.enrolledEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EnrolledEventFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EnrolledEventFindUniqueArgs<ExtArgs>>
    ): Prisma__EnrolledEventClient<$Result.GetResult<Prisma.$EnrolledEventPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one EnrolledEvent that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EnrolledEventFindUniqueOrThrowArgs} args - Arguments to find a EnrolledEvent
     * @example
     * // Get one EnrolledEvent
     * const enrolledEvent = await prisma.enrolledEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EnrolledEventFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EnrolledEventFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EnrolledEventClient<$Result.GetResult<Prisma.$EnrolledEventPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first EnrolledEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledEventFindFirstArgs} args - Arguments to find a EnrolledEvent
     * @example
     * // Get one EnrolledEvent
     * const enrolledEvent = await prisma.enrolledEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EnrolledEventFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EnrolledEventFindFirstArgs<ExtArgs>>
    ): Prisma__EnrolledEventClient<$Result.GetResult<Prisma.$EnrolledEventPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first EnrolledEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledEventFindFirstOrThrowArgs} args - Arguments to find a EnrolledEvent
     * @example
     * // Get one EnrolledEvent
     * const enrolledEvent = await prisma.enrolledEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EnrolledEventFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EnrolledEventFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EnrolledEventClient<$Result.GetResult<Prisma.$EnrolledEventPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more EnrolledEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledEventFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EnrolledEvents
     * const enrolledEvents = await prisma.enrolledEvent.findMany()
     * 
     * // Get first 10 EnrolledEvents
     * const enrolledEvents = await prisma.enrolledEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enrolledEventWithIdOnly = await prisma.enrolledEvent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EnrolledEventFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EnrolledEventFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrolledEventPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a EnrolledEvent.
     * @param {EnrolledEventCreateArgs} args - Arguments to create a EnrolledEvent.
     * @example
     * // Create one EnrolledEvent
     * const EnrolledEvent = await prisma.enrolledEvent.create({
     *   data: {
     *     // ... data to create a EnrolledEvent
     *   }
     * })
     * 
    **/
    create<T extends EnrolledEventCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EnrolledEventCreateArgs<ExtArgs>>
    ): Prisma__EnrolledEventClient<$Result.GetResult<Prisma.$EnrolledEventPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many EnrolledEvents.
     *     @param {EnrolledEventCreateManyArgs} args - Arguments to create many EnrolledEvents.
     *     @example
     *     // Create many EnrolledEvents
     *     const enrolledEvent = await prisma.enrolledEvent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EnrolledEventCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EnrolledEventCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EnrolledEvent.
     * @param {EnrolledEventDeleteArgs} args - Arguments to delete one EnrolledEvent.
     * @example
     * // Delete one EnrolledEvent
     * const EnrolledEvent = await prisma.enrolledEvent.delete({
     *   where: {
     *     // ... filter to delete one EnrolledEvent
     *   }
     * })
     * 
    **/
    delete<T extends EnrolledEventDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EnrolledEventDeleteArgs<ExtArgs>>
    ): Prisma__EnrolledEventClient<$Result.GetResult<Prisma.$EnrolledEventPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one EnrolledEvent.
     * @param {EnrolledEventUpdateArgs} args - Arguments to update one EnrolledEvent.
     * @example
     * // Update one EnrolledEvent
     * const enrolledEvent = await prisma.enrolledEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EnrolledEventUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EnrolledEventUpdateArgs<ExtArgs>>
    ): Prisma__EnrolledEventClient<$Result.GetResult<Prisma.$EnrolledEventPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more EnrolledEvents.
     * @param {EnrolledEventDeleteManyArgs} args - Arguments to filter EnrolledEvents to delete.
     * @example
     * // Delete a few EnrolledEvents
     * const { count } = await prisma.enrolledEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EnrolledEventDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EnrolledEventDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnrolledEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EnrolledEvents
     * const enrolledEvent = await prisma.enrolledEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EnrolledEventUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EnrolledEventUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EnrolledEvent.
     * @param {EnrolledEventUpsertArgs} args - Arguments to update or create a EnrolledEvent.
     * @example
     * // Update or create a EnrolledEvent
     * const enrolledEvent = await prisma.enrolledEvent.upsert({
     *   create: {
     *     // ... data to create a EnrolledEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EnrolledEvent we want to update
     *   }
     * })
    **/
    upsert<T extends EnrolledEventUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EnrolledEventUpsertArgs<ExtArgs>>
    ): Prisma__EnrolledEventClient<$Result.GetResult<Prisma.$EnrolledEventPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of EnrolledEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledEventCountArgs} args - Arguments to filter EnrolledEvents to count.
     * @example
     * // Count the number of EnrolledEvents
     * const count = await prisma.enrolledEvent.count({
     *   where: {
     *     // ... the filter for the EnrolledEvents we want to count
     *   }
     * })
    **/
    count<T extends EnrolledEventCountArgs>(
      args?: Subset<T, EnrolledEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrolledEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EnrolledEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnrolledEventAggregateArgs>(args: Subset<T, EnrolledEventAggregateArgs>): Prisma.PrismaPromise<GetEnrolledEventAggregateType<T>>

    /**
     * Group by EnrolledEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnrolledEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrolledEventGroupByArgs['orderBy'] }
        : { orderBy?: EnrolledEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnrolledEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrolledEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EnrolledEvent model
   */
  readonly fields: EnrolledEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EnrolledEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnrolledEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the EnrolledEvent model
   */ 
  interface EnrolledEventFieldRefs {
    readonly id: FieldRef<"EnrolledEvent", 'String'>
    readonly name: FieldRef<"EnrolledEvent", 'String'>
    readonly slug: FieldRef<"EnrolledEvent", 'String'>
    readonly start: FieldRef<"EnrolledEvent", 'DateTime'>
    readonly end: FieldRef<"EnrolledEvent", 'DateTime'>
    readonly userId: FieldRef<"EnrolledEvent", 'String'>
  }
    

  // Custom InputTypes

  /**
   * EnrolledEvent findUnique
   */
  export type EnrolledEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledEvent
     */
    select?: EnrolledEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrolledEventInclude<ExtArgs> | null
    /**
     * Filter, which EnrolledEvent to fetch.
     */
    where: EnrolledEventWhereUniqueInput
  }


  /**
   * EnrolledEvent findUniqueOrThrow
   */
  export type EnrolledEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledEvent
     */
    select?: EnrolledEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrolledEventInclude<ExtArgs> | null
    /**
     * Filter, which EnrolledEvent to fetch.
     */
    where: EnrolledEventWhereUniqueInput
  }


  /**
   * EnrolledEvent findFirst
   */
  export type EnrolledEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledEvent
     */
    select?: EnrolledEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrolledEventInclude<ExtArgs> | null
    /**
     * Filter, which EnrolledEvent to fetch.
     */
    where?: EnrolledEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnrolledEvents to fetch.
     */
    orderBy?: EnrolledEventOrderByWithRelationInput | EnrolledEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnrolledEvents.
     */
    cursor?: EnrolledEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnrolledEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnrolledEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnrolledEvents.
     */
    distinct?: EnrolledEventScalarFieldEnum | EnrolledEventScalarFieldEnum[]
  }


  /**
   * EnrolledEvent findFirstOrThrow
   */
  export type EnrolledEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledEvent
     */
    select?: EnrolledEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrolledEventInclude<ExtArgs> | null
    /**
     * Filter, which EnrolledEvent to fetch.
     */
    where?: EnrolledEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnrolledEvents to fetch.
     */
    orderBy?: EnrolledEventOrderByWithRelationInput | EnrolledEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnrolledEvents.
     */
    cursor?: EnrolledEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnrolledEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnrolledEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnrolledEvents.
     */
    distinct?: EnrolledEventScalarFieldEnum | EnrolledEventScalarFieldEnum[]
  }


  /**
   * EnrolledEvent findMany
   */
  export type EnrolledEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledEvent
     */
    select?: EnrolledEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrolledEventInclude<ExtArgs> | null
    /**
     * Filter, which EnrolledEvents to fetch.
     */
    where?: EnrolledEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnrolledEvents to fetch.
     */
    orderBy?: EnrolledEventOrderByWithRelationInput | EnrolledEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EnrolledEvents.
     */
    cursor?: EnrolledEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnrolledEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnrolledEvents.
     */
    skip?: number
    distinct?: EnrolledEventScalarFieldEnum | EnrolledEventScalarFieldEnum[]
  }


  /**
   * EnrolledEvent create
   */
  export type EnrolledEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledEvent
     */
    select?: EnrolledEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrolledEventInclude<ExtArgs> | null
    /**
     * The data needed to create a EnrolledEvent.
     */
    data: XOR<EnrolledEventCreateInput, EnrolledEventUncheckedCreateInput>
  }


  /**
   * EnrolledEvent createMany
   */
  export type EnrolledEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EnrolledEvents.
     */
    data: EnrolledEventCreateManyInput | EnrolledEventCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * EnrolledEvent update
   */
  export type EnrolledEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledEvent
     */
    select?: EnrolledEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrolledEventInclude<ExtArgs> | null
    /**
     * The data needed to update a EnrolledEvent.
     */
    data: XOR<EnrolledEventUpdateInput, EnrolledEventUncheckedUpdateInput>
    /**
     * Choose, which EnrolledEvent to update.
     */
    where: EnrolledEventWhereUniqueInput
  }


  /**
   * EnrolledEvent updateMany
   */
  export type EnrolledEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EnrolledEvents.
     */
    data: XOR<EnrolledEventUpdateManyMutationInput, EnrolledEventUncheckedUpdateManyInput>
    /**
     * Filter which EnrolledEvents to update
     */
    where?: EnrolledEventWhereInput
  }


  /**
   * EnrolledEvent upsert
   */
  export type EnrolledEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledEvent
     */
    select?: EnrolledEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrolledEventInclude<ExtArgs> | null
    /**
     * The filter to search for the EnrolledEvent to update in case it exists.
     */
    where: EnrolledEventWhereUniqueInput
    /**
     * In case the EnrolledEvent found by the `where` argument doesn't exist, create a new EnrolledEvent with this data.
     */
    create: XOR<EnrolledEventCreateInput, EnrolledEventUncheckedCreateInput>
    /**
     * In case the EnrolledEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnrolledEventUpdateInput, EnrolledEventUncheckedUpdateInput>
  }


  /**
   * EnrolledEvent delete
   */
  export type EnrolledEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledEvent
     */
    select?: EnrolledEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrolledEventInclude<ExtArgs> | null
    /**
     * Filter which EnrolledEvent to delete.
     */
    where: EnrolledEventWhereUniqueInput
  }


  /**
   * EnrolledEvent deleteMany
   */
  export type EnrolledEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnrolledEvents to delete
     */
    where?: EnrolledEventWhereInput
  }


  /**
   * EnrolledEvent without action
   */
  export type EnrolledEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledEvent
     */
    select?: EnrolledEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrolledEventInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    id: 'id',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refreshToken: 'refreshToken',
    accessToken: 'accessToken',
    expiresAt: 'expiresAt',
    userId: 'userId'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    emailVerified: 'emailVerified',
    passwordHash: 'passwordHash',
    displayName: 'displayName',
    displayImage: 'displayImage',
    disabled: 'disabled',
    weeklyDigestEmail: 'weeklyDigestEmail',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    type: 'type',
    expiresAt: 'expiresAt',
    sentTo: 'sentTo',
    usedAt: 'usedAt',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdBy: 'createdBy',
    baseLikeCount: 'baseLikeCount',
    parentId: 'parentId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const LikeScalarFieldEnum: {
    postId: 'postId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LikeScalarFieldEnum = (typeof LikeScalarFieldEnum)[keyof typeof LikeScalarFieldEnum]


  export const FlagScalarFieldEnum: {
    comment: 'comment',
    resolved: 'resolved',
    postId: 'postId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FlagScalarFieldEnum = (typeof FlagScalarFieldEnum)[keyof typeof FlagScalarFieldEnum]


  export const BlockScalarFieldEnum: {
    blockerId: 'blockerId',
    blockingId: 'blockingId'
  };

  export type BlockScalarFieldEnum = (typeof BlockScalarFieldEnum)[keyof typeof BlockScalarFieldEnum]


  export const PromptScalarFieldEnum: {
    id: 'id',
    content: 'content'
  };

  export type PromptScalarFieldEnum = (typeof PromptScalarFieldEnum)[keyof typeof PromptScalarFieldEnum]


  export const EnrolledEventScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    start: 'start',
    end: 'end',
    userId: 'userId'
  };

  export type EnrolledEventScalarFieldEnum = (typeof EnrolledEventScalarFieldEnum)[keyof typeof EnrolledEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'TokenType'
   */
  export type EnumTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenType'>
    


  /**
   * Reference to a field of type 'TokenType[]'
   */
  export type ListEnumTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refreshToken?: StringNullableFilter<"Account"> | string | null
    accessToken?: StringNullableFilter<"Account"> | string | null
    expiresAt?: IntNullableFilter<"Account"> | number | null
    userId?: StringFilter<"Account"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refreshToken?: StringNullableFilter<"Account"> | string | null
    accessToken?: StringNullableFilter<"Account"> | string | null
    expiresAt?: IntNullableFilter<"Account"> | number | null
    userId?: StringFilter<"Account"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expiresAt?: IntNullableWithAggregatesFilter<"Account"> | number | null
    userId?: StringWithAggregatesFilter<"Account"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    displayName?: StringNullableFilter<"User"> | string | null
    displayImage?: StringNullableFilter<"User"> | string | null
    disabled?: BoolNullableFilter<"User"> | boolean | null
    weeklyDigestEmail?: BoolFilter<"User"> | boolean
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    blocking?: BlockListRelationFilter
    blockedBy?: BlockListRelationFilter
    enrolledEvents?: EnrolledEventListRelationFilter
    flags?: FlagListRelationFilter
    likes?: LikeListRelationFilter
    posts?: PostListRelationFilter
    tokens?: TokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    displayName?: SortOrderInput | SortOrder
    displayImage?: SortOrderInput | SortOrder
    disabled?: SortOrderInput | SortOrder
    weeklyDigestEmail?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    blocking?: BlockOrderByRelationAggregateInput
    blockedBy?: BlockOrderByRelationAggregateInput
    enrolledEvents?: EnrolledEventOrderByRelationAggregateInput
    flags?: FlagOrderByRelationAggregateInput
    likes?: LikeOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    tokens?: TokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    displayName?: StringNullableFilter<"User"> | string | null
    displayImage?: StringNullableFilter<"User"> | string | null
    disabled?: BoolNullableFilter<"User"> | boolean | null
    weeklyDigestEmail?: BoolFilter<"User"> | boolean
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    blocking?: BlockListRelationFilter
    blockedBy?: BlockListRelationFilter
    enrolledEvents?: EnrolledEventListRelationFilter
    flags?: FlagListRelationFilter
    likes?: LikeListRelationFilter
    posts?: PostListRelationFilter
    tokens?: TokenListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    displayName?: SortOrderInput | SortOrder
    displayImage?: SortOrderInput | SortOrder
    disabled?: SortOrderInput | SortOrder
    weeklyDigestEmail?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    displayName?: StringNullableWithAggregatesFilter<"User"> | string | null
    displayImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    disabled?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    weeklyDigestEmail?: BoolWithAggregatesFilter<"User"> | boolean
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    id?: StringFilter<"Token"> | string
    token?: StringFilter<"Token"> | string
    type?: EnumTokenTypeFilter<"Token"> | $Enums.TokenType
    expiresAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    sentTo?: StringNullableFilter<"Token"> | string | null
    usedAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    userId?: StringFilter<"Token"> | string
    createdAt?: DateTimeFilter<"Token"> | Date | string
    updatedAt?: DateTimeFilter<"Token"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    sentTo?: SortOrderInput | SortOrder
    usedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token_type?: TokenTokenTypeCompoundUniqueInput
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    token?: StringFilter<"Token"> | string
    type?: EnumTokenTypeFilter<"Token"> | $Enums.TokenType
    expiresAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    sentTo?: StringNullableFilter<"Token"> | string | null
    usedAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    userId?: StringFilter<"Token"> | string
    createdAt?: DateTimeFilter<"Token"> | Date | string
    updatedAt?: DateTimeFilter<"Token"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "token_type">

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    sentTo?: SortOrderInput | SortOrder
    usedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TokenCountOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Token"> | string
    token?: StringWithAggregatesFilter<"Token"> | string
    type?: EnumTokenTypeWithAggregatesFilter<"Token"> | $Enums.TokenType
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Token"> | Date | string | null
    sentTo?: StringNullableWithAggregatesFilter<"Token"> | string | null
    usedAt?: DateTimeNullableWithAggregatesFilter<"Token"> | Date | string | null
    userId?: StringWithAggregatesFilter<"Token"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    createdBy?: StringNullableFilter<"Post"> | string | null
    baseLikeCount?: IntNullableFilter<"Post"> | number | null
    parentId?: StringNullableFilter<"Post"> | string | null
    userId?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    flags?: FlagListRelationFilter
    likes?: LikeListRelationFilter
    parent?: XOR<PostNullableRelationFilter, PostWhereInput> | null
    comments?: PostListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    baseLikeCount?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    flags?: FlagOrderByRelationAggregateInput
    likes?: LikeOrderByRelationAggregateInput
    parent?: PostOrderByWithRelationInput
    comments?: PostOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    content?: StringFilter<"Post"> | string
    createdBy?: StringNullableFilter<"Post"> | string | null
    baseLikeCount?: IntNullableFilter<"Post"> | number | null
    parentId?: StringNullableFilter<"Post"> | string | null
    userId?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    flags?: FlagListRelationFilter
    likes?: LikeListRelationFilter
    parent?: XOR<PostNullableRelationFilter, PostWhereInput> | null
    comments?: PostListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    baseLikeCount?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    content?: StringWithAggregatesFilter<"Post"> | string
    createdBy?: StringNullableWithAggregatesFilter<"Post"> | string | null
    baseLikeCount?: IntNullableWithAggregatesFilter<"Post"> | number | null
    parentId?: StringNullableWithAggregatesFilter<"Post"> | string | null
    userId?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type LikeWhereInput = {
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    postId?: StringFilter<"Like"> | string
    userId?: StringFilter<"Like"> | string
    createdAt?: DateTimeFilter<"Like"> | Date | string
    updatedAt?: DateTimeFilter<"Like"> | Date | string
    post?: XOR<PostRelationFilter, PostWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type LikeOrderByWithRelationInput = {
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    post?: PostOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type LikeWhereUniqueInput = Prisma.AtLeast<{
    postId_userId?: LikePostIdUserIdCompoundUniqueInput
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    postId?: StringFilter<"Like"> | string
    userId?: StringFilter<"Like"> | string
    createdAt?: DateTimeFilter<"Like"> | Date | string
    updatedAt?: DateTimeFilter<"Like"> | Date | string
    post?: XOR<PostRelationFilter, PostWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "postId_userId">

  export type LikeOrderByWithAggregationInput = {
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LikeCountOrderByAggregateInput
    _max?: LikeMaxOrderByAggregateInput
    _min?: LikeMinOrderByAggregateInput
  }

  export type LikeScalarWhereWithAggregatesInput = {
    AND?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    OR?: LikeScalarWhereWithAggregatesInput[]
    NOT?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    postId?: StringWithAggregatesFilter<"Like"> | string
    userId?: StringWithAggregatesFilter<"Like"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Like"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Like"> | Date | string
  }

  export type FlagWhereInput = {
    AND?: FlagWhereInput | FlagWhereInput[]
    OR?: FlagWhereInput[]
    NOT?: FlagWhereInput | FlagWhereInput[]
    comment?: StringNullableFilter<"Flag"> | string | null
    resolved?: BoolFilter<"Flag"> | boolean
    postId?: StringFilter<"Flag"> | string
    userId?: StringFilter<"Flag"> | string
    createdAt?: DateTimeFilter<"Flag"> | Date | string
    updatedAt?: DateTimeFilter<"Flag"> | Date | string
    post?: XOR<PostRelationFilter, PostWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type FlagOrderByWithRelationInput = {
    comment?: SortOrderInput | SortOrder
    resolved?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    post?: PostOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type FlagWhereUniqueInput = Prisma.AtLeast<{
    postId_userId?: FlagPostIdUserIdCompoundUniqueInput
    AND?: FlagWhereInput | FlagWhereInput[]
    OR?: FlagWhereInput[]
    NOT?: FlagWhereInput | FlagWhereInput[]
    comment?: StringNullableFilter<"Flag"> | string | null
    resolved?: BoolFilter<"Flag"> | boolean
    postId?: StringFilter<"Flag"> | string
    userId?: StringFilter<"Flag"> | string
    createdAt?: DateTimeFilter<"Flag"> | Date | string
    updatedAt?: DateTimeFilter<"Flag"> | Date | string
    post?: XOR<PostRelationFilter, PostWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "postId_userId">

  export type FlagOrderByWithAggregationInput = {
    comment?: SortOrderInput | SortOrder
    resolved?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FlagCountOrderByAggregateInput
    _max?: FlagMaxOrderByAggregateInput
    _min?: FlagMinOrderByAggregateInput
  }

  export type FlagScalarWhereWithAggregatesInput = {
    AND?: FlagScalarWhereWithAggregatesInput | FlagScalarWhereWithAggregatesInput[]
    OR?: FlagScalarWhereWithAggregatesInput[]
    NOT?: FlagScalarWhereWithAggregatesInput | FlagScalarWhereWithAggregatesInput[]
    comment?: StringNullableWithAggregatesFilter<"Flag"> | string | null
    resolved?: BoolWithAggregatesFilter<"Flag"> | boolean
    postId?: StringWithAggregatesFilter<"Flag"> | string
    userId?: StringWithAggregatesFilter<"Flag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Flag"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Flag"> | Date | string
  }

  export type BlockWhereInput = {
    AND?: BlockWhereInput | BlockWhereInput[]
    OR?: BlockWhereInput[]
    NOT?: BlockWhereInput | BlockWhereInput[]
    blockerId?: StringFilter<"Block"> | string
    blockingId?: StringFilter<"Block"> | string
    blocker?: XOR<UserRelationFilter, UserWhereInput>
    blocking?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type BlockOrderByWithRelationInput = {
    blockerId?: SortOrder
    blockingId?: SortOrder
    blocker?: UserOrderByWithRelationInput
    blocking?: UserOrderByWithRelationInput
  }

  export type BlockWhereUniqueInput = Prisma.AtLeast<{
    blockerId_blockingId?: BlockBlockerIdBlockingIdCompoundUniqueInput
    AND?: BlockWhereInput | BlockWhereInput[]
    OR?: BlockWhereInput[]
    NOT?: BlockWhereInput | BlockWhereInput[]
    blockerId?: StringFilter<"Block"> | string
    blockingId?: StringFilter<"Block"> | string
    blocker?: XOR<UserRelationFilter, UserWhereInput>
    blocking?: XOR<UserRelationFilter, UserWhereInput>
  }, "blockerId_blockingId">

  export type BlockOrderByWithAggregationInput = {
    blockerId?: SortOrder
    blockingId?: SortOrder
    _count?: BlockCountOrderByAggregateInput
    _max?: BlockMaxOrderByAggregateInput
    _min?: BlockMinOrderByAggregateInput
  }

  export type BlockScalarWhereWithAggregatesInput = {
    AND?: BlockScalarWhereWithAggregatesInput | BlockScalarWhereWithAggregatesInput[]
    OR?: BlockScalarWhereWithAggregatesInput[]
    NOT?: BlockScalarWhereWithAggregatesInput | BlockScalarWhereWithAggregatesInput[]
    blockerId?: StringWithAggregatesFilter<"Block"> | string
    blockingId?: StringWithAggregatesFilter<"Block"> | string
  }

  export type PromptWhereInput = {
    AND?: PromptWhereInput | PromptWhereInput[]
    OR?: PromptWhereInput[]
    NOT?: PromptWhereInput | PromptWhereInput[]
    id?: StringFilter<"Prompt"> | string
    content?: StringFilter<"Prompt"> | string
  }

  export type PromptOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
  }

  export type PromptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PromptWhereInput | PromptWhereInput[]
    OR?: PromptWhereInput[]
    NOT?: PromptWhereInput | PromptWhereInput[]
    content?: StringFilter<"Prompt"> | string
  }, "id">

  export type PromptOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    _count?: PromptCountOrderByAggregateInput
    _max?: PromptMaxOrderByAggregateInput
    _min?: PromptMinOrderByAggregateInput
  }

  export type PromptScalarWhereWithAggregatesInput = {
    AND?: PromptScalarWhereWithAggregatesInput | PromptScalarWhereWithAggregatesInput[]
    OR?: PromptScalarWhereWithAggregatesInput[]
    NOT?: PromptScalarWhereWithAggregatesInput | PromptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Prompt"> | string
    content?: StringWithAggregatesFilter<"Prompt"> | string
  }

  export type EnrolledEventWhereInput = {
    AND?: EnrolledEventWhereInput | EnrolledEventWhereInput[]
    OR?: EnrolledEventWhereInput[]
    NOT?: EnrolledEventWhereInput | EnrolledEventWhereInput[]
    id?: StringFilter<"EnrolledEvent"> | string
    name?: StringFilter<"EnrolledEvent"> | string
    slug?: StringFilter<"EnrolledEvent"> | string
    start?: DateTimeFilter<"EnrolledEvent"> | Date | string
    end?: DateTimeFilter<"EnrolledEvent"> | Date | string
    userId?: StringFilter<"EnrolledEvent"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type EnrolledEventOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    start?: SortOrder
    end?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EnrolledEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EnrolledEventWhereInput | EnrolledEventWhereInput[]
    OR?: EnrolledEventWhereInput[]
    NOT?: EnrolledEventWhereInput | EnrolledEventWhereInput[]
    name?: StringFilter<"EnrolledEvent"> | string
    slug?: StringFilter<"EnrolledEvent"> | string
    start?: DateTimeFilter<"EnrolledEvent"> | Date | string
    end?: DateTimeFilter<"EnrolledEvent"> | Date | string
    userId?: StringFilter<"EnrolledEvent"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type EnrolledEventOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    start?: SortOrder
    end?: SortOrder
    userId?: SortOrder
    _count?: EnrolledEventCountOrderByAggregateInput
    _max?: EnrolledEventMaxOrderByAggregateInput
    _min?: EnrolledEventMinOrderByAggregateInput
  }

  export type EnrolledEventScalarWhereWithAggregatesInput = {
    AND?: EnrolledEventScalarWhereWithAggregatesInput | EnrolledEventScalarWhereWithAggregatesInput[]
    OR?: EnrolledEventScalarWhereWithAggregatesInput[]
    NOT?: EnrolledEventScalarWhereWithAggregatesInput | EnrolledEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EnrolledEvent"> | string
    name?: StringWithAggregatesFilter<"EnrolledEvent"> | string
    slug?: StringWithAggregatesFilter<"EnrolledEvent"> | string
    start?: DateTimeWithAggregatesFilter<"EnrolledEvent"> | Date | string
    end?: DateTimeWithAggregatesFilter<"EnrolledEvent"> | Date | string
    userId?: StringWithAggregatesFilter<"EnrolledEvent"> | string
  }

  export type AccountCreateInput = {
    id?: string
    provider: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    expiresAt?: number | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    provider: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    expiresAt?: number | null
    userId: string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateManyInput = {
    id?: string
    provider: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    expiresAt?: number | null
    userId: string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    email?: string | null
    emailVerified?: Date | string | null
    passwordHash?: string | null
    displayName?: string | null
    displayImage?: string | null
    disabled?: boolean | null
    weeklyDigestEmail?: boolean
    role?: $Enums.UserRole
    createdAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    blocking?: BlockCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockCreateNestedManyWithoutBlockingInput
    enrolledEvents?: EnrolledEventCreateNestedManyWithoutUserInput
    flags?: FlagCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    tokens?: TokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email?: string | null
    emailVerified?: Date | string | null
    passwordHash?: string | null
    displayName?: string | null
    displayImage?: string | null
    disabled?: boolean | null
    weeklyDigestEmail?: boolean
    role?: $Enums.UserRole
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    blocking?: BlockUncheckedCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockUncheckedCreateNestedManyWithoutBlockingInput
    enrolledEvents?: EnrolledEventUncheckedCreateNestedManyWithoutUserInput
    flags?: FlagUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    displayImage?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weeklyDigestEmail?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    blocking?: BlockUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockUpdateManyWithoutBlockingNestedInput
    enrolledEvents?: EnrolledEventUpdateManyWithoutUserNestedInput
    flags?: FlagUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    displayImage?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weeklyDigestEmail?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    blocking?: BlockUncheckedUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockUncheckedUpdateManyWithoutBlockingNestedInput
    enrolledEvents?: EnrolledEventUncheckedUpdateManyWithoutUserNestedInput
    flags?: FlagUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email?: string | null
    emailVerified?: Date | string | null
    passwordHash?: string | null
    displayName?: string | null
    displayImage?: string | null
    disabled?: boolean | null
    weeklyDigestEmail?: boolean
    role?: $Enums.UserRole
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    displayImage?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weeklyDigestEmail?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    displayImage?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weeklyDigestEmail?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateInput = {
    id?: string
    token: string
    type: $Enums.TokenType
    expiresAt?: Date | string | null
    sentTo?: string | null
    usedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTokensInput
  }

  export type TokenUncheckedCreateInput = {
    id?: string
    token: string
    type: $Enums.TokenType
    expiresAt?: Date | string | null
    sentTo?: string | null
    usedAt?: Date | string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentTo?: NullableStringFieldUpdateOperationsInput | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTokensNestedInput
  }

  export type TokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentTo?: NullableStringFieldUpdateOperationsInput | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateManyInput = {
    id?: string
    token: string
    type: $Enums.TokenType
    expiresAt?: Date | string | null
    sentTo?: string | null
    usedAt?: Date | string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentTo?: NullableStringFieldUpdateOperationsInput | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentTo?: NullableStringFieldUpdateOperationsInput | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    id?: string
    content: string
    createdBy?: string | null
    baseLikeCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flags?: FlagCreateNestedManyWithoutPostInput
    likes?: LikeCreateNestedManyWithoutPostInput
    parent?: PostCreateNestedOneWithoutCommentsInput
    comments?: PostCreateNestedManyWithoutParentInput
    user: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    content: string
    createdBy?: string | null
    baseLikeCount?: number | null
    parentId?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    flags?: FlagUncheckedCreateNestedManyWithoutPostInput
    likes?: LikeUncheckedCreateNestedManyWithoutPostInput
    comments?: PostUncheckedCreateNestedManyWithoutParentInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    baseLikeCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: FlagUpdateManyWithoutPostNestedInput
    likes?: LikeUpdateManyWithoutPostNestedInput
    parent?: PostUpdateOneWithoutCommentsNestedInput
    comments?: PostUpdateManyWithoutParentNestedInput
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    baseLikeCount?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: FlagUncheckedUpdateManyWithoutPostNestedInput
    likes?: LikeUncheckedUpdateManyWithoutPostNestedInput
    comments?: PostUncheckedUpdateManyWithoutParentNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    content: string
    createdBy?: string | null
    baseLikeCount?: number | null
    parentId?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    baseLikeCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    baseLikeCount?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutLikesInput
    user: UserCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateInput = {
    postId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutLikesNestedInput
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateInput = {
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeCreateManyInput = {
    postId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyInput = {
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlagCreateInput = {
    comment?: string | null
    resolved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutFlagsInput
    user: UserCreateNestedOneWithoutFlagsInput
  }

  export type FlagUncheckedCreateInput = {
    comment?: string | null
    resolved?: boolean
    postId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlagUpdateInput = {
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutFlagsNestedInput
    user?: UserUpdateOneRequiredWithoutFlagsNestedInput
  }

  export type FlagUncheckedUpdateInput = {
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlagCreateManyInput = {
    comment?: string | null
    resolved?: boolean
    postId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlagUpdateManyMutationInput = {
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlagUncheckedUpdateManyInput = {
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockCreateInput = {
    blocker: UserCreateNestedOneWithoutBlockingInput
    blocking: UserCreateNestedOneWithoutBlockedByInput
  }

  export type BlockUncheckedCreateInput = {
    blockerId: string
    blockingId: string
  }

  export type BlockUpdateInput = {
    blocker?: UserUpdateOneRequiredWithoutBlockingNestedInput
    blocking?: UserUpdateOneRequiredWithoutBlockedByNestedInput
  }

  export type BlockUncheckedUpdateInput = {
    blockerId?: StringFieldUpdateOperationsInput | string
    blockingId?: StringFieldUpdateOperationsInput | string
  }

  export type BlockCreateManyInput = {
    blockerId: string
    blockingId: string
  }

  export type BlockUpdateManyMutationInput = {

  }

  export type BlockUncheckedUpdateManyInput = {
    blockerId?: StringFieldUpdateOperationsInput | string
    blockingId?: StringFieldUpdateOperationsInput | string
  }

  export type PromptCreateInput = {
    id?: string
    content: string
  }

  export type PromptUncheckedCreateInput = {
    id?: string
    content: string
  }

  export type PromptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type PromptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type PromptCreateManyInput = {
    id?: string
    content: string
  }

  export type PromptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type PromptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type EnrolledEventCreateInput = {
    id?: string
    name: string
    slug: string
    start?: Date | string
    end: Date | string
    user: UserCreateNestedOneWithoutEnrolledEventsInput
  }

  export type EnrolledEventUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    start?: Date | string
    end: Date | string
    userId: string
  }

  export type EnrolledEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEnrolledEventsNestedInput
  }

  export type EnrolledEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EnrolledEventCreateManyInput = {
    id?: string
    name: string
    slug: string
    start?: Date | string
    end: Date | string
    userId: string
  }

  export type EnrolledEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrolledEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expiresAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expiresAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type BlockListRelationFilter = {
    every?: BlockWhereInput
    some?: BlockWhereInput
    none?: BlockWhereInput
  }

  export type EnrolledEventListRelationFilter = {
    every?: EnrolledEventWhereInput
    some?: EnrolledEventWhereInput
    none?: EnrolledEventWhereInput
  }

  export type FlagListRelationFilter = {
    every?: FlagWhereInput
    some?: FlagWhereInput
    none?: FlagWhereInput
  }

  export type LikeListRelationFilter = {
    every?: LikeWhereInput
    some?: LikeWhereInput
    none?: LikeWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type TokenListRelationFilter = {
    every?: TokenWhereInput
    some?: TokenWhereInput
    none?: TokenWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnrolledEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    passwordHash?: SortOrder
    displayName?: SortOrder
    displayImage?: SortOrder
    disabled?: SortOrder
    weeklyDigestEmail?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    passwordHash?: SortOrder
    displayName?: SortOrder
    displayImage?: SortOrder
    disabled?: SortOrder
    weeklyDigestEmail?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    passwordHash?: SortOrder
    displayName?: SortOrder
    displayImage?: SortOrder
    disabled?: SortOrder
    weeklyDigestEmail?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | $Enums.TokenType
  }

  export type TokenTokenTypeCompoundUniqueInput = {
    token: string
    type: $Enums.TokenType
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    sentTo?: SortOrder
    usedAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    sentTo?: SortOrder
    usedAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    sentTo?: SortOrder
    usedAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>
  }

  export type PostNullableRelationFilter = {
    is?: PostWhereInput | null
    isNot?: PostWhereInput | null
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdBy?: SortOrder
    baseLikeCount?: SortOrder
    parentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    baseLikeCount?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdBy?: SortOrder
    baseLikeCount?: SortOrder
    parentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdBy?: SortOrder
    baseLikeCount?: SortOrder
    parentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    baseLikeCount?: SortOrder
  }

  export type PostRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type LikePostIdUserIdCompoundUniqueInput = {
    postId: string
    userId: string
  }

  export type LikeCountOrderByAggregateInput = {
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LikeMaxOrderByAggregateInput = {
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LikeMinOrderByAggregateInput = {
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlagPostIdUserIdCompoundUniqueInput = {
    postId: string
    userId: string
  }

  export type FlagCountOrderByAggregateInput = {
    comment?: SortOrder
    resolved?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlagMaxOrderByAggregateInput = {
    comment?: SortOrder
    resolved?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlagMinOrderByAggregateInput = {
    comment?: SortOrder
    resolved?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlockBlockerIdBlockingIdCompoundUniqueInput = {
    blockerId: string
    blockingId: string
  }

  export type BlockCountOrderByAggregateInput = {
    blockerId?: SortOrder
    blockingId?: SortOrder
  }

  export type BlockMaxOrderByAggregateInput = {
    blockerId?: SortOrder
    blockingId?: SortOrder
  }

  export type BlockMinOrderByAggregateInput = {
    blockerId?: SortOrder
    blockingId?: SortOrder
  }

  export type PromptCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
  }

  export type PromptMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
  }

  export type PromptMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
  }

  export type EnrolledEventCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    start?: SortOrder
    end?: SortOrder
    userId?: SortOrder
  }

  export type EnrolledEventMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    start?: SortOrder
    end?: SortOrder
    userId?: SortOrder
  }

  export type EnrolledEventMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    start?: SortOrder
    end?: SortOrder
    userId?: SortOrder
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type BlockCreateNestedManyWithoutBlockerInput = {
    create?: XOR<BlockCreateWithoutBlockerInput, BlockUncheckedCreateWithoutBlockerInput> | BlockCreateWithoutBlockerInput[] | BlockUncheckedCreateWithoutBlockerInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutBlockerInput | BlockCreateOrConnectWithoutBlockerInput[]
    createMany?: BlockCreateManyBlockerInputEnvelope
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
  }

  export type BlockCreateNestedManyWithoutBlockingInput = {
    create?: XOR<BlockCreateWithoutBlockingInput, BlockUncheckedCreateWithoutBlockingInput> | BlockCreateWithoutBlockingInput[] | BlockUncheckedCreateWithoutBlockingInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutBlockingInput | BlockCreateOrConnectWithoutBlockingInput[]
    createMany?: BlockCreateManyBlockingInputEnvelope
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
  }

  export type EnrolledEventCreateNestedManyWithoutUserInput = {
    create?: XOR<EnrolledEventCreateWithoutUserInput, EnrolledEventUncheckedCreateWithoutUserInput> | EnrolledEventCreateWithoutUserInput[] | EnrolledEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrolledEventCreateOrConnectWithoutUserInput | EnrolledEventCreateOrConnectWithoutUserInput[]
    createMany?: EnrolledEventCreateManyUserInputEnvelope
    connect?: EnrolledEventWhereUniqueInput | EnrolledEventWhereUniqueInput[]
  }

  export type FlagCreateNestedManyWithoutUserInput = {
    create?: XOR<FlagCreateWithoutUserInput, FlagUncheckedCreateWithoutUserInput> | FlagCreateWithoutUserInput[] | FlagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlagCreateOrConnectWithoutUserInput | FlagCreateOrConnectWithoutUserInput[]
    createMany?: FlagCreateManyUserInputEnvelope
    connect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
  }

  export type LikeCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type TokenCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type BlockUncheckedCreateNestedManyWithoutBlockerInput = {
    create?: XOR<BlockCreateWithoutBlockerInput, BlockUncheckedCreateWithoutBlockerInput> | BlockCreateWithoutBlockerInput[] | BlockUncheckedCreateWithoutBlockerInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutBlockerInput | BlockCreateOrConnectWithoutBlockerInput[]
    createMany?: BlockCreateManyBlockerInputEnvelope
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
  }

  export type BlockUncheckedCreateNestedManyWithoutBlockingInput = {
    create?: XOR<BlockCreateWithoutBlockingInput, BlockUncheckedCreateWithoutBlockingInput> | BlockCreateWithoutBlockingInput[] | BlockUncheckedCreateWithoutBlockingInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutBlockingInput | BlockCreateOrConnectWithoutBlockingInput[]
    createMany?: BlockCreateManyBlockingInputEnvelope
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
  }

  export type EnrolledEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EnrolledEventCreateWithoutUserInput, EnrolledEventUncheckedCreateWithoutUserInput> | EnrolledEventCreateWithoutUserInput[] | EnrolledEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrolledEventCreateOrConnectWithoutUserInput | EnrolledEventCreateOrConnectWithoutUserInput[]
    createMany?: EnrolledEventCreateManyUserInputEnvelope
    connect?: EnrolledEventWhereUniqueInput | EnrolledEventWhereUniqueInput[]
  }

  export type FlagUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FlagCreateWithoutUserInput, FlagUncheckedCreateWithoutUserInput> | FlagCreateWithoutUserInput[] | FlagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlagCreateOrConnectWithoutUserInput | FlagCreateOrConnectWithoutUserInput[]
    createMany?: FlagCreateManyUserInputEnvelope
    connect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type TokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type BlockUpdateManyWithoutBlockerNestedInput = {
    create?: XOR<BlockCreateWithoutBlockerInput, BlockUncheckedCreateWithoutBlockerInput> | BlockCreateWithoutBlockerInput[] | BlockUncheckedCreateWithoutBlockerInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutBlockerInput | BlockCreateOrConnectWithoutBlockerInput[]
    upsert?: BlockUpsertWithWhereUniqueWithoutBlockerInput | BlockUpsertWithWhereUniqueWithoutBlockerInput[]
    createMany?: BlockCreateManyBlockerInputEnvelope
    set?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    disconnect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    delete?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    update?: BlockUpdateWithWhereUniqueWithoutBlockerInput | BlockUpdateWithWhereUniqueWithoutBlockerInput[]
    updateMany?: BlockUpdateManyWithWhereWithoutBlockerInput | BlockUpdateManyWithWhereWithoutBlockerInput[]
    deleteMany?: BlockScalarWhereInput | BlockScalarWhereInput[]
  }

  export type BlockUpdateManyWithoutBlockingNestedInput = {
    create?: XOR<BlockCreateWithoutBlockingInput, BlockUncheckedCreateWithoutBlockingInput> | BlockCreateWithoutBlockingInput[] | BlockUncheckedCreateWithoutBlockingInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutBlockingInput | BlockCreateOrConnectWithoutBlockingInput[]
    upsert?: BlockUpsertWithWhereUniqueWithoutBlockingInput | BlockUpsertWithWhereUniqueWithoutBlockingInput[]
    createMany?: BlockCreateManyBlockingInputEnvelope
    set?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    disconnect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    delete?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    update?: BlockUpdateWithWhereUniqueWithoutBlockingInput | BlockUpdateWithWhereUniqueWithoutBlockingInput[]
    updateMany?: BlockUpdateManyWithWhereWithoutBlockingInput | BlockUpdateManyWithWhereWithoutBlockingInput[]
    deleteMany?: BlockScalarWhereInput | BlockScalarWhereInput[]
  }

  export type EnrolledEventUpdateManyWithoutUserNestedInput = {
    create?: XOR<EnrolledEventCreateWithoutUserInput, EnrolledEventUncheckedCreateWithoutUserInput> | EnrolledEventCreateWithoutUserInput[] | EnrolledEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrolledEventCreateOrConnectWithoutUserInput | EnrolledEventCreateOrConnectWithoutUserInput[]
    upsert?: EnrolledEventUpsertWithWhereUniqueWithoutUserInput | EnrolledEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EnrolledEventCreateManyUserInputEnvelope
    set?: EnrolledEventWhereUniqueInput | EnrolledEventWhereUniqueInput[]
    disconnect?: EnrolledEventWhereUniqueInput | EnrolledEventWhereUniqueInput[]
    delete?: EnrolledEventWhereUniqueInput | EnrolledEventWhereUniqueInput[]
    connect?: EnrolledEventWhereUniqueInput | EnrolledEventWhereUniqueInput[]
    update?: EnrolledEventUpdateWithWhereUniqueWithoutUserInput | EnrolledEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EnrolledEventUpdateManyWithWhereWithoutUserInput | EnrolledEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EnrolledEventScalarWhereInput | EnrolledEventScalarWhereInput[]
  }

  export type FlagUpdateManyWithoutUserNestedInput = {
    create?: XOR<FlagCreateWithoutUserInput, FlagUncheckedCreateWithoutUserInput> | FlagCreateWithoutUserInput[] | FlagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlagCreateOrConnectWithoutUserInput | FlagCreateOrConnectWithoutUserInput[]
    upsert?: FlagUpsertWithWhereUniqueWithoutUserInput | FlagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FlagCreateManyUserInputEnvelope
    set?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    disconnect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    delete?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    connect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    update?: FlagUpdateWithWhereUniqueWithoutUserInput | FlagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FlagUpdateManyWithWhereWithoutUserInput | FlagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FlagScalarWhereInput | FlagScalarWhereInput[]
  }

  export type LikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutUserInput | LikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutUserInput | LikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutUserInput | LikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type PostUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type TokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type BlockUncheckedUpdateManyWithoutBlockerNestedInput = {
    create?: XOR<BlockCreateWithoutBlockerInput, BlockUncheckedCreateWithoutBlockerInput> | BlockCreateWithoutBlockerInput[] | BlockUncheckedCreateWithoutBlockerInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutBlockerInput | BlockCreateOrConnectWithoutBlockerInput[]
    upsert?: BlockUpsertWithWhereUniqueWithoutBlockerInput | BlockUpsertWithWhereUniqueWithoutBlockerInput[]
    createMany?: BlockCreateManyBlockerInputEnvelope
    set?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    disconnect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    delete?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    update?: BlockUpdateWithWhereUniqueWithoutBlockerInput | BlockUpdateWithWhereUniqueWithoutBlockerInput[]
    updateMany?: BlockUpdateManyWithWhereWithoutBlockerInput | BlockUpdateManyWithWhereWithoutBlockerInput[]
    deleteMany?: BlockScalarWhereInput | BlockScalarWhereInput[]
  }

  export type BlockUncheckedUpdateManyWithoutBlockingNestedInput = {
    create?: XOR<BlockCreateWithoutBlockingInput, BlockUncheckedCreateWithoutBlockingInput> | BlockCreateWithoutBlockingInput[] | BlockUncheckedCreateWithoutBlockingInput[]
    connectOrCreate?: BlockCreateOrConnectWithoutBlockingInput | BlockCreateOrConnectWithoutBlockingInput[]
    upsert?: BlockUpsertWithWhereUniqueWithoutBlockingInput | BlockUpsertWithWhereUniqueWithoutBlockingInput[]
    createMany?: BlockCreateManyBlockingInputEnvelope
    set?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    disconnect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    delete?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    connect?: BlockWhereUniqueInput | BlockWhereUniqueInput[]
    update?: BlockUpdateWithWhereUniqueWithoutBlockingInput | BlockUpdateWithWhereUniqueWithoutBlockingInput[]
    updateMany?: BlockUpdateManyWithWhereWithoutBlockingInput | BlockUpdateManyWithWhereWithoutBlockingInput[]
    deleteMany?: BlockScalarWhereInput | BlockScalarWhereInput[]
  }

  export type EnrolledEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EnrolledEventCreateWithoutUserInput, EnrolledEventUncheckedCreateWithoutUserInput> | EnrolledEventCreateWithoutUserInput[] | EnrolledEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrolledEventCreateOrConnectWithoutUserInput | EnrolledEventCreateOrConnectWithoutUserInput[]
    upsert?: EnrolledEventUpsertWithWhereUniqueWithoutUserInput | EnrolledEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EnrolledEventCreateManyUserInputEnvelope
    set?: EnrolledEventWhereUniqueInput | EnrolledEventWhereUniqueInput[]
    disconnect?: EnrolledEventWhereUniqueInput | EnrolledEventWhereUniqueInput[]
    delete?: EnrolledEventWhereUniqueInput | EnrolledEventWhereUniqueInput[]
    connect?: EnrolledEventWhereUniqueInput | EnrolledEventWhereUniqueInput[]
    update?: EnrolledEventUpdateWithWhereUniqueWithoutUserInput | EnrolledEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EnrolledEventUpdateManyWithWhereWithoutUserInput | EnrolledEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EnrolledEventScalarWhereInput | EnrolledEventScalarWhereInput[]
  }

  export type FlagUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FlagCreateWithoutUserInput, FlagUncheckedCreateWithoutUserInput> | FlagCreateWithoutUserInput[] | FlagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlagCreateOrConnectWithoutUserInput | FlagCreateOrConnectWithoutUserInput[]
    upsert?: FlagUpsertWithWhereUniqueWithoutUserInput | FlagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FlagCreateManyUserInputEnvelope
    set?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    disconnect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    delete?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    connect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    update?: FlagUpdateWithWhereUniqueWithoutUserInput | FlagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FlagUpdateManyWithWhereWithoutUserInput | FlagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FlagScalarWhereInput | FlagScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutUserInput | LikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutUserInput | LikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutUserInput | LikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type TokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTokensInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTokenTypeFieldUpdateOperationsInput = {
    set?: $Enums.TokenType
  }

  export type UserUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    upsert?: UserUpsertWithoutTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokensInput, UserUpdateWithoutTokensInput>, UserUncheckedUpdateWithoutTokensInput>
  }

  export type FlagCreateNestedManyWithoutPostInput = {
    create?: XOR<FlagCreateWithoutPostInput, FlagUncheckedCreateWithoutPostInput> | FlagCreateWithoutPostInput[] | FlagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: FlagCreateOrConnectWithoutPostInput | FlagCreateOrConnectWithoutPostInput[]
    createMany?: FlagCreateManyPostInputEnvelope
    connect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
  }

  export type LikeCreateNestedManyWithoutPostInput = {
    create?: XOR<LikeCreateWithoutPostInput, LikeUncheckedCreateWithoutPostInput> | LikeCreateWithoutPostInput[] | LikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutPostInput | LikeCreateOrConnectWithoutPostInput[]
    createMany?: LikeCreateManyPostInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type PostCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    connect?: PostWhereUniqueInput
  }

  export type PostCreateNestedManyWithoutParentInput = {
    create?: XOR<PostCreateWithoutParentInput, PostUncheckedCreateWithoutParentInput> | PostCreateWithoutParentInput[] | PostUncheckedCreateWithoutParentInput[]
    connectOrCreate?: PostCreateOrConnectWithoutParentInput | PostCreateOrConnectWithoutParentInput[]
    createMany?: PostCreateManyParentInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type FlagUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<FlagCreateWithoutPostInput, FlagUncheckedCreateWithoutPostInput> | FlagCreateWithoutPostInput[] | FlagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: FlagCreateOrConnectWithoutPostInput | FlagCreateOrConnectWithoutPostInput[]
    createMany?: FlagCreateManyPostInputEnvelope
    connect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<LikeCreateWithoutPostInput, LikeUncheckedCreateWithoutPostInput> | LikeCreateWithoutPostInput[] | LikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutPostInput | LikeCreateOrConnectWithoutPostInput[]
    createMany?: LikeCreateManyPostInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<PostCreateWithoutParentInput, PostUncheckedCreateWithoutParentInput> | PostCreateWithoutParentInput[] | PostUncheckedCreateWithoutParentInput[]
    connectOrCreate?: PostCreateOrConnectWithoutParentInput | PostCreateOrConnectWithoutParentInput[]
    createMany?: PostCreateManyParentInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type FlagUpdateManyWithoutPostNestedInput = {
    create?: XOR<FlagCreateWithoutPostInput, FlagUncheckedCreateWithoutPostInput> | FlagCreateWithoutPostInput[] | FlagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: FlagCreateOrConnectWithoutPostInput | FlagCreateOrConnectWithoutPostInput[]
    upsert?: FlagUpsertWithWhereUniqueWithoutPostInput | FlagUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: FlagCreateManyPostInputEnvelope
    set?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    disconnect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    delete?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    connect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    update?: FlagUpdateWithWhereUniqueWithoutPostInput | FlagUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: FlagUpdateManyWithWhereWithoutPostInput | FlagUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: FlagScalarWhereInput | FlagScalarWhereInput[]
  }

  export type LikeUpdateManyWithoutPostNestedInput = {
    create?: XOR<LikeCreateWithoutPostInput, LikeUncheckedCreateWithoutPostInput> | LikeCreateWithoutPostInput[] | LikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutPostInput | LikeCreateOrConnectWithoutPostInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutPostInput | LikeUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: LikeCreateManyPostInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutPostInput | LikeUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutPostInput | LikeUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type PostUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    upsert?: PostUpsertWithoutCommentsInput
    disconnect?: PostWhereInput | boolean
    delete?: PostWhereInput | boolean
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutCommentsInput, PostUpdateWithoutCommentsInput>, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type PostUpdateManyWithoutParentNestedInput = {
    create?: XOR<PostCreateWithoutParentInput, PostUncheckedCreateWithoutParentInput> | PostCreateWithoutParentInput[] | PostUncheckedCreateWithoutParentInput[]
    connectOrCreate?: PostCreateOrConnectWithoutParentInput | PostCreateOrConnectWithoutParentInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutParentInput | PostUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: PostCreateManyParentInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutParentInput | PostUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: PostUpdateManyWithWhereWithoutParentInput | PostUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type FlagUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<FlagCreateWithoutPostInput, FlagUncheckedCreateWithoutPostInput> | FlagCreateWithoutPostInput[] | FlagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: FlagCreateOrConnectWithoutPostInput | FlagCreateOrConnectWithoutPostInput[]
    upsert?: FlagUpsertWithWhereUniqueWithoutPostInput | FlagUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: FlagCreateManyPostInputEnvelope
    set?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    disconnect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    delete?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    connect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    update?: FlagUpdateWithWhereUniqueWithoutPostInput | FlagUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: FlagUpdateManyWithWhereWithoutPostInput | FlagUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: FlagScalarWhereInput | FlagScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<LikeCreateWithoutPostInput, LikeUncheckedCreateWithoutPostInput> | LikeCreateWithoutPostInput[] | LikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutPostInput | LikeCreateOrConnectWithoutPostInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutPostInput | LikeUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: LikeCreateManyPostInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutPostInput | LikeUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutPostInput | LikeUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<PostCreateWithoutParentInput, PostUncheckedCreateWithoutParentInput> | PostCreateWithoutParentInput[] | PostUncheckedCreateWithoutParentInput[]
    connectOrCreate?: PostCreateOrConnectWithoutParentInput | PostCreateOrConnectWithoutParentInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutParentInput | PostUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: PostCreateManyParentInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutParentInput | PostUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: PostUpdateManyWithWhereWithoutParentInput | PostUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutLikesInput = {
    create?: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
    connectOrCreate?: PostCreateOrConnectWithoutLikesInput
    connect?: PostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLikesInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    connect?: UserWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
    connectOrCreate?: PostCreateOrConnectWithoutLikesInput
    upsert?: PostUpsertWithoutLikesInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutLikesInput, PostUpdateWithoutLikesInput>, PostUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    upsert?: UserUpsertWithoutLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikesInput, UserUpdateWithoutLikesInput>, UserUncheckedUpdateWithoutLikesInput>
  }

  export type PostCreateNestedOneWithoutFlagsInput = {
    create?: XOR<PostCreateWithoutFlagsInput, PostUncheckedCreateWithoutFlagsInput>
    connectOrCreate?: PostCreateOrConnectWithoutFlagsInput
    connect?: PostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFlagsInput = {
    create?: XOR<UserCreateWithoutFlagsInput, UserUncheckedCreateWithoutFlagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlagsInput
    connect?: UserWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutFlagsNestedInput = {
    create?: XOR<PostCreateWithoutFlagsInput, PostUncheckedCreateWithoutFlagsInput>
    connectOrCreate?: PostCreateOrConnectWithoutFlagsInput
    upsert?: PostUpsertWithoutFlagsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutFlagsInput, PostUpdateWithoutFlagsInput>, PostUncheckedUpdateWithoutFlagsInput>
  }

  export type UserUpdateOneRequiredWithoutFlagsNestedInput = {
    create?: XOR<UserCreateWithoutFlagsInput, UserUncheckedCreateWithoutFlagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlagsInput
    upsert?: UserUpsertWithoutFlagsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFlagsInput, UserUpdateWithoutFlagsInput>, UserUncheckedUpdateWithoutFlagsInput>
  }

  export type UserCreateNestedOneWithoutBlockingInput = {
    create?: XOR<UserCreateWithoutBlockingInput, UserUncheckedCreateWithoutBlockingInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlockingInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBlockedByInput = {
    create?: XOR<UserCreateWithoutBlockedByInput, UserUncheckedCreateWithoutBlockedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlockedByInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBlockingNestedInput = {
    create?: XOR<UserCreateWithoutBlockingInput, UserUncheckedCreateWithoutBlockingInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlockingInput
    upsert?: UserUpsertWithoutBlockingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlockingInput, UserUpdateWithoutBlockingInput>, UserUncheckedUpdateWithoutBlockingInput>
  }

  export type UserUpdateOneRequiredWithoutBlockedByNestedInput = {
    create?: XOR<UserCreateWithoutBlockedByInput, UserUncheckedCreateWithoutBlockedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlockedByInput
    upsert?: UserUpsertWithoutBlockedByInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlockedByInput, UserUpdateWithoutBlockedByInput>, UserUncheckedUpdateWithoutBlockedByInput>
  }

  export type UserCreateNestedOneWithoutEnrolledEventsInput = {
    create?: XOR<UserCreateWithoutEnrolledEventsInput, UserUncheckedCreateWithoutEnrolledEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrolledEventsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEnrolledEventsNestedInput = {
    create?: XOR<UserCreateWithoutEnrolledEventsInput, UserUncheckedCreateWithoutEnrolledEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrolledEventsInput
    upsert?: UserUpsertWithoutEnrolledEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEnrolledEventsInput, UserUpdateWithoutEnrolledEventsInput>, UserUncheckedUpdateWithoutEnrolledEventsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | $Enums.TokenType
  }

  export type NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    email?: string | null
    emailVerified?: Date | string | null
    passwordHash?: string | null
    displayName?: string | null
    displayImage?: string | null
    disabled?: boolean | null
    weeklyDigestEmail?: boolean
    role?: $Enums.UserRole
    createdAt?: Date | string
    blocking?: BlockCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockCreateNestedManyWithoutBlockingInput
    enrolledEvents?: EnrolledEventCreateNestedManyWithoutUserInput
    flags?: FlagCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    tokens?: TokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    email?: string | null
    emailVerified?: Date | string | null
    passwordHash?: string | null
    displayName?: string | null
    displayImage?: string | null
    disabled?: boolean | null
    weeklyDigestEmail?: boolean
    role?: $Enums.UserRole
    createdAt?: Date | string
    blocking?: BlockUncheckedCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockUncheckedCreateNestedManyWithoutBlockingInput
    enrolledEvents?: EnrolledEventUncheckedCreateNestedManyWithoutUserInput
    flags?: FlagUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    displayImage?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weeklyDigestEmail?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocking?: BlockUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockUpdateManyWithoutBlockingNestedInput
    enrolledEvents?: EnrolledEventUpdateManyWithoutUserNestedInput
    flags?: FlagUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    displayImage?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weeklyDigestEmail?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocking?: BlockUncheckedUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockUncheckedUpdateManyWithoutBlockingNestedInput
    enrolledEvents?: EnrolledEventUncheckedUpdateManyWithoutUserNestedInput
    flags?: FlagUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    provider: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    expiresAt?: number | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    provider: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    expiresAt?: number | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BlockCreateWithoutBlockerInput = {
    blocking: UserCreateNestedOneWithoutBlockedByInput
  }

  export type BlockUncheckedCreateWithoutBlockerInput = {
    blockingId: string
  }

  export type BlockCreateOrConnectWithoutBlockerInput = {
    where: BlockWhereUniqueInput
    create: XOR<BlockCreateWithoutBlockerInput, BlockUncheckedCreateWithoutBlockerInput>
  }

  export type BlockCreateManyBlockerInputEnvelope = {
    data: BlockCreateManyBlockerInput | BlockCreateManyBlockerInput[]
    skipDuplicates?: boolean
  }

  export type BlockCreateWithoutBlockingInput = {
    blocker: UserCreateNestedOneWithoutBlockingInput
  }

  export type BlockUncheckedCreateWithoutBlockingInput = {
    blockerId: string
  }

  export type BlockCreateOrConnectWithoutBlockingInput = {
    where: BlockWhereUniqueInput
    create: XOR<BlockCreateWithoutBlockingInput, BlockUncheckedCreateWithoutBlockingInput>
  }

  export type BlockCreateManyBlockingInputEnvelope = {
    data: BlockCreateManyBlockingInput | BlockCreateManyBlockingInput[]
    skipDuplicates?: boolean
  }

  export type EnrolledEventCreateWithoutUserInput = {
    id?: string
    name: string
    slug: string
    start?: Date | string
    end: Date | string
  }

  export type EnrolledEventUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    slug: string
    start?: Date | string
    end: Date | string
  }

  export type EnrolledEventCreateOrConnectWithoutUserInput = {
    where: EnrolledEventWhereUniqueInput
    create: XOR<EnrolledEventCreateWithoutUserInput, EnrolledEventUncheckedCreateWithoutUserInput>
  }

  export type EnrolledEventCreateManyUserInputEnvelope = {
    data: EnrolledEventCreateManyUserInput | EnrolledEventCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FlagCreateWithoutUserInput = {
    comment?: string | null
    resolved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutFlagsInput
  }

  export type FlagUncheckedCreateWithoutUserInput = {
    comment?: string | null
    resolved?: boolean
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlagCreateOrConnectWithoutUserInput = {
    where: FlagWhereUniqueInput
    create: XOR<FlagCreateWithoutUserInput, FlagUncheckedCreateWithoutUserInput>
  }

  export type FlagCreateManyUserInputEnvelope = {
    data: FlagCreateManyUserInput | FlagCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LikeCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutUserInput = {
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikeCreateOrConnectWithoutUserInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
  }

  export type LikeCreateManyUserInputEnvelope = {
    data: LikeCreateManyUserInput | LikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutUserInput = {
    id?: string
    content: string
    createdBy?: string | null
    baseLikeCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flags?: FlagCreateNestedManyWithoutPostInput
    likes?: LikeCreateNestedManyWithoutPostInput
    parent?: PostCreateNestedOneWithoutCommentsInput
    comments?: PostCreateNestedManyWithoutParentInput
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    createdBy?: string | null
    baseLikeCount?: number | null
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flags?: FlagUncheckedCreateNestedManyWithoutPostInput
    likes?: LikeUncheckedCreateNestedManyWithoutPostInput
    comments?: PostUncheckedCreateNestedManyWithoutParentInput
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: PostCreateManyUserInput | PostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TokenCreateWithoutUserInput = {
    id?: string
    token: string
    type: $Enums.TokenType
    expiresAt?: Date | string | null
    sentTo?: string | null
    usedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    type: $Enums.TokenType
    expiresAt?: Date | string | null
    sentTo?: string | null
    usedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenCreateOrConnectWithoutUserInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenCreateManyUserInputEnvelope = {
    data: TokenCreateManyUserInput | TokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refreshToken?: StringNullableFilter<"Account"> | string | null
    accessToken?: StringNullableFilter<"Account"> | string | null
    expiresAt?: IntNullableFilter<"Account"> | number | null
    userId?: StringFilter<"Account"> | string
  }

  export type BlockUpsertWithWhereUniqueWithoutBlockerInput = {
    where: BlockWhereUniqueInput
    update: XOR<BlockUpdateWithoutBlockerInput, BlockUncheckedUpdateWithoutBlockerInput>
    create: XOR<BlockCreateWithoutBlockerInput, BlockUncheckedCreateWithoutBlockerInput>
  }

  export type BlockUpdateWithWhereUniqueWithoutBlockerInput = {
    where: BlockWhereUniqueInput
    data: XOR<BlockUpdateWithoutBlockerInput, BlockUncheckedUpdateWithoutBlockerInput>
  }

  export type BlockUpdateManyWithWhereWithoutBlockerInput = {
    where: BlockScalarWhereInput
    data: XOR<BlockUpdateManyMutationInput, BlockUncheckedUpdateManyWithoutBlockerInput>
  }

  export type BlockScalarWhereInput = {
    AND?: BlockScalarWhereInput | BlockScalarWhereInput[]
    OR?: BlockScalarWhereInput[]
    NOT?: BlockScalarWhereInput | BlockScalarWhereInput[]
    blockerId?: StringFilter<"Block"> | string
    blockingId?: StringFilter<"Block"> | string
  }

  export type BlockUpsertWithWhereUniqueWithoutBlockingInput = {
    where: BlockWhereUniqueInput
    update: XOR<BlockUpdateWithoutBlockingInput, BlockUncheckedUpdateWithoutBlockingInput>
    create: XOR<BlockCreateWithoutBlockingInput, BlockUncheckedCreateWithoutBlockingInput>
  }

  export type BlockUpdateWithWhereUniqueWithoutBlockingInput = {
    where: BlockWhereUniqueInput
    data: XOR<BlockUpdateWithoutBlockingInput, BlockUncheckedUpdateWithoutBlockingInput>
  }

  export type BlockUpdateManyWithWhereWithoutBlockingInput = {
    where: BlockScalarWhereInput
    data: XOR<BlockUpdateManyMutationInput, BlockUncheckedUpdateManyWithoutBlockingInput>
  }

  export type EnrolledEventUpsertWithWhereUniqueWithoutUserInput = {
    where: EnrolledEventWhereUniqueInput
    update: XOR<EnrolledEventUpdateWithoutUserInput, EnrolledEventUncheckedUpdateWithoutUserInput>
    create: XOR<EnrolledEventCreateWithoutUserInput, EnrolledEventUncheckedCreateWithoutUserInput>
  }

  export type EnrolledEventUpdateWithWhereUniqueWithoutUserInput = {
    where: EnrolledEventWhereUniqueInput
    data: XOR<EnrolledEventUpdateWithoutUserInput, EnrolledEventUncheckedUpdateWithoutUserInput>
  }

  export type EnrolledEventUpdateManyWithWhereWithoutUserInput = {
    where: EnrolledEventScalarWhereInput
    data: XOR<EnrolledEventUpdateManyMutationInput, EnrolledEventUncheckedUpdateManyWithoutUserInput>
  }

  export type EnrolledEventScalarWhereInput = {
    AND?: EnrolledEventScalarWhereInput | EnrolledEventScalarWhereInput[]
    OR?: EnrolledEventScalarWhereInput[]
    NOT?: EnrolledEventScalarWhereInput | EnrolledEventScalarWhereInput[]
    id?: StringFilter<"EnrolledEvent"> | string
    name?: StringFilter<"EnrolledEvent"> | string
    slug?: StringFilter<"EnrolledEvent"> | string
    start?: DateTimeFilter<"EnrolledEvent"> | Date | string
    end?: DateTimeFilter<"EnrolledEvent"> | Date | string
    userId?: StringFilter<"EnrolledEvent"> | string
  }

  export type FlagUpsertWithWhereUniqueWithoutUserInput = {
    where: FlagWhereUniqueInput
    update: XOR<FlagUpdateWithoutUserInput, FlagUncheckedUpdateWithoutUserInput>
    create: XOR<FlagCreateWithoutUserInput, FlagUncheckedCreateWithoutUserInput>
  }

  export type FlagUpdateWithWhereUniqueWithoutUserInput = {
    where: FlagWhereUniqueInput
    data: XOR<FlagUpdateWithoutUserInput, FlagUncheckedUpdateWithoutUserInput>
  }

  export type FlagUpdateManyWithWhereWithoutUserInput = {
    where: FlagScalarWhereInput
    data: XOR<FlagUpdateManyMutationInput, FlagUncheckedUpdateManyWithoutUserInput>
  }

  export type FlagScalarWhereInput = {
    AND?: FlagScalarWhereInput | FlagScalarWhereInput[]
    OR?: FlagScalarWhereInput[]
    NOT?: FlagScalarWhereInput | FlagScalarWhereInput[]
    comment?: StringNullableFilter<"Flag"> | string | null
    resolved?: BoolFilter<"Flag"> | boolean
    postId?: StringFilter<"Flag"> | string
    userId?: StringFilter<"Flag"> | string
    createdAt?: DateTimeFilter<"Flag"> | Date | string
    updatedAt?: DateTimeFilter<"Flag"> | Date | string
  }

  export type LikeUpsertWithWhereUniqueWithoutUserInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutUserInput, LikeUncheckedUpdateWithoutUserInput>
    create: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutUserInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutUserInput, LikeUncheckedUpdateWithoutUserInput>
  }

  export type LikeUpdateManyWithWhereWithoutUserInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutUserInput>
  }

  export type LikeScalarWhereInput = {
    AND?: LikeScalarWhereInput | LikeScalarWhereInput[]
    OR?: LikeScalarWhereInput[]
    NOT?: LikeScalarWhereInput | LikeScalarWhereInput[]
    postId?: StringFilter<"Like"> | string
    userId?: StringFilter<"Like"> | string
    createdAt?: DateTimeFilter<"Like"> | Date | string
    updatedAt?: DateTimeFilter<"Like"> | Date | string
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutUserInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    createdBy?: StringNullableFilter<"Post"> | string | null
    baseLikeCount?: IntNullableFilter<"Post"> | number | null
    parentId?: StringNullableFilter<"Post"> | string | null
    userId?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type TokenUpsertWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
  }

  export type TokenUpdateManyWithWhereWithoutUserInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutUserInput>
  }

  export type TokenScalarWhereInput = {
    AND?: TokenScalarWhereInput | TokenScalarWhereInput[]
    OR?: TokenScalarWhereInput[]
    NOT?: TokenScalarWhereInput | TokenScalarWhereInput[]
    id?: StringFilter<"Token"> | string
    token?: StringFilter<"Token"> | string
    type?: EnumTokenTypeFilter<"Token"> | $Enums.TokenType
    expiresAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    sentTo?: StringNullableFilter<"Token"> | string | null
    usedAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    userId?: StringFilter<"Token"> | string
    createdAt?: DateTimeFilter<"Token"> | Date | string
    updatedAt?: DateTimeFilter<"Token"> | Date | string
  }

  export type UserCreateWithoutTokensInput = {
    id?: string
    email?: string | null
    emailVerified?: Date | string | null
    passwordHash?: string | null
    displayName?: string | null
    displayImage?: string | null
    disabled?: boolean | null
    weeklyDigestEmail?: boolean
    role?: $Enums.UserRole
    createdAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    blocking?: BlockCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockCreateNestedManyWithoutBlockingInput
    enrolledEvents?: EnrolledEventCreateNestedManyWithoutUserInput
    flags?: FlagCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTokensInput = {
    id?: string
    email?: string | null
    emailVerified?: Date | string | null
    passwordHash?: string | null
    displayName?: string | null
    displayImage?: string | null
    disabled?: boolean | null
    weeklyDigestEmail?: boolean
    role?: $Enums.UserRole
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    blocking?: BlockUncheckedCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockUncheckedCreateNestedManyWithoutBlockingInput
    enrolledEvents?: EnrolledEventUncheckedCreateNestedManyWithoutUserInput
    flags?: FlagUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
  }

  export type UserUpsertWithoutTokensInput = {
    update: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
  }

  export type UserUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    displayImage?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weeklyDigestEmail?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    blocking?: BlockUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockUpdateManyWithoutBlockingNestedInput
    enrolledEvents?: EnrolledEventUpdateManyWithoutUserNestedInput
    flags?: FlagUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    displayImage?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weeklyDigestEmail?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    blocking?: BlockUncheckedUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockUncheckedUpdateManyWithoutBlockingNestedInput
    enrolledEvents?: EnrolledEventUncheckedUpdateManyWithoutUserNestedInput
    flags?: FlagUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FlagCreateWithoutPostInput = {
    comment?: string | null
    resolved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFlagsInput
  }

  export type FlagUncheckedCreateWithoutPostInput = {
    comment?: string | null
    resolved?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlagCreateOrConnectWithoutPostInput = {
    where: FlagWhereUniqueInput
    create: XOR<FlagCreateWithoutPostInput, FlagUncheckedCreateWithoutPostInput>
  }

  export type FlagCreateManyPostInputEnvelope = {
    data: FlagCreateManyPostInput | FlagCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type LikeCreateWithoutPostInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutPostInput = {
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikeCreateOrConnectWithoutPostInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutPostInput, LikeUncheckedCreateWithoutPostInput>
  }

  export type LikeCreateManyPostInputEnvelope = {
    data: LikeCreateManyPostInput | LikeCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutCommentsInput = {
    id?: string
    content: string
    createdBy?: string | null
    baseLikeCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flags?: FlagCreateNestedManyWithoutPostInput
    likes?: LikeCreateNestedManyWithoutPostInput
    parent?: PostCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutCommentsInput = {
    id?: string
    content: string
    createdBy?: string | null
    baseLikeCount?: number | null
    parentId?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    flags?: FlagUncheckedCreateNestedManyWithoutPostInput
    likes?: LikeUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCommentsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
  }

  export type PostCreateWithoutParentInput = {
    id?: string
    content: string
    createdBy?: string | null
    baseLikeCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flags?: FlagCreateNestedManyWithoutPostInput
    likes?: LikeCreateNestedManyWithoutPostInput
    comments?: PostCreateNestedManyWithoutParentInput
    user: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutParentInput = {
    id?: string
    content: string
    createdBy?: string | null
    baseLikeCount?: number | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    flags?: FlagUncheckedCreateNestedManyWithoutPostInput
    likes?: LikeUncheckedCreateNestedManyWithoutPostInput
    comments?: PostUncheckedCreateNestedManyWithoutParentInput
  }

  export type PostCreateOrConnectWithoutParentInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutParentInput, PostUncheckedCreateWithoutParentInput>
  }

  export type PostCreateManyParentInputEnvelope = {
    data: PostCreateManyParentInput | PostCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    email?: string | null
    emailVerified?: Date | string | null
    passwordHash?: string | null
    displayName?: string | null
    displayImage?: string | null
    disabled?: boolean | null
    weeklyDigestEmail?: boolean
    role?: $Enums.UserRole
    createdAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    blocking?: BlockCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockCreateNestedManyWithoutBlockingInput
    enrolledEvents?: EnrolledEventCreateNestedManyWithoutUserInput
    flags?: FlagCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    tokens?: TokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    email?: string | null
    emailVerified?: Date | string | null
    passwordHash?: string | null
    displayName?: string | null
    displayImage?: string | null
    disabled?: boolean | null
    weeklyDigestEmail?: boolean
    role?: $Enums.UserRole
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    blocking?: BlockUncheckedCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockUncheckedCreateNestedManyWithoutBlockingInput
    enrolledEvents?: EnrolledEventUncheckedCreateNestedManyWithoutUserInput
    flags?: FlagUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type FlagUpsertWithWhereUniqueWithoutPostInput = {
    where: FlagWhereUniqueInput
    update: XOR<FlagUpdateWithoutPostInput, FlagUncheckedUpdateWithoutPostInput>
    create: XOR<FlagCreateWithoutPostInput, FlagUncheckedCreateWithoutPostInput>
  }

  export type FlagUpdateWithWhereUniqueWithoutPostInput = {
    where: FlagWhereUniqueInput
    data: XOR<FlagUpdateWithoutPostInput, FlagUncheckedUpdateWithoutPostInput>
  }

  export type FlagUpdateManyWithWhereWithoutPostInput = {
    where: FlagScalarWhereInput
    data: XOR<FlagUpdateManyMutationInput, FlagUncheckedUpdateManyWithoutPostInput>
  }

  export type LikeUpsertWithWhereUniqueWithoutPostInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutPostInput, LikeUncheckedUpdateWithoutPostInput>
    create: XOR<LikeCreateWithoutPostInput, LikeUncheckedCreateWithoutPostInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutPostInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutPostInput, LikeUncheckedUpdateWithoutPostInput>
  }

  export type LikeUpdateManyWithWhereWithoutPostInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutPostInput>
  }

  export type PostUpsertWithoutCommentsInput = {
    update: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type PostUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    baseLikeCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: FlagUpdateManyWithoutPostNestedInput
    likes?: LikeUpdateManyWithoutPostNestedInput
    parent?: PostUpdateOneWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    baseLikeCount?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: FlagUncheckedUpdateManyWithoutPostNestedInput
    likes?: LikeUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUpsertWithWhereUniqueWithoutParentInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutParentInput, PostUncheckedUpdateWithoutParentInput>
    create: XOR<PostCreateWithoutParentInput, PostUncheckedCreateWithoutParentInput>
  }

  export type PostUpdateWithWhereUniqueWithoutParentInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutParentInput, PostUncheckedUpdateWithoutParentInput>
  }

  export type PostUpdateManyWithWhereWithoutParentInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutParentInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    displayImage?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weeklyDigestEmail?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    blocking?: BlockUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockUpdateManyWithoutBlockingNestedInput
    enrolledEvents?: EnrolledEventUpdateManyWithoutUserNestedInput
    flags?: FlagUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    displayImage?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weeklyDigestEmail?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    blocking?: BlockUncheckedUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockUncheckedUpdateManyWithoutBlockingNestedInput
    enrolledEvents?: EnrolledEventUncheckedUpdateManyWithoutUserNestedInput
    flags?: FlagUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostCreateWithoutLikesInput = {
    id?: string
    content: string
    createdBy?: string | null
    baseLikeCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flags?: FlagCreateNestedManyWithoutPostInput
    parent?: PostCreateNestedOneWithoutCommentsInput
    comments?: PostCreateNestedManyWithoutParentInput
    user: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutLikesInput = {
    id?: string
    content: string
    createdBy?: string | null
    baseLikeCount?: number | null
    parentId?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    flags?: FlagUncheckedCreateNestedManyWithoutPostInput
    comments?: PostUncheckedCreateNestedManyWithoutParentInput
  }

  export type PostCreateOrConnectWithoutLikesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
  }

  export type UserCreateWithoutLikesInput = {
    id?: string
    email?: string | null
    emailVerified?: Date | string | null
    passwordHash?: string | null
    displayName?: string | null
    displayImage?: string | null
    disabled?: boolean | null
    weeklyDigestEmail?: boolean
    role?: $Enums.UserRole
    createdAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    blocking?: BlockCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockCreateNestedManyWithoutBlockingInput
    enrolledEvents?: EnrolledEventCreateNestedManyWithoutUserInput
    flags?: FlagCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    tokens?: TokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikesInput = {
    id?: string
    email?: string | null
    emailVerified?: Date | string | null
    passwordHash?: string | null
    displayName?: string | null
    displayImage?: string | null
    disabled?: boolean | null
    weeklyDigestEmail?: boolean
    role?: $Enums.UserRole
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    blocking?: BlockUncheckedCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockUncheckedCreateNestedManyWithoutBlockingInput
    enrolledEvents?: EnrolledEventUncheckedCreateNestedManyWithoutUserInput
    flags?: FlagUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
  }

  export type PostUpsertWithoutLikesInput = {
    update: XOR<PostUpdateWithoutLikesInput, PostUncheckedUpdateWithoutLikesInput>
    create: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutLikesInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutLikesInput, PostUncheckedUpdateWithoutLikesInput>
  }

  export type PostUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    baseLikeCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: FlagUpdateManyWithoutPostNestedInput
    parent?: PostUpdateOneWithoutCommentsNestedInput
    comments?: PostUpdateManyWithoutParentNestedInput
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    baseLikeCount?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: FlagUncheckedUpdateManyWithoutPostNestedInput
    comments?: PostUncheckedUpdateManyWithoutParentNestedInput
  }

  export type UserUpsertWithoutLikesInput = {
    update: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    displayImage?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weeklyDigestEmail?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    blocking?: BlockUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockUpdateManyWithoutBlockingNestedInput
    enrolledEvents?: EnrolledEventUpdateManyWithoutUserNestedInput
    flags?: FlagUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    displayImage?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weeklyDigestEmail?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    blocking?: BlockUncheckedUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockUncheckedUpdateManyWithoutBlockingNestedInput
    enrolledEvents?: EnrolledEventUncheckedUpdateManyWithoutUserNestedInput
    flags?: FlagUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostCreateWithoutFlagsInput = {
    id?: string
    content: string
    createdBy?: string | null
    baseLikeCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: LikeCreateNestedManyWithoutPostInput
    parent?: PostCreateNestedOneWithoutCommentsInput
    comments?: PostCreateNestedManyWithoutParentInput
    user: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutFlagsInput = {
    id?: string
    content: string
    createdBy?: string | null
    baseLikeCount?: number | null
    parentId?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: LikeUncheckedCreateNestedManyWithoutPostInput
    comments?: PostUncheckedCreateNestedManyWithoutParentInput
  }

  export type PostCreateOrConnectWithoutFlagsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutFlagsInput, PostUncheckedCreateWithoutFlagsInput>
  }

  export type UserCreateWithoutFlagsInput = {
    id?: string
    email?: string | null
    emailVerified?: Date | string | null
    passwordHash?: string | null
    displayName?: string | null
    displayImage?: string | null
    disabled?: boolean | null
    weeklyDigestEmail?: boolean
    role?: $Enums.UserRole
    createdAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    blocking?: BlockCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockCreateNestedManyWithoutBlockingInput
    enrolledEvents?: EnrolledEventCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    tokens?: TokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFlagsInput = {
    id?: string
    email?: string | null
    emailVerified?: Date | string | null
    passwordHash?: string | null
    displayName?: string | null
    displayImage?: string | null
    disabled?: boolean | null
    weeklyDigestEmail?: boolean
    role?: $Enums.UserRole
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    blocking?: BlockUncheckedCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockUncheckedCreateNestedManyWithoutBlockingInput
    enrolledEvents?: EnrolledEventUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFlagsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFlagsInput, UserUncheckedCreateWithoutFlagsInput>
  }

  export type PostUpsertWithoutFlagsInput = {
    update: XOR<PostUpdateWithoutFlagsInput, PostUncheckedUpdateWithoutFlagsInput>
    create: XOR<PostCreateWithoutFlagsInput, PostUncheckedCreateWithoutFlagsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutFlagsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutFlagsInput, PostUncheckedUpdateWithoutFlagsInput>
  }

  export type PostUpdateWithoutFlagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    baseLikeCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUpdateManyWithoutPostNestedInput
    parent?: PostUpdateOneWithoutCommentsNestedInput
    comments?: PostUpdateManyWithoutParentNestedInput
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutFlagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    baseLikeCount?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUncheckedUpdateManyWithoutPostNestedInput
    comments?: PostUncheckedUpdateManyWithoutParentNestedInput
  }

  export type UserUpsertWithoutFlagsInput = {
    update: XOR<UserUpdateWithoutFlagsInput, UserUncheckedUpdateWithoutFlagsInput>
    create: XOR<UserCreateWithoutFlagsInput, UserUncheckedCreateWithoutFlagsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFlagsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFlagsInput, UserUncheckedUpdateWithoutFlagsInput>
  }

  export type UserUpdateWithoutFlagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    displayImage?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weeklyDigestEmail?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    blocking?: BlockUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockUpdateManyWithoutBlockingNestedInput
    enrolledEvents?: EnrolledEventUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFlagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    displayImage?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weeklyDigestEmail?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    blocking?: BlockUncheckedUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockUncheckedUpdateManyWithoutBlockingNestedInput
    enrolledEvents?: EnrolledEventUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBlockingInput = {
    id?: string
    email?: string | null
    emailVerified?: Date | string | null
    passwordHash?: string | null
    displayName?: string | null
    displayImage?: string | null
    disabled?: boolean | null
    weeklyDigestEmail?: boolean
    role?: $Enums.UserRole
    createdAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    blockedBy?: BlockCreateNestedManyWithoutBlockingInput
    enrolledEvents?: EnrolledEventCreateNestedManyWithoutUserInput
    flags?: FlagCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    tokens?: TokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBlockingInput = {
    id?: string
    email?: string | null
    emailVerified?: Date | string | null
    passwordHash?: string | null
    displayName?: string | null
    displayImage?: string | null
    disabled?: boolean | null
    weeklyDigestEmail?: boolean
    role?: $Enums.UserRole
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    blockedBy?: BlockUncheckedCreateNestedManyWithoutBlockingInput
    enrolledEvents?: EnrolledEventUncheckedCreateNestedManyWithoutUserInput
    flags?: FlagUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBlockingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlockingInput, UserUncheckedCreateWithoutBlockingInput>
  }

  export type UserCreateWithoutBlockedByInput = {
    id?: string
    email?: string | null
    emailVerified?: Date | string | null
    passwordHash?: string | null
    displayName?: string | null
    displayImage?: string | null
    disabled?: boolean | null
    weeklyDigestEmail?: boolean
    role?: $Enums.UserRole
    createdAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    blocking?: BlockCreateNestedManyWithoutBlockerInput
    enrolledEvents?: EnrolledEventCreateNestedManyWithoutUserInput
    flags?: FlagCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    tokens?: TokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBlockedByInput = {
    id?: string
    email?: string | null
    emailVerified?: Date | string | null
    passwordHash?: string | null
    displayName?: string | null
    displayImage?: string | null
    disabled?: boolean | null
    weeklyDigestEmail?: boolean
    role?: $Enums.UserRole
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    blocking?: BlockUncheckedCreateNestedManyWithoutBlockerInput
    enrolledEvents?: EnrolledEventUncheckedCreateNestedManyWithoutUserInput
    flags?: FlagUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBlockedByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlockedByInput, UserUncheckedCreateWithoutBlockedByInput>
  }

  export type UserUpsertWithoutBlockingInput = {
    update: XOR<UserUpdateWithoutBlockingInput, UserUncheckedUpdateWithoutBlockingInput>
    create: XOR<UserCreateWithoutBlockingInput, UserUncheckedCreateWithoutBlockingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlockingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlockingInput, UserUncheckedUpdateWithoutBlockingInput>
  }

  export type UserUpdateWithoutBlockingInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    displayImage?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weeklyDigestEmail?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    blockedBy?: BlockUpdateManyWithoutBlockingNestedInput
    enrolledEvents?: EnrolledEventUpdateManyWithoutUserNestedInput
    flags?: FlagUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBlockingInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    displayImage?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weeklyDigestEmail?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    blockedBy?: BlockUncheckedUpdateManyWithoutBlockingNestedInput
    enrolledEvents?: EnrolledEventUncheckedUpdateManyWithoutUserNestedInput
    flags?: FlagUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutBlockedByInput = {
    update: XOR<UserUpdateWithoutBlockedByInput, UserUncheckedUpdateWithoutBlockedByInput>
    create: XOR<UserCreateWithoutBlockedByInput, UserUncheckedCreateWithoutBlockedByInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlockedByInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlockedByInput, UserUncheckedUpdateWithoutBlockedByInput>
  }

  export type UserUpdateWithoutBlockedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    displayImage?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weeklyDigestEmail?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    blocking?: BlockUpdateManyWithoutBlockerNestedInput
    enrolledEvents?: EnrolledEventUpdateManyWithoutUserNestedInput
    flags?: FlagUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBlockedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    displayImage?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weeklyDigestEmail?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    blocking?: BlockUncheckedUpdateManyWithoutBlockerNestedInput
    enrolledEvents?: EnrolledEventUncheckedUpdateManyWithoutUserNestedInput
    flags?: FlagUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutEnrolledEventsInput = {
    id?: string
    email?: string | null
    emailVerified?: Date | string | null
    passwordHash?: string | null
    displayName?: string | null
    displayImage?: string | null
    disabled?: boolean | null
    weeklyDigestEmail?: boolean
    role?: $Enums.UserRole
    createdAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    blocking?: BlockCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockCreateNestedManyWithoutBlockingInput
    flags?: FlagCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    tokens?: TokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEnrolledEventsInput = {
    id?: string
    email?: string | null
    emailVerified?: Date | string | null
    passwordHash?: string | null
    displayName?: string | null
    displayImage?: string | null
    disabled?: boolean | null
    weeklyDigestEmail?: boolean
    role?: $Enums.UserRole
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    blocking?: BlockUncheckedCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockUncheckedCreateNestedManyWithoutBlockingInput
    flags?: FlagUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEnrolledEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEnrolledEventsInput, UserUncheckedCreateWithoutEnrolledEventsInput>
  }

  export type UserUpsertWithoutEnrolledEventsInput = {
    update: XOR<UserUpdateWithoutEnrolledEventsInput, UserUncheckedUpdateWithoutEnrolledEventsInput>
    create: XOR<UserCreateWithoutEnrolledEventsInput, UserUncheckedCreateWithoutEnrolledEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEnrolledEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEnrolledEventsInput, UserUncheckedUpdateWithoutEnrolledEventsInput>
  }

  export type UserUpdateWithoutEnrolledEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    displayImage?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weeklyDigestEmail?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    blocking?: BlockUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockUpdateManyWithoutBlockingNestedInput
    flags?: FlagUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEnrolledEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    displayImage?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weeklyDigestEmail?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    blocking?: BlockUncheckedUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockUncheckedUpdateManyWithoutBlockingNestedInput
    flags?: FlagUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    provider: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    expiresAt?: number | null
  }

  export type BlockCreateManyBlockerInput = {
    blockingId: string
  }

  export type BlockCreateManyBlockingInput = {
    blockerId: string
  }

  export type EnrolledEventCreateManyUserInput = {
    id?: string
    name: string
    slug: string
    start?: Date | string
    end: Date | string
  }

  export type FlagCreateManyUserInput = {
    comment?: string | null
    resolved?: boolean
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikeCreateManyUserInput = {
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateManyUserInput = {
    id?: string
    content: string
    createdBy?: string | null
    baseLikeCount?: number | null
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenCreateManyUserInput = {
    id?: string
    token: string
    type: $Enums.TokenType
    expiresAt?: Date | string | null
    sentTo?: string | null
    usedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BlockUpdateWithoutBlockerInput = {
    blocking?: UserUpdateOneRequiredWithoutBlockedByNestedInput
  }

  export type BlockUncheckedUpdateWithoutBlockerInput = {
    blockingId?: StringFieldUpdateOperationsInput | string
  }

  export type BlockUncheckedUpdateManyWithoutBlockerInput = {
    blockingId?: StringFieldUpdateOperationsInput | string
  }

  export type BlockUpdateWithoutBlockingInput = {
    blocker?: UserUpdateOneRequiredWithoutBlockingNestedInput
  }

  export type BlockUncheckedUpdateWithoutBlockingInput = {
    blockerId?: StringFieldUpdateOperationsInput | string
  }

  export type BlockUncheckedUpdateManyWithoutBlockingInput = {
    blockerId?: StringFieldUpdateOperationsInput | string
  }

  export type EnrolledEventUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrolledEventUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrolledEventUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlagUpdateWithoutUserInput = {
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutFlagsNestedInput
  }

  export type FlagUncheckedUpdateWithoutUserInput = {
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlagUncheckedUpdateManyWithoutUserInput = {
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateWithoutUserInput = {
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyWithoutUserInput = {
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    baseLikeCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: FlagUpdateManyWithoutPostNestedInput
    likes?: LikeUpdateManyWithoutPostNestedInput
    parent?: PostUpdateOneWithoutCommentsNestedInput
    comments?: PostUpdateManyWithoutParentNestedInput
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    baseLikeCount?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: FlagUncheckedUpdateManyWithoutPostNestedInput
    likes?: LikeUncheckedUpdateManyWithoutPostNestedInput
    comments?: PostUncheckedUpdateManyWithoutParentNestedInput
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    baseLikeCount?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentTo?: NullableStringFieldUpdateOperationsInput | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentTo?: NullableStringFieldUpdateOperationsInput | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentTo?: NullableStringFieldUpdateOperationsInput | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlagCreateManyPostInput = {
    comment?: string | null
    resolved?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikeCreateManyPostInput = {
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateManyParentInput = {
    id?: string
    content: string
    createdBy?: string | null
    baseLikeCount?: number | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlagUpdateWithoutPostInput = {
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFlagsNestedInput
  }

  export type FlagUncheckedUpdateWithoutPostInput = {
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlagUncheckedUpdateManyWithoutPostInput = {
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUpdateWithoutPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateWithoutPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyWithoutPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    baseLikeCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: FlagUpdateManyWithoutPostNestedInput
    likes?: LikeUpdateManyWithoutPostNestedInput
    comments?: PostUpdateManyWithoutParentNestedInput
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    baseLikeCount?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: FlagUncheckedUpdateManyWithoutPostNestedInput
    likes?: LikeUncheckedUpdateManyWithoutPostNestedInput
    comments?: PostUncheckedUpdateManyWithoutParentNestedInput
  }

  export type PostUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    baseLikeCount?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostCountOutputTypeDefaultArgs instead
     */
    export type PostCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TokenDefaultArgs instead
     */
    export type TokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostDefaultArgs instead
     */
    export type PostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LikeDefaultArgs instead
     */
    export type LikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LikeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FlagDefaultArgs instead
     */
    export type FlagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FlagDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlockDefaultArgs instead
     */
    export type BlockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlockDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PromptDefaultArgs instead
     */
    export type PromptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PromptDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EnrolledEventDefaultArgs instead
     */
    export type EnrolledEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EnrolledEventDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}