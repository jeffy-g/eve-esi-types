
# eve-esi-types
Extracted main types of ESI (EVE Swagger Interface). This package is designed to handle ESI request and response types effectively.

---

## Table of Contents
1. [Overview](#overview)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Overview](#api-overview)
5. [Version Highlights](#version-highlights)
    - [v3.2.7](#v327)
    - [v3.0.0](#v300)
    - [v2.3.0](#v230)
6. [References](#references)

---

## Overview
`eve-esi-types` helps developers interact with the EVE Online ESI API while leveraging strong TypeScript typings.

This package ensures type safety for ESI request parameters, response handling, and authentication requirements.

---

## Installation

```bash
npm install eve-esi-types
```

---

## Usage

This package is configured to **use ESI version 2 by default**.  
If you need to work with version 1, refer to the [v1 branch](https://github.com/jeffy-g/eve-esi-types/tree/version-1.x).

### Example Usage
A sample script, [`request-v3.mjs`](./request-v3.mjs), is provided.

```bash
node request-v3.mjs
```

---

## API Overview

The core export of this package is the `TESIRequestFunctionSignature2` type. It specifies the required endpoint,

HTTP method, query parameters, OAuth requirement, and response type for ESI requests.

### Main Function Signature

```ts
type TESIRequestFunctionSignature2<ActualOpt extends Record<string, unknown>> = <
  Mtd extends TESIEntryMethod,
  REP extends ReplacePathParams<ESIEndpointOf<Mtd>> | ESIEndpointOf<Mtd>,
  EPO extends ResolvedEndpoint<Mtd, REP>,
  Params extends ResolveEndpointParameters<Mtd, REP, EPO, ActualOpt>,
  Opt extends Params["finalOptions"]
>(
  method: Mtd,
  endpoint: REP,
  ...options: Params["optionIsRequire"] extends 1 ? [Opt] : [Opt?]
) => Promise<Params["result"]>;
```

### Authentication via Environment Variable (v3.2.7+)

You can enable authenticated requests by setting the environment variable `OAUTH_TOKEN` (for testing):

```bash
export OAUTH_TOKEN=<Your Access Token>
```

---

## Version Highlights

### v3.2.7  
- Added support for specifying the `OAUTH_TOKEN` environment variable.  
- Allows authenticated tests to run successfully by providing an OAuth access token.

---

### v3.0.0
- Renamed `TESIRequestFunctionSignature` to `TESIRequestFunctionSignature2`.
- Improved endpoint inference (`RealEP` and `EP`) for better TypeScript type safety.

#### New API Example
Reusable, narrowing-focused API request using `decoreateESIRequestBody`:

```ts
import * as taggedApi from "eve-esi-types/lib/tagged-request-api.mjs";

const esiRequest = taggedApi.decoreateESIRequestBody(...);
const response = await esiRequest.universe.get("/universe/structures/", { query: { filter: "market" } });
```

#### Other Renamed Signatures
- `IESIRequestFunction -> IESIRequestFunction2`
- `TESIRequestFunctionMethods -> TESIRequestFunctionMethods2`

---

### v2.3.0
- Introduced intuitive ESI request handling via **ESI Tagged Types**.
- Deprecated `injectESIRequestBody` in favor of `decoreateESIRequestBody` in later versions.

Minimal default implementation:

```ts
import { esi } from "eve-esi-types/lib/tagged-request-api.mjs";
const response = await esi.universe.get("/universe/structures/", { query: { filter: "market" } });
```

---

## References

- [ESI Types Utility Definitions](./docs/v3/esi-types-util3.md)
- [ESI Tagged Types Utility Definitions](./docs/esi-tagged-types.md)

---

Have questions or issues? Feel free to explore the [GitHub repository](https://github.com/jeffy-g/eve-esi-types) or open an issue!
