<!--!
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
  Released under the MIT license
  https://opensource.org/licenses/mit-license.php
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
-->

## ESI Types Utility Definitions

### IsParameterizedPath

`IsParameterizedPath<EP, A, B>` is a type to determine if a path is parameterized. If it is, it returns `A`, otherwise it returns `B`.

```typescript
type IsParameterizedPath<EP, A, B> = EP extends `${string}/{${string}}/${string | ""}` ? A : B;
```

### IdentifyParameters

`IdentifyParameters<Entry, Opt>` is a type to identify the required parameters for a given entry type.

```typescript
type IdentifyParameters<Entry, Opt> = Opt & Pick<Entry, Exclude<keyof Entry, "result">>;
```

### InferESIResponseResult

`InferESIResponseResult<M extends TESIEntryMethod, EP extends keyof TESIResponseOKMap[M]>` is a type to infer the result type of an ESI response based on the method and endpoint.

```typescript
type InferESIResponseResult<
  M extends TESIEntryMethod,
  EP extends keyof TESIResponseOKMap[M]
> = TESIResponseOKMap[M][EP] extends { result: infer U } ? U : never;
```

### TESIEntryMethod

`TESIEntryMethod` represents the HTTP methods supported by ESI.

```typescript
type TESIEntryMethod = keyof TESIResponseOKMap;
```

### TEndPointGet

`TEndPointGet` represents the endpoints for the "get" method.

```typescript
type TEndPointGet = keyof TESIResponseOKMap["get"];
```

### TEndPointPost

`TEndPointPost` represents the endpoints for the "post" method.

```typescript
type TEndPointPost = keyof TESIResponseOKMap["post"];
```

### TEndPointPut

`TEndPointPut` represents the endpoints for the "put" method.

```typescript
type TEndPointPut = keyof TESIResponseOKMap["put"];
```

### TEndPointDelete

`TEndPointDelete` represents the endpoints for the "delete" method.

```typescript
type TEndPointDelete = keyof TESIResponseOKMap["delete"];
```

### TESIResponseGetEntry

`TESIResponseGetEntry<K extends TEndPointGet>` represents the entry details for the "get" method.

```typescript
type TESIResponseGetEntry<K extends TEndPointGet> = TESIResponseOKMap["get"][K];
```

### TESIResponsePutEntry

`TESIResponsePutEntry<K extends TEndPointPut>` represents the entry details for the "put" method.

```typescript
type TESIResponsePutEntry<K extends TEndPointPut> = TESIResponseOKMap["put"][K];
```

### TESIResponsePostEntry

`TESIResponsePostEntry<K extends TEndPointPost>` represents the entry details for the "post" method.

```typescript
type TESIResponsePostEntry<K extends TEndPointPost> = TESIResponseOKMap["post"][K];
```

### TESIResponseDeleteEntry

`TESIResponseDeleteEntry<K extends TEndPointDelete>` represents the entry details for the "delete" method.

```typescript
type TESIResponseDeleteEntry<K extends TEndPointDelete> = TESIResponseOKMap["delete"][K];
```
