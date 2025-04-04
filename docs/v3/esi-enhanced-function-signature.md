# Explanation of the `TESIEnhancedRequestFunctionSignature` Type

`TESIEnhancedRequestFunctionSignature` is a highly generic function signature type for performing enhanced ESI requests.  
It extends a base request function signature by injecting a prepended parameter at the beginning of the function call,  
thereby providing extra context or enabling pre-processing prior to executing the request.  

This signature adapts to the specifics of the chosen HTTP method, endpoint configuration, inferred path parameters,  
and additional request options—making it ideal for advanced API interactions where both flexibility and strict type-safety are required.

## Generic Parameters

- **`PrependParam`**: The type of the additional parameter that is injected at the beginning of the function call.
- **`ActualOpt`**: An object representing the default options (typically extending `ESIRequestOptions`) used for the request.

## Function Generic Parameters

- **`Mtd`**: The ESI request method type (e.g., GET, POST, DELETE) as defined in `TESIEntryMethod`.
- **`REP`**: The endpoint type, which can be either a version with replaced path parameters (via `ReplacePathParams`) or the raw endpoint type from `ESIEndpointOf<Mtd>`.
- **`EPX`**: The resolved endpoint type, derived from `REP` and `Mtd`.
- **`PPM`**: The type representing the inferred path parameters extracted from `REP` and `EPX`.
- **`Opt`**: The type for additional request options, as deduced from the HTTP method (`Mtd`), endpoint (`EPX`), the default options (`ActualOpt`), and the inferred path parameters (`PPM`).
- **`Ret`**: The type of the response result from the ESI request, as inferred from the method and the endpoint.
- **`HasOpt`**: An internal flag, computed via `HasRequireParams<Mtd, EPX, PPM>`, used to determine whether the request options (`Opt`) are required (evaluating to `1`) or optional (evaluating to `0`).

## Parameters

- **`prependParam: PrependParam`**  
  A prepended parameter that supplies additional context or configuration necessary for the request.
  
- **`method: Mtd`**  
  The HTTP method for the request.

- **`endpoint: REP`**  
  The API endpoint, which may include path parameter replacements (as provided by `ReplacePathParams`).

- **`...options: HasOpt extends 1 ? [Opt] : [Opt?]`**  
  A rest parameter representing additional options for the request. This is required if `HasOpt` is `1` (indicating that some options are mandatory), otherwise it is optional.

## Return Value

- Returns a `Promise<Ret>` that resolves with the response from the ESI endpoint, where `Ret` reflects the inferred result type.

## Type Definition

```typescript
type TESIEnhancedRequestFunctionSignature<
  PrependParam extends unknown, ActualOpt extends Record<string, unknown>
> = <
  Mtd extends TESIEntryMethod,
  REP extends ReplacePathParams<ESIEndpointOf<Mtd>> | ESIEndpointOf<Mtd>,
  EPX extends ResolvedEndpoint<REP, Mtd>,
  PPM extends InferPathParams<REP, EPX>,
  Opt extends IdentifyParameters<Mtd, EPX, ActualOpt, PPM>,
  Ret extends InferESIResponseResult<Mtd, EPX>,
  HasOpt = HasRequireParams<Mtd, EPX, PPM>
>(
  prependParam: PrependParam,
  method: Mtd,
  endpoint: REP,
  ...options: HasOpt extends 1 ? [Opt] : [Opt?]
) => Promise<Ret>;
```

---

`TESIEnhancedRequestFunctionSignature` combines dynamic type inference with advanced parameter and return type handling to support complex API interactions in a type-safe manner.  
It ensures that extra configuration is accounted for at the start of the function call, aligning the signature with the specific needs of the API endpoint and HTTP method being used.
