# Explanation of the `ResolvedEndpoint` Type

`ResolvedEndpoint` is a utility TypeScript type that determines the final, "resolved" endpoint based on a given real endpoint and the specific HTTP method. It leverages the `InferEndpointOrigin` type to deduce the original parameterized endpoint from the real endpoint. If no matching parameterized endpoint is found (i.e., the inference results in `never`), it defaults back to the real endpoint.

## Type Definition

```typescript
type ResolvedEndpoint<
  RealEP extends unknown, M extends TESIEntryMethod,
> = InferEndpointOrigin<RealEP, M> extends never ? RealEP : InferEndpointOrigin<RealEP, M>;
```

## Template Parameters

- **`RealEP extends unknown`**  
  The real endpoint path, representing the actual URL used in a request (for example, `"/characters/123/fittings/456/"`).

- **`M extends TESIEntryMethod`**  
  The HTTP method (such as `"get"`, `"post"`, `"delete"`, etc.) used for the request. This is used to narrow down which set of parameterized endpoints should be considered.

## How It Works

1. **Endpoint Inference**  
   The type starts by invoking `InferEndpointOrigin<RealEP, M>`, which attempts to map the real endpoint to its original parameterized form (e.g., converting `"/characters/123/fittings/456/"` to `"/characters/{character_id}/fittings/{fitting_id}/"`).

2. **Conditional Resolution**  
   - If `InferEndpointOrigin<RealEP, M>` results in `never`, it means no matching parameterized endpoint could be inferred from the given real endpoint. In such cases, the type falls back and returns `RealEP` as is.
   - If the inference is successful, the resolved parameterized endpoint is returned.

## Practical Example

```ts
type Resolved = ResolvedEndpoint<"/characters/123/fittings/456/", "delete">;
// Evaluates to: "/characters/{character_id}/fittings/{fitting_id}/"
```

In this example:
- The real endpoint `"/characters/123/fittings/456/"` along with the HTTP method `"delete"` is provided.
- `InferEndpointOrigin` successfully maps it to its original form (`"/characters/{character_id}/fittings/{fitting_id}/"`), so that becomes the resolved endpoint.
- If the mapping had failed (i.e., if no parameterized endpoint matched), the type would have defaulted to returning the original real endpoint.

---

`ResolvedEndpoint` thus ensures that you get a consistent and properly parameterized endpoint format, which is crucial for maintaining type safety and clarity in API route definitions.
