# eve-esi-types (version 1)

Extracted the main type of ESI. Used for ESI request response types.

+ Version 1 makes it somewhat easier to handle types,

  but as a trade-off, it does not support query parameter completion etc.

## Usage

> This package is configured to use version 1 only.

  + If you need to use version 2, please refer to the following link:  
    [eve-esi-types v2](https://github.com/jeffy-g/eve-esi-types)


> Sample code is provided -> [`esi-request.mjs`](./esi-request.mjs)

```shell
$ node esi-request.mjs
```
## API

> The following function signature allows you to benefit from `eve-esi-types`.  
> By specifying the method (`get`, `post`, `put`, `delete`) for each `endpoint`,  
> you can determine the result type of the ESI request.

```ts
// function signature
export async function fire<
    M extends TRequestMethod,
    EP extends keyof TESIResponseOKMap[M],
    Opt extends number | number[] | ESIRequestOptions,
    R extends TESIResponseOKMap[M][EP]
>(
    mthd: M, endp: EP, pathParams?: Opt, opt?: ESIRequestOptions
): Promise<R>;
```
