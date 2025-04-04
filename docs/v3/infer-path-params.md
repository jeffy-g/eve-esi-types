# Explanation of the `InferPathParams` Type

`InferPathParams` is a conditional utility TypeScript type that infers path parameters by comparing the real endpoint path (`RealEP`) with the resolved endpoint path (`EPx`). It determines the appropriate type for the path parameters based on whether the real endpoint extends the resolved endpoint.

## Type Definition

```typescript
type InferPathParams<
  RealEP extends unknown, EPx extends unknown
> = RealEP extends EPx ? _IfNeedPathParams<EPx> : TPathParamsNever;
```

## Template Parameters

- **`RealEP extends unknown`**  
  Represents the real endpoint path, which is the original route definition provided in your API.

- **`EPx extends unknown`**  
  Represents the resolved endpoint path, which may be a transformed or standardized version of the real endpoint.

## How It Works

1. **Conditional Check**  
   The type first evaluates whether `RealEP` extends `EPx`:
   - If **true**, it indicates that the real endpoint is compatible with the resolved endpoint.

2. **Path Parameter Inference**  
   - When the condition is met, the type returns `_IfNeedPathParams<EPx>`, a helper type that likely infers and extracts the necessary path parameters embedded within `EPx`.
   - Otherwise, it returns `TPathParamsNever`, a type signaling that no valid path parameters could be inferred or that they are not needed.

## Practical Example

Consider a scenario where you have:
- A real endpoint like `"/characters/{character_id}"`.
- A resolved endpoint that might incorporate specific formatting or type annotations.

Using `InferPathParams`, if the real endpoint correctly extends the resolved endpoint, `_IfNeedPathParams` will process `EPx` to extract dynamic segments (such as converting `{character_id}` to an interpolated type). If not, it falls back to `TPathParamsNever`.

---

This type is instrumental in achieving type safety in API route definitions. By conditionally inferring path parameters, it ensures that only valid and necessary parameters are extracted, promoting robust type-checking and eliminating unnecessary types.
