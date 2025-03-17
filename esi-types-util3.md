<!--!
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
  Released under the MIT license
  https://opensource.org/licenses/mit-license.php
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
-->

# ESI Types Utility 3.1 Summary

This document provides detailed explanations of each type defined in the `index.d.ts` file.

> ## TESIRequestFunctionSignature2

`TESIRequestFunctionSignature2` is a type that defines the signature of an ESI request function where the endpoint can be a real endpoint or a parameterized endpoint. This function sends a request to a specified endpoint and returns a response.

#### Type Parameters

- `ActualOpt`: The actual type of the options.
- `M`: The HTTP method to use for the request.
- `RealEP`: The real path of the ESI endpoint to send the request to.
- `EPx`: The parameterized path of the ESI endpoint to send the request to.
- `PathParams`: Parameters to include in the request if the endpoint is parameterized.
- `Opt`: Options to include in the request. If there is a required parameter, its type will be merged with `ActualOpt`.
- `R`: The response type.
- `HasOpt`: Determines if the options parameter is required.

#### Parameters

- `method`: The HTTP method to use for the request (e.g., "get", "post").
- `endpoint`: The real path of the ESI endpoint to send the request to.
- `options`: An optional object containing additional options for the request. If the endpoint has required parameters, this parameter must be provided.

#### Returns

A `Promise` object containing the response data, with the type inferred based on the method and endpoint.

#### Remarks

The `...options: HasOpt extends 1 ? [Opt] : [Opt?]` parameter is defined this way to enforce that if the endpoint has required parameters, the `options` parameter must be provided. If there are no required parameters, the `options` parameter is optional.


> ## TESIRequestFunctionEachMethod2

`TESIRequestFunctionEachMethod2` is a type that defines the signature of an ESI request function for a specific HTTP method. This function sends a request to a specified endpoint and returns a response.

#### Type Parameters

- `M`: The HTTP method to use for the request.
- `ActualOpt`: The actual type of the options.
- `RealEP`: The real path of the ESI endpoint to send the request to.
- `EPx`: The parameterized path of the ESI endpoint to send the request to.
- `PathParams`: Parameters to include in the request if the endpoint is parameterized.
- `Opt`: Options to include in the request. If there is a required parameter, its type will be merged with `ActualOpt`.
- `R`: The response type.
- `HasOpt`: Determines if the options parameter is required.

#### Parameters

- `endpoint`: The real path of the ESI endpoint to send the request to.
- `options`: An optional object containing additional options for the request. If the endpoint has required parameters, this parameter must be provided.

#### Returns

A `Promise` object containing the response data, with the type inferred based on the method and endpoint.

#### Remarks

The `...options: HasOpt extends 1 ? [Opt] : [Opt?]` parameter is defined this way to enforce that if the endpoint has required parameters, the `options` parameter must be provided. If there are no required parameters, the `options` parameter is optional.



## ReplacePathParams

`ReplacePathParams` is a type that replaces path parameters in a string with numbers.

```typescript
type ReplacePathParams<T extends unknown> = T extends `${infer Start}{${infer Param}}${infer End}`
  ? `${Start}${number}${ReplacePathParams<End>}` : T;
```

  <details>
> Example

  ```typescript
  type Example = ReplacePathParams<"/characters/{character_id}/fittings/{fitting_id}/">;
  // Result: `/characters/${number}/fittings/${number}/`
  ```
  </details>

## InferPathParams

`InferPathParams` is a type that infers the path parameters based on the real endpoint and the resolved endpoint.

```typescript
type InferPathParams<
  RealEP extends unknown, EPx extends unknown
> = RealEP extends EPx ? _IfNeedPathParams<EPx> : TPathParamsNever;
```

## InferEndpointOrigin

`InferEndpointOrigin` is a type that infers the original endpoint based on the real endpoint and the HTTP method. This type maps the real endpoint to its corresponding parameterized endpoint by checking if the real endpoint matches the pattern of any parameterized endpoint.

```typescript
type InferEndpointOrigin<
  RealEP extends unknown, M extends TESIEntryMethod,
  Endpoints extends ESIEndpointOf<M> = ESIEndpointOf<M>
> = {
  [EP in Endpoints]: RealEP extends ReplacePathParams<EP>
    ? EP : never;
}[Endpoints];
```

  <details>
> Example

  ```typescript
type Original = InferEndpointOrigin<"/characters/123/fittings/456/", "delete">;
// Result: "/characters/{character_id}/fittings/{fitting_id}/"
  ```
  </details>


## ResolvedEndpoint

`ResolvedEndpoint` is a type that determines the resolved endpoint based on the real endpoint and the method.

```typescript
type ResolvedEndpoint<
  RealEP extends unknown, M extends TESIEntryMethod,
> = InferEndpointOrigin<RealEP, M> extends never ? RealEP: InferEndpointOrigin<RealEP, M>;
```

  <details>
> Example

  ```typescript
type Resolved = ResolvedEndpoint<"/characters/123/fittings/456/", "delete">;
// Result: "/characters/{character_id}/fittings/{fitting_id}/"
  ```
  </details>

## PickRequireParams

`PickRequireParams` is a type that picks the required parameters from an entry type, including additional parameters. This type excludes the keys "result", "tag", and "cachedSeconds" from the entry type and the additional parameters, and returns the remaining keys as the required parameters.

```typescript
type PickRequireParams<
  M extends TESIEntryMethod,
  EPx extends ESIEndpointOf<M> | string,
  AdditionalParams,
  Entry = _ESIResponseType<M, EPx>
> = Exclude<keyof (Entry & AdditionalParams), "result" | "tag" | "cachedSeconds">;
```

  <details>
> Example

  ```typescript
type ExampleEntry = { result: string, tag: string, cachedSeconds: number, auth: string };
type RequiredParams = PickRequireParams<"get", "/example/endpoint", { auth: string }>;
// Result: "auth"
  ```
  </details>

## HasRequireParams

`HasRequireParams` is a type that determines if the given entry has required parameters, including additional options. This type checks if an entry has any required parameters by excluding the keys "result", "tag", and "cachedSeconds". If any keys remain after this exclusion, it means the entry has required parameters.

```typescript
type HasRequireParams<
  M extends TESIEntryMethod,
  EPx extends ESIEndpointOf<M> | string,
  AdditionalParams,
> = PickRequireParams<M, EPx, AdditionalParams> extends never ? 0 : 1;
```

  <details>
> Example

  ```typescript
type ExampleEntry = { result: string, tag: string, cachedSeconds: number, auth: string };
type HasRequired = HasRequireParams<"get", "/example/endpoint", { auth: string }>;
// Result: 1
  ```
  </details>

## IfParameterizedPath

`IfParameterizedPath` is a type that determines the required number of replacements if `EP` (endpoint) is a parameterized path.

```typescript
type IfParameterizedPath<EP extends unknown, Opt = never> = EP extends `${string}/{${string}}${string}`
  ? PickPathParameters<EP> extends never
    ? Opt : InferKeysLen<PickPathParameters<EP>> extends 1
      ? number : [number, number]
    : Opt;
```

## IdentifyParameters

`IdentifyParameters` is a type that identifies the required parameters for a given entry type, including additional options. This type combines the required parameters from the entry type and the additional options, ensuring that all required parameters are marked as required.

```typescript
type IdentifyParameters<
  M extends TESIEntryMethod,
  EPx extends ESIEndpointOf<M> | string,
  Opt extends Record<string, unknown>,
  Entry = _ESIResponseType<M, EPx>,
  Keys = Exclude<keyof Entry, "result" | "tag" | "cachedSeconds">
> = RequireThese<Opt, Keys> & Pick<Entry, Keys>;
```

  <details>
> Example

  ```typescript
type ExampleEntry = { result: string, tag: string, cachedSeconds: number, auth: string };
type ExampleOpt = { auth: string };
type IdentifiedParams = IdentifyParameters<"get", "/example/endpoint", ExampleOpt, ExampleEntry>;
// Result: { auth: string } & { auth: string }
  ```
  </details>

## InferESIResponseResult

`InferESIResponseResult` is a type that infers the result type of an ESI response based on the method and endpoint.

```typescript
type InferESIResponseResult<
  M extends TESIEntryMethod,
  EPx extends ESIEndpointOf<M> | string
> = _ESIResponseType<M, EPx> extends { result: infer U } ? U : never;
```

  <details>
> Example

  ```typescript
type Result = InferESIResponseResult<"get", "/characters/{character_id}/">;
// Result: The inferred type of the response for the given method and endpoint.
  ```
  </details>

## NoContentResponse

`NoContentResponse` is a type that represents a response with no content (HTTP status 204).

```typescript
type NoContentResponse = { /* status: 204 */ };
```

## TESIEntryMethod

`TESIEntryMethod` is a type that represents the HTTP methods supported by ESI.

```typescript
type TESIEntryMethod = keyof TESIResponseOKMap;
```

  <details>
> Example

  ```typescript
  "get" | "post" | "put" | "delete"
  ```
  </details>

## ESIEndpointOf

`ESIEndpointOf` is a type that represents the endpoints for the specified HTTP method.

```typescript
type ESIEndpointOf<M extends TESIEntryMethod> = keyof TESIResponseOKMap[M];
```

  <details>
> Example

  ```typescript
type TEndPointGet = ESIEndpointOf<"get">;
type TEndPointPost = ESIEndpointOf<"post">;
type TEndPointPut = ESIEndpointOf<"put">;
type TEndPointDelete = ESIEndpointOf<"delete">;
  ```
  </details>

## TESIResponseGetEntry

`TESIResponseGetEntry` is a type that represents the entry details for the "get" method.

```typescript
type TESIResponseGetEntry<K extends TEndPointGet> = TESIResponseOKMap["get"][K];
```

## TESIResponsePutEntry

`TESIResponsePutEntry` is a type that represents the entry details for the "put" method.

```typescript
type TESIResponsePutEntry<K extends TEndPointPut> = TESIResponseOKMap["put"][K];
```

## TESIResponsePostEntry

`TESIResponsePostEntry` is a type that represents the entry details for the "post" method.

```typescript
type TESIResponsePostEntry<K extends TEndPointPost> = TESIResponseOKMap["post"][K];
```

## TESIResponseDeleteEntry

`TESIResponseDeleteEntry` is a type that represents the entry details for the "delete" method.

```typescript
type TESIResponseDeleteEntry<K extends TEndPointDelete> = TESIResponseOKMap["delete"][K];
```
