# eve-esi-types
Extracted the main type of ESI. Used for ESI request response types.

## Usage

> This package is configured to use version 2 only.

  + If you need to use version 1, please refer to the following link:  
    [eve-esi-types v1](https://github.com/jeffy-g/eve-esi-types/tree/v1.1.0)


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
    Opt extends IdentifyParameters<TESIResponseOKMap[M][EP], ESIRequestOptions>,
    P2 extends IsParameterizedPath<EP, number | number[], Opt>,
    R extends InferESIResponseResult<M, EP>
>(mthd: M, endp: EP, pathParams?: P2, opt?: Opt): Promise<R>;
```


## References

- [`ESI Types Utility Definitions`](./esi-types-util.md)
