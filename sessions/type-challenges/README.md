# Type Challenges

## Basics
First we recalled the basics of the TypeScript type system:
- Literal Types
- Union Types
- Intersection Types
- Generic Types
- Restricted Generic Types
- Conditional Types
- Distributive Conditional Types
- Inferred Conditional Types
- Recursive Types
- Mapped Types
- Template Literal Types (later, as a short example)

## Go crazy
Then we implemented our own Generic Types to do arithmetics in the type system:
```typescript
type Length<T extends any[]> = T['length']
type OfLength<A extends number, H extends any[] = []> = Length<H> extends A ? H : OfLength<A, [any, ...H]>
type Add<A extends number, B extends number> = Length<[...OfLength<A>, ...OfLength<B>]>
type MinusOne<A extends number> = OfLength<A> extends [any, ...infer TAIL]
  ? Length<TAIL>
  : never
```

The Pascal Triangle type shortly presented at the end (that uses the previous types):
```typescript
type NextPascalRow<R extends any[], helper extends any[] = []> =
 R extends []
   ? [1, ...helper, 1]
   : R extends [infer A]
     ? [1, ...helper, 1]
     : R extends [infer A, infer B, ...infer TAIL]
       ? A extends number
         ? B extends number
           ? TAIL extends number[]
             ? NextPascalRow<[B, ...TAIL], [...helper, Add<A, B>]>
             : never
           : never
         : never
       : never

type Pascal<N extends number, helper extends any[][] = [[1]]> = N extends 1
  ? helper
  : helper extends [...any, infer LAST]
    ? LAST extends any[]
      ? Pascal<MinusOne<N>, [...helper, NextPascalRow<LAST>]>
      : never
    : never
```

Bonus, not presented in the session but a cool type:
```typescript
type StringWithParam = `${string}?(${string})${string}`
type FormatterParams<T extends string> = T extends `${string}?(${infer P})${infer R}`
    ? {[k in P]: string | number} & FormatterParams<R>
    : {}

export const log = <T extends string>(text: T, ...params: T extends StringWithParam ? [FormatterParams<T>] : []): void => {
    console.log(Object.entries(params).reduce((acc: string, [key, val]) => acc.replaceAll(`?(${key})`, `${val}`) , text))
}

// Example usages
// No placeholder in string => no second parameter
log('I am a plain string')
// Placeholders in string => second parameter required, with object that has exactly the placeholders as properties
log('I have a param with value ?(param)', {param: 'Otto'})
log('The value of the first param is ?(param) and the one of the second parameter is ?(otherParam)', {param: 3, otherParam: 'Karl'})
log('My first param has value ?(param), the second ?(otherParam). Again, the first was ?(param)', {param: 'a', otherParam: 13})
```