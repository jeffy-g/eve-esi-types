<!--!
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
  Released under the MIT license
  https://opensource.org/licenses/mit-license.php
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
-->

## ESI Types Utility Definitions

### TESIRequestFunctionSignature

`TESIRequestFunctionSignature<ActualOpt>` is a type that defines the signature of an ESI request function,  
which sends a request to a specified endpoint and returns a response.

```ts
type TESIRequestFunctionSignature<ActualOpt> = <
  M extends TESIEntryMethod,
  EP extends keyof TESIResponseOKMap[M],
  P2 extends IfParameterizedPath<EP, Opt>,
  Opt extends IdentifyParameters<TESIResponseOKMap[M][EP], ActualOpt>,
  R extends InferESIResponseResult<M, EP>
>(method: M, endpoint: EP, pathParams?: P2, options?: Opt) => Promise<R>;
```

### IfParameterizedPath

`IfParameterizedPath<EP, Opt>` if parameterized path then specify number type, otherwise will be `Opt` type.

```ts
type IfParameterizedPath<EP, Opt> = EP extends `${string}/{${string}}${string}`
  ? PickPathParameters<EP> extends never
    ? Opt : InferKeysLen<PickPathParameters<EP>> extends 1
        ? number : [number, number]
    : Opt;
```

### IdentifyParameters

`IdentifyParameters<Entry, Opt>` is a type to identify the required parameters for a given entry type.

```ts
type IdentifyParameters<Entry, Opt> = Opt & Pick<Entry, Exclude<keyof Entry, "result">>;
```

### InferESIResponseResult

`InferESIResponseResult<M extends TESIEntryMethod, EP extends keyof TESIResponseOKMap[M]>` is a type to infer the result type of an ESI response based on the method and endpoint.

```ts
type InferESIResponseResult<
  M extends TESIEntryMethod,
  EP extends keyof TESIResponseOKMap[M]
> = TESIResponseOKMap[M][EP] extends { result: infer U } ? U : never;
```

### TESIEntryMethod

`TESIEntryMethod` represents the HTTP methods supported by ESI.

```ts
type TESIEntryMethod = keyof TESIResponseOKMap;
```

### TEndPointGet

`TEndPointGet` represents the endpoints for the "get" method.

```ts
type TEndPointGet = keyof TESIResponseOKMap["get"];
```

### TEndPointPost

`TEndPointPost` represents the endpoints for the "post" method.

```ts
type TEndPointPost = keyof TESIResponseOKMap["post"];
```

### TEndPointPut

`TEndPointPut` represents the endpoints for the "put" method.

```ts
type TEndPointPut = keyof TESIResponseOKMap["put"];
```

### TEndPointDelete

`TEndPointDelete` represents the endpoints for the "delete" method.

```ts
type TEndPointDelete = keyof TESIResponseOKMap["delete"];
```

### TESIResponseGetEntry

`TESIResponseGetEntry<K extends TEndPointGet>` represents the entry details for the "get" method.

```ts
type TESIResponseGetEntry<K extends TEndPointGet> = TESIResponseOKMap["get"][K];
```

### TESIResponsePutEntry

`TESIResponsePutEntry<K extends TEndPointPut>` represents the entry details for the "put" method.

```ts
type TESIResponsePutEntry<K extends TEndPointPut> = TESIResponseOKMap["put"][K];
```

### TESIResponsePostEntry

`TESIResponsePostEntry<K extends TEndPointPost>` represents the entry details for the "post" method.

```ts
type TESIResponsePostEntry<K extends TEndPointPost> = TESIResponseOKMap["post"][K];
```

### TESIResponseDeleteEntry

`TESIResponseDeleteEntry<K extends TEndPointDelete>` represents the entry details for the "delete" method.

```ts
type TESIResponseDeleteEntry<K extends TEndPointDelete> = TESIResponseOKMap["delete"][K];
```
