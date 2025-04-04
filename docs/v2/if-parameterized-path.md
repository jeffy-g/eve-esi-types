# Explanation of the `IfParameterizedPath` Type

`IfParameterizedPath` is a conditional TypeScript utility type that checks whether a given endpoint path (`EP`) is parameterized—i.e., contains a parameterized segment enclosed in `{}`—and, if so, determines the required type for its numeric replacements. Depending on the number of parameters detected, it returns different types:
- Returns `number` if exactly one parameter is detected.
- Returns `[number, number]` if two parameters are detected.
- Otherwise, it returns the fallback type `Opt` (which defaults to `never`).

## Type Definition

```typescript
type IfParameterizedPath<EP extends unknown, Opt = never> = EP extends `${string}/{${string}}${string}`
  ? PickPathParameters<EP> extends never
      ? Opt : InferKeysLen<PickPathParameters<EP>> extends 1
        ? number : [number, number]
  : Opt;
```

## Template Parameters

- **`EP extends unknown`**  
  The endpoint path as a string literal. This path may contain dynamic segments (e.g., `"/users/{user_id}/posts/{post_id}"`) that need to be replaced with numerical values.

- **`Opt`**  
  The fallback type to return if `EP` is not parameterized. By default, this is set to `never`.

## How It Works

1. **Pattern Matching**  
   The type checks if `EP` matches the pattern:
   ```typescript
   EP extends `${string}/{${string}}${string}`
   ```
   This verifies that `EP` includes at least one parameter wrapped in curly braces.

2. **Extracting Parameters**  
   If `EP` is parameterized, `PickPathParameters<EP>` is used to extract the dynamic segments:
   - If `PickPathParameters<EP>` evaluates to `never` (indicating no valid parameters were found), the type returns `Opt`.
   - Otherwise, it proceeds to the next step.

3. **Determining the Number of Parameters**  
   The type uses `InferKeysLen<PickPathParameters<EP>>` to count the number of extracted parameters:
   - If exactly one parameter is found, it returns `number`—indicating a single numeric replacement.
   - Otherwise (implicitly for two parameters as per the provided description), it returns `[number, number]`.

4. **Fallback for Non-Parameterized Paths**  
   If `EP` does not match the parameterized pattern, the type simply returns `Opt`.

## Practical Example

For an endpoint with one parameter:
```typescript
type SingleParam = IfParameterizedPath<"/users/{user_id}/profile">;
// Evaluates to: number
```

For an endpoint with two parameters:
```typescript
type TwoParams = IfParameterizedPath<"/users/{user_id}/posts/{post_id}">;
// Evaluates to: [number, number]
```

And for a non-parameterized endpoint:
```typescript
type NotParam = IfParameterizedPath<"/about">;
// Evaluates to: never (using the default for Opt)
```

---

`IfParameterizedPath` provides a precise mechanism for type-level validation of endpoint structures by determining the necessary numerical replacements for dynamic segments, ensuring robust type-checking for API endpoint definitions.
