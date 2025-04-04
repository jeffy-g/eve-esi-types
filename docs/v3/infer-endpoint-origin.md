# Explanation of the `InferEndpointOrigin` Type

`InferEndpointOrigin` is a utility TypeScript type that deduces the original parameterized endpoint from a real endpoint string and a specified HTTP method. It does so by mapping over all possible parameterized endpoints associated with the given HTTP method, and selecting the one whose transformed version (via `ReplacePathParams`) matches the real endpoint. This technique enables you to recover the canonical endpoint structure from a concrete URL.

## Type Definition

```typescript
type InferEndpointOrigin<
  RealEP extends unknown, M extends TESIEntryMethod,
  Endpoints extends ESIEndpointOf<M> = ESIEndpointOf<M>
> = {
  [EP in Endpoints]: RealEP extends ReplacePathParams<EP>
    ? EP : never;
}[Endpoints];
```

## Template Parameters

- **`RealEP extends unknown`**  
  The real endpoint path, e.g., `"/characters/123/fittings/456/"`, representing the concrete URL accessed in a request.

- **`M extends TESIEntryMethod`**  
  The HTTP method (such as `"get"`, `"post"`, `"delete"`, etc.) used to determine which endpoints are applicable.

- **`Endpoints extends ESIEndpointOf<M> = ESIEndpointOf<M>`**  
  The union of all possible parameterized endpoints for the given HTTP method. These endpoints generally include dynamic segments in their definition, like `"/characters/{character_id}/fittings/{fitting_id}/"`.

## How It Works

1. **Mapping Over Endpoints**  
   The type creates a mapped type where it iterates over each possible endpoint (`EP`) in the `Endpoints` union:
   ```typescript
   RealEP extends ReplacePathParams<EP> ? EP : never;
   ```
   - **Condition:** It checks if the real endpoint `RealEP` is assignable to the version of `EP` produced by `ReplacePathParams` (i.e., with its dynamic segments replaced by `${number}`).
   - **Outcome:**  
     - If the condition holds true, it retains `EP`—indicating that this is the matching original endpoint.
     - Otherwise, it assigns `never` for that endpoint.

2. **Indexing the Mapped Type**  
   After processing all endpoints, the type uses an index lookup `[Endpoints]` to extract the union of all endpoints that passed the conditional check (i.e., where the condition did not yield `never`). In typical usage, this results in a single matching endpoint.

## Practical Example

```ts
type Original = InferEndpointOrigin<"/characters/123/fittings/456/", "delete">;
// Evaluates to: "/characters/{character_id}/fittings/{fitting_id}/"
```

In this example:
- The real endpoint `"/characters/123/fittings/456/"` is compared against each parameterized endpoint available for the `"delete"` method.
- When the condition `RealEP extends ReplacePathParams<EP>` is satisfied, it indicates that the endpoint structure matches. Accordingly, the original parameterized endpoint (`EP`) is selected.
- The final resulting type is the parameterized endpoint, `"/characters/{character_id}/fittings/{fitting_id}/"`.

---

`InferEndpointOrigin` thus serves as a robust mechanism to align concrete URLs with their original endpoint definitions, ensuring accurate type-checking for API route definitions.
