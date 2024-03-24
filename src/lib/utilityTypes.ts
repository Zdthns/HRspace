export type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type Expect<T extends true> =
  (<T>() => T extends T ? 1 : 2) extends <T>() => T extends true ? 1 : 2
    ? true
    : false

export type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
    ? true
    : false
