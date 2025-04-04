# Explanation of the `HasRequireParams` Type

`HasRequireParams` is a conditional TypeScript utility type designed to determine whether an API entry has any required parameters, including additional options. It does so by leveraging the `PickRequireParams` type to extract the keys from an entry type that are considered required once common metadata keys (`"result"`, `"tag"`, and `"cachedSeconds"`) have been excluded. If there remain any keys after this exclusion, it means the entry has required parameters, and the type evaluates to `1`; otherwise, it evaluates to `0`.

## Type Definition

```typescript
type HasRequireParams<
  M extends TESIEntryMethod,
  EPx extends ESIEndpointOf<M> | string,
  AdditionalParams,
> = PickRequireParams<M, EPx, AdditionalParams> extends never ? 0 : 1;
```

## Template Parameters

- **`M extends TESIEntryMethod`**  
  Represents the HTTP method (like `"get"`, `"post"`, `"delete"`, etc.) for the request. This helps identify the correct set of endpoints and types associated with that method.

- **`EPx extends ESIEndpointOf<M> | string`**  
  Denotes the endpoint path. It can be a specific parameterized endpoint from a predefined set (based on the HTTP method) or a generic string.

- **`AdditionalParams`**  
  Contains any extra parameters that should be considered during the evaluation. These are merged with the entry type to form a complete set of properties before excluding the metadata keys.

## How It Works

1. **Extracting Required Parameters**  
   The type starts by merging the entry type with `AdditionalParams` and then uses `PickRequireParams` to exclude common metadata keys (`"result"`, `"tag"`, and `"cachedSeconds"`). This extraction isolates the parameters that are truly required for the API call.

2. **Conditional Evaluation**  
   - If the resulting type from `PickRequireParams` is `never` (meaning there are no keys left), then `HasRequireParams` evaluates to `0`.
   - Otherwise, if there exists at least one required parameter, it evaluates to `1`.

## Practical Example

```typescript
type ExampleEntry = { result: string, tag: string, cachedSeconds: number, auth: string };
type HasRequired = HasRequireParams<"get", "/example/endpoint", { auth: string }>;
// Evaluates to: 1
```

In this example:
- The `ExampleEntry` type includes metadata keys as well as an essential key `auth`.
- After merging with `AdditionalParams` (which also includes `{ auth: string }`) and excluding the metadata keys, `auth` remains.
- Since there is a required parameter (`auth`), `HasRequireParams` evaluates to `1`.

---

`HasRequireParams` provides a straightforward mechanism to check if any required parameters exist for a given API entry, assisting in enhancing type safety and clarity in API definitions.
