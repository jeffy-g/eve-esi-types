# eve-esi-types
Extracted the main type of ESI. Used for ESI request response types.

## Usage

> This package is configured to use version 2 only.

  + If you need to use version 1, please refer to the following link:  
    [eve-esi-types v1](https://github.com/jeffy-g/eve-esi-types/tree/version-1.x)


> Sample code is provided -> [`v2.mjs`](./v2.mjs)

```shell
$ node v2.mjs
```
## API

> The following function signature allows you to benefit from `eve-esi-types`.  
> By specifying the method (`get`, `post`, `put`, `delete`) for each `endpoint`,  
> you can determine the result type of the ESI request, what query parameters are required,  
> and whether OAuth authentication is necessary (`auth: true`).

```ts
// function signature
export declare function fire<
    M extends TESIEntryMethod,
    EP extends keyof TESIResponseOKMap[M],
    P2 extends IfParameterizedPath<EP, Opt>,
    Opt extends IdentifyParameters<TESIResponseOKMap[M][EP], ESIRequestOptions>,
    R extends InferESIResponseResult<M, EP>
>(mthd: M, endp: EP, pathParams?: P2, opt?: Opt): Promise<R>;
```

## New Features in v2.3.0

### ESI Tagged Types

> Introduced intuitive ESI requests handling using "tags" from the EVE Swagger JSON.

### injectESIRequestBody

> Utilized `injectESIRequestBody` to generate ESI request API objects with narrowed endpoints by accessing camel-cased "tags".

```ts
import * as taggedApi from "eve-esi-types/lib/tagged-request-api.mjs";

const esiRequest = taggedApi.injectESIRequestBody(...);
const ret = await esiRequest.universe.get("/universe/structures/", { query: { filter: "market" }});
```

+ or

```ts
// Minimal default ESI request body implementation
import { esi } from "eve-esi-types/lib/tagged-request-api.mjs";

const ret = await esi.universe.get("/universe/structures/", { query: { filter: "market" }});
```

## References

- [`ESI Types Utility Definitions`](./esi-types-util.md)
