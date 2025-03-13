<!--!
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
  Released under the MIT license
  https://opensource.org/licenses/mit-license.php
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
-->

# ESI Types Utility Summary

## TESICachedSeconds
`TESICachedSeconds` is a type to get the cached seconds for a specific HTTP method.

```typescript
type TESICachedSeconds<
  Method extends TESIEntryMethod, AsEndpoint = void
> = {
  [M in TESIEntryMethod]: {
    [EP in keyof TESIResponseOKMap[M]]: TESIResponseOKMap[M][EP]["cachedSeconds"] extends number
      ? AsEndpoint extends void
        ? TESIResponseOKMap[M][EP]["cachedSeconds"]: EP
      : never
  }[keyof TESIResponseOKMap[M]];
}[Method];
```

## TPathParamsNever
`TPathParamsNever` is a type used when path parameters are not required.

```typescript
type TPathParamsNever = { pathParams?: never };
```

## TESIRequestFunctionSignature2
`TESIRequestFunctionSignature2` is a type that defines the signature of an ESI request function.

```typescript
type TESIRequestFunctionSignature2<ActualOpt> = <
  M extends TESIEntryMethod,
  RealEP extends ReplacePathParams<keyof TESIResponseOKMap[M] & string> | keyof TESIResponseOKMap[M],
  EP extends InferEndpointOrigin<RealEP, keyof TESIResponseOKMap[M]> extends never ? RealEP: InferEndpointOrigin<RealEP, keyof TESIResponseOKMap[M]>,
  PathParams extends RealEP extends EP ? IfNeedPathParams<EP>: TPathParamsNever,
  Opt extends IdentifyParameters<TESIResponseOKMap[M][EP], ActualOpt & PathParams>,
  R extends InferESIResponseResult<M, EP>
>(method: M, endpoint: RealEP, options?: Opt) => Promise<R>;
```

## TESIRequestFunctionEachMethod2
`TESIRequestFunctionEachMethod2` is a type that defines functions to make ESI requests for a specific HTTP method.

```typescript
type TESIRequestFunctionEachMethod2<M extends TESIEntryMethod, ActualOpt = {}> = <
  RealEP extends ReplacePathParams<keyof TESIResponseOKMap[M] & string> | keyof TESIResponseOKMap[M],
  EP extends InferEndpointOrigin<RealEP, keyof TESIResponseOKMap[M]> extends never ? RealEP: InferEndpointOrigin<RealEP, keyof TESIResponseOKMap[M]>,
  PathParams extends RealEP extends EP ? IfNeedPathParams<EP>: TPathParamsNever,
  Opt extends IdentifyParameters<TESIResponseOKMap[M][EP], ActualOpt & PathParams>,
  R extends InferESIResponseResult<M, EP>
>(endpoint: RealEP, options?: Opt) => Promise<R>;
```

## ReplacePathParams
`ReplacePathParams` is a type that replaces path parameters in a string with numbers.

```typescript
type ReplacePathParams<T extends string> = T extends `${infer Start}{${infer Param}}${infer End}`
  ? `${Start}${number}${ReplacePathParams<End>}` : T;
```

## IfNeedPathParams
`IfNeedPathParams` is a type that determines if the endpoint requires path parameters.

```typescript
type IfNeedPathParams<EP> = IfParameterizedPath<EP> extends never ? TPathParamsNever :
  EP extends ReplacePathParams<EP> ? TPathParamsNever : { pathParams: IfParameterizedPath<EP> };
```

## InferEndpointOrigin
`InferEndpointOrigin` is a type that infers the original endpoint path from a real endpoint path.

```typescript
type InferEndpointOrigin<RealEP extends unknown, Endpoints> = {
  [EP in Endpoints]: RealEP extends ReplacePathParams<EP>
    ? EP : never;
}[Endpoints];
```

## IfParameterizedPath
`IfParameterizedPath` is a type that determines the required number of replacements if the endpoint is a parameterized path.

```typescript
type IfParameterizedPath<EP, Opt = never> = EP extends `${string}/{${string}}${string}`
  ? PickPathParameters<EP> extends never
    ? Opt : InferKeysLen<PickPathParameters<EP>> extends 1
      ? number : [number, number]
    : Opt;
```

## IdentifyParameters
`IdentifyParameters` is a type that identifies the required parameters for a given entry type.

```typescript
type IdentifyParameters<
  Entry, Opt,
  Keys = Exclude<keyof Entry, "result" | "tag" | "cachedSeconds">
> = RequireThese<Opt, Keys> & Pick<Entry, Keys>;
```

## InferESIResponseResult
`InferESIResponseResult` is a type that infers the result type of an ESI response based on the method and endpoint.

```typescript
type InferESIResponseResult<
  M extends TESIEntryMethod,
  EP extends keyof TESIResponseOKMap[M]
> = TESIResponseOKMap[M][EP] extends { result: infer U } ? U : never;
```

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

## TEndPointGet
`TEndPointGet` is a type that represents the endpoints for the "get" method.

```typescript
type TEndPointGet = keyof TESIResponseOKMap["get"];
```

## TEndPointPost
`TEndPointPost` is a type that represents the endpoints for the "post" method.

```typescript
type TEndPointPost = keyof TESIResponseOKMap["post"];
```

## TEndPointPut
`TEndPointPut` is a type that represents the endpoints for the "put" method.

```typescript
type TEndPointPut = keyof TESIResponseOKMap["put"];
```

## TEndPointDelete
`TEndPointDelete` is a type that represents the endpoints for the "delete" method.

```typescript
type TEndPointDelete = keyof TESIResponseOKMap["delete"];
```

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
