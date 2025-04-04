# Explanation of the `ReplacePathParams` Type

`ReplacePathParams` is a recursive TypeScript type designed to replace dynamic segments—specifically,  
the path parameters enclosed in curly braces—in a string literal with a standardized template literal interpolation of `${number}`.  
This is especially useful when defining API endpoints where parameters in the URL are expected to be numeric.

## Type Definition

```typescript
type ReplacePathParams<T extends unknown> = T extends `${infer Start}{${infer Param}}${infer End}`
  ? `${Start}${number}${ReplacePathParams<End>}`
  : T;
```

### Parameters

 + T extends unknown Although T is declared with the type unknown, it is intended to be a string literal representing the endpoint path.  
   The type processes the string to find dynamic segments that need to be replaced.

### How It Works

1. Pattern Matching The type checks if the input string T matches the pattern:

   `${infer Start}{${infer Param}}${infer End}`

 + `Start`: Captures the substring leading up to the first occurrence of a path parameter.

 + `{${infer Param}}`: Matches a section of the string enclosed in curly braces. The content inside the braces, which is the path parameter's name, is stored temporarily in Param.

 + `End`: Captures the remaining part of the string following the matched dynamic segment.

2. **Recursive Replacement** If the pattern is matched:

 + The matching segment `{${infer Param}}` is replaced with `${number}`.

 + The type then recursively applies itself to the remainder of the string (`End`) by calling `ReplacePathParams<End>`,  
   ensuring that all occurrences of path parameters are replaced.

3. Base Case If `T` does not contain any substring that fits the pattern (i.e., no occurrence of a dynamic segment in curly braces),  
   the type simply evaluates to `T` without modification. This serves as the termination condition for the recursion.

### Practical Example

```ts
type Example = ReplacePathParams<"/characters/{character_id}/fittings/{fitting_id}/">;
// Evaluates to: "/characters/${number}/fittings/${number}/"
```

In this example:

1. The first dynamic segment `{character_id}` is replaced with `${number}`.

1. The type then recursively processes the remaining string, encountering and replacing {fitting_id} with `${number}`.

1. The final resulting type is `"/characters/${number}/fittings/${number}/"`.

---

The `ReplacePathParams` type is a powerful tool for transforming endpoint strings into a more standardized format.  
This is especially beneficial when type-checking API route definitions or dynamically generating strongly-typed URL strings based on certain conditions.
