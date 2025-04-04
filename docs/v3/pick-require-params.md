# Explanation of the `PickRequireParams` Type

`PickRequireParams` is an advanced TypeScript utility type designed to extract the required keys from an entry type after merging it with additional parameters. It achieves this by excluding specific keys—namely, `"result"`, `"tag"`, and `"cachedSeconds"`—which are considered metadata or non-essential for defining required parameters. This type proves extremely useful when determining which parameters are needed for a particular API operation.

## Type Definition

```typescript
type PickRequireParams<
  M extends TESIEntryMethod,
  EPx extends ESIEndpointOf<M> | string,
  AdditionalParams,
  Entry = _ESIResponseType<M, EPx>
> = Exclude<keyof (Entry & AdditionalParams), "result" | "tag" | "cachedSeconds">;
```

## Template Parameters

- **`M extends TESIEntryMethod`**  
  Denotes the HTTP method (such as `"get"`, `"post"`, etc.) used for the request. This helps narrow down the endpoint and response types applicable for the method.

- **`EPx extends ESIEndpointOf<M> | string`**  
  Represents the endpoint path. It can either be a specific parameterized endpoint from a predefined collection (for the given HTTP method) or a generic string.

- **`AdditionalParams`**  
  Contains any extra parameters that need to be considered. These are merged with the entry type to facilitate a comprehensive parameter extraction.

- **`Entry = _ESIResponseType<M, EPx>`**  
  By default, this infers the response type corresponding to the HTTP method and endpoint provided. The resulting type is combined with `AdditionalParams` to determine the full set of keys available before excluding the non-required ones.

## How It Works

1. **Merging Types**  
   The type starts by merging `Entry` with `AdditionalParams` using an intersection (`Entry & AdditionalParams`). This combined type gathers all properties from both sources.

2. **Extracting Keys**  
   Using `keyof` on the merged type yields a union of all property keys present in either `Entry` or `AdditionalParams`.

3. **Excluding Unwanted Keys**  
   The `Exclude` utility then removes the keys `"result"`, `"tag"`, and `"cachedSeconds"` from the union. These keys are typically reserved for metadata or caching information and are not required as input parameters.

## Practical Example

```typescript
type ExampleEntry = { result: string, tag: string, cachedSeconds: number, auth: string };
type RequiredParams = PickRequireParams<"get", "/example/endpoint", { auth: string }, ExampleEntry>;
// Result: "auth"
```

In this example:
- The `ExampleEntry` type contains metadata keys (`result`, `tag`, `cachedSeconds`) and an essential key `auth`.
- After merging with `AdditionalParams` (which provides `{ auth: string }`), the `PickRequireParams` type excludes the metadata keys.
- The final resulting type, `RequiredParams`, is `"auth"`, representing the required parameter.

---

`PickRequireParams` provides a powerful approach to isolating the essential parameters needed for API operations, ensuring that extraneous metadata does not interfere with type-safety and clarity in your API definitions.
