# ESI Tagged Types

This document provides an overview of the types defined in the `eve-esi-types/v2/esi-tagged-types.d.ts` file. These types are used to handle EVE Online ESI responses.

## LCamelCase

Converts a string to lower camel case.

```typescript
type LCamelCase<S extends string> = S extends `${infer P1} ${infer P2}`
  ? `${Lowercase<P1>}${Capitalize<P2>}` : Lowercase<S>;
```

### Example

```typescript
// returns "assets"
LCamelCase<"Assets">

// returns "factionWarfare"
LCamelCase<"Faction Warfare">
```

## InferSomethingBy

Infers something by a brand.

```typescript
type InferSomethingByBrand<N = number> = N & { __enum: "InferSomethingBy" };
type InferSomethingByMethod  = InferSomethingByBrand<0>;
type InferSomethingByTags    = InferSomethingByBrand<1>;
type InferSomethingBy<Tag, AsType extends InferSomethingByBrand = InferSomethingByMethod> = {
  [M in TESIEntryMethod]: TESIResponseOKMap[M] extends Record<`/${string}/`, { tag: infer ActualTag }>
    ? AsType extends InferSomethingByTags
      ? ActualTag : ActualTag extends Tag
        ? M
      : never
    : never;
}[TESIEntryMethod];
```

## ESITags

Maps HTTP methods to their corresponding tags.

```typescript
type ESITags = InferSomethingBy<never, InferSomethingByTags>;
```

## InferMethod

Infers the HTTP method based on the provided tag.

```typescript
type InferMethod<Tag> = InferSomethingBy<Tag>;
```

## TaggedEndpointRequestFunction2

Creates a function type for making requests to tagged endpoints.

```typescript
type TaggedEndpointRequestFunction2<
  M extends TESIEntryMethod, Tag extends ESITags,
  ActualOpt extends Record<string, unknown> = {},
  EndPoints extends SelectEndpointByTag<Tag, M> = SelectEndpointByTag<Tag, M>,
> = <
    REP extends ReplacePathParams<EndPoints> | EndPoints,
    EPX extends _InferEndpointOrigin<REP, EndPoints> extends never ? REP: _InferEndpointOrigin<REP, EndPoints>,
    PPM extends InferPathParams<REP, EPX>,
    Opt extends IdentifyParameters<M, EPX, ActualOpt & PPM>,
    Ret extends InferESIResponseResult<M, EPX>,
    HasOpt = HasRequireParams<M, EPX, PPM>,
>(endpoint: REP, ...options: HasOpt extends 1 ? [Opt] : [Opt?]) => Promise<Ret>;
```

## ESITaggedEndpointRequest2

Maps tags to their corresponding endpoint request functions.

```typescript
type ESITaggedEndpointRequest2<Tag extends ESITags, ActualOpt extends Record<string, unknown> = {}> = {
  [tag in Tag]: {
    [method in InferMethod<Tag>]: TaggedEndpointRequestFunction2<method, tag, ActualOpt>;
  };
}[Tag];
```

## SelectEndpointByTag

Selects an endpoint by tag and method.

```typescript
type SelectEndpointByTag<
  Tag extends ESITags, M extends TESIEntryMethod
> = {
  [EP in keyof TESIResponseOKMap[M]]: TESIResponseOKMap[M][EP] extends { tag: infer ActualTag }
    ? ActualTag extends Tag
      ? EP : never
    : never;
}[keyof TESIResponseOKMap[M]];
```

## TaggedESIRequestMap2

Maps lower camel case tags to their corresponding endpoint request functions.

```typescript
type TaggedESIRequestMap2<ActualOpt extends Record<string, unknown> = {}> = {
  [tag in ESITags as LCamelCase<tag>]: ESITaggedEndpointRequest2<tag, ActualOpt>;
};
```

## TaggedESIRequestMapPartial2

Creates a partial map of lower camel case tags to their corresponding endpoint request functions.

```typescript
type TaggedESIRequestMapPartial2<Props extends LCamelCase<ESITags>> = RequireThese<Partial<TaggedESIRequestMap2>, Props>;
```
