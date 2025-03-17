# eve-esi-types
Extracted main types of ESI. Used for ESI request response types.

## Usage

> This package is configured to use version 2 only.

  + If you need to use version 1, please refer to the following link:  
    [eve-esi-types v1](https://github.com/jeffy-g/eve-esi-types/tree/version-1.x)

> Sample code is provided -> [`request-v3.mjs`](./request-v3.mjs)

```shell
$ node request-v3.mjs
```

## API

> The following function signature allows you to benefit from `eve-esi-types`.  
> By specifying the method (`get`, `post`, `put`, `delete`) for each `endpoint`,  
> you can determine the result type of the ESI request, what query parameters are required,  
> and whether OAuth authentication is necessary (`auth: true`).

```ts
// This function signature has been removed in version 3.x
// export declare function fire<
//     M extends TESIEntryMethod,
//     EP extends keyof TESIResponseOKMap[M],
//     P2 extends IfParameterizedPath<EP, Opt>,
//     Opt extends IdentifyParameters<TESIResponseOKMap[M][EP], ESIRequestOptions>,
//     R extends InferESIResponseResult<M, EP>
// >(mthd: M, endp: EP, pathParams?: P2, opt?: Opt): Promise<R>;
```

## New Features in v2.3.0

### ESI Tagged Types

> Introduced intuitive ESI request handling using "tags" from the EVE Swagger JSON.

### ~~injectESIRequestBody~~

> Utilized ~~`injectESIRequestBody`~~ to generate ESI request API objects with narrowed endpoints by accessing camel-cased "tags".

```ts
import * as taggedApi from "eve-esi-types/lib/tagged-request-api.mjs";

// `injectESIRequestBody` has been removed in version 3.x
// const esiRequest = taggedApi.injectESIRequestBody(...);
// const ret = await esiRequest.universe.get("/universe/structures/", { query: { filter: "market" }});
```

+ or

```ts
// Minimal default ESI request body implementation
import { esi } from "eve-esi-types/lib/tagged-request-api.mjs";

const ret = await esi.universe.get("/universe/structures/", { query: { filter: "market" }});
```

## New Features in v3.0.0

### `TESIRequestFunctionSignature` has been renamed to `TESIRequestFunctionSignature2` and the generic parameters have been changed.

> `RealEP` and `EP` help maintain endpoint inference.  
> With `RealEP`, TypeScript inference partially lists the possible endpoints while allowing for path parameter replacement.


```ts
type TESIRequestFunctionSignature2<ActualOpt> = <
  M extends TESIEntryMethod,
  RealEP extends ReplacePathParams<keyof TESIResponseOKMap[M] & string> | keyof TESIResponseOKMap[M],
  EP extends InferEndpointOrigin<RealEP, keyof TESIResponseOKMap[M]> extends never ? RealEP : InferEndpointOrigin<RealEP, keyof TESIResponseOKMap[M]>,
  // If RealEP points to an endpoint origin (not a replaced endpoint), the path parameter is required
  PathParams extends RealEP extends EP ? IfNeedPathParams<EP> : TPathParamsNever,
  Opt extends IdentifyParameters<TESIResponseOKMap[M][EP], ActualOpt & PathParams>,
  R extends InferESIResponseResult<M, EP>
>(method: M, endpoint: RealEP, options?: Opt) => Promise<R>;
```

+ NOTE: Accordingly, the generic parameters for other request function signatures have also been changed, with "2" appended to their names.

  + `IESIRequestFunction` -> `IESIRequestFunction2`
  + `TESIRequestFunctionMethods` -> `TESIRequestFunctionMethods2`
  + `TESIRequestFunctionEachMethod` -> `TESIRequestFunctionEachMethod2`
  + etc. Also, `v2/esi-tagged-types.d.ts` too

### decoreateESIRequestBody

> Utilized `decoreateESIRequestBody` to generate ESI request API objects with narrowed endpoints by accessing camel-cased "tags".

```ts
import * as taggedApi from "eve-esi-types/lib/tagged-request-api.mjs";

const esiRequest = taggedApi.decoreateESIRequestBody(...);
const ret = await esiRequest.universe.get("/universe/structures/", { query: { filter: "market" }});
```


## References

- [`ESI Types Utility Definitions`](./esi-types-util3.md)
