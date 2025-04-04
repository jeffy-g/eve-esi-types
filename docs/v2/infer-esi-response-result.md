# Explanation of the `InferESIResponseResult` Type

`InferESIResponseResult` is a utility TypeScript type designed to extract the type of the `result` property from an ESI response based on a given HTTP method and endpoint. It relies on the underlying `_ESIResponseType`, which represents the full response type for the specified method and endpoint. If this inferred response type includes a `result` key, the type captures and returns its type; otherwise, it defaults to `never`.

## Type Definition

```typescript
type InferESIResponseResult<
  M extends TESIEntryMethod,
  EPx extends ESIEndpointOf<M> | string
> = _ESIResponseType<M, EPx> extends { result: infer U } ? U : never;
```

## Template Parameters

- **`M extends TESIEntryMethod`**  
  The HTTP method (e.g., `"get"`, `"post"`, `"delete"`, etc.) used for the request. This helps determine the proper response type from the API endpoints.

- **`EPx extends ESIEndpointOf<M> | string`**  
  The endpoint path, which can either be one of the predefined parameterized endpoints associated with the HTTP method `M` or a generic string representing an endpoint.

## How It Works

1. **Inferring the Response Type:**  
   The type first evaluates `_ESIResponseType<M, EPx>`, which returns the anticipated response type for the given HTTP method and endpoint.

2. **Extracting the `result` Property:**  
   It then uses a conditional type with the `infer` keyword:
   ```typescript
   _ESIResponseType<M, EPx> extends { result: infer U } ? U : never;
   ```
   - If the response type has a `result` property, `U` is inferred as the type of that property.
   - If there is no `result` property, the type evaluates to `never`.

## Practical Example

```typescript
type Result = InferESIResponseResult<"get", "/characters/{character_id}/">;
// The type 'Result' represents the type of the 'result' field in the response for the GET request to the specified endpoint.
```

---

`InferESIResponseResult` enhances type safety by allowing developers to directly access the portion of the API response that contains the primary data of interest. This makes it easier to work with and validate the structure of responses in a strongly-typed manner.
