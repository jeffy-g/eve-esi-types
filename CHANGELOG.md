# Changelog

All notable changes to this project will be documented in this file.

## [3.2.0] - 2025-4-17

### Added
- New experimental utility type `InferNextEndpoint` (beta).

### Changed
- Until now, DTS files were written for each method and endpoint,  
  but from this version, DTS files are written collectively by "tag".

### Maintenance
- Confirmed removal of the unused "opportunities" ESI endpoint, as per official deprecation notice.


### ⚙️ Miscellaneous Tasks

- Update keywords
- Required flags (jsconfig.json)

## [3.1.7] - 2025-04-05

### 🐛 Bug Fixes

- Update broken documentation link

## [3.1.6] - 2025-04-05

### 📚 Documentation

- Add Markdown documentation link

## [3.1.5] - 2025-04-04

### ⚙️ Miscellaneous Tasks

- Added utility type documentation (markdown)

## [3.1.4] - 2025-04-04

### 🚀 Features

- Added new type `TESIEnhancedRequestFunctionSignature`

### 🐛 Bug Fixes

- `RestrictKeys`, `RequireThese`

### 🚜 Refactor

- *(types)* Add constraint to `TESIRequestFunctionSignature2` to ensure `ActualOpt` extends `Record<string, unknown>`
- `IdentifyParameters`

### ⚙️ Miscellaneous Tasks

- Lint

## [3.1.3] - 2025-03-24

### 🐛 Bug Fixes

- Ensure intended behavior by deliberately triggering semantic error

## [3.1.2] - 2025-03-17

### 💼 Other

- Update README.md and add docs/esi-tagged-types.md

## [3.1.1] - 2025-03-17

### 🐛 Bug Fixes

- Incomplete `TaggedEndpointRequestFunction2` type

## [3.1.0] - 2025-03-17

### 💼 Other

- Significant enhancements to the main utility type for improved functionality

### ⚙️ Miscellaneous Tasks

- Update README.md, esi-types-util3.md
- Update to version 3.1

## [3.0.4] - 2025-03-14

### ⚙️ Miscellaneous Tasks

- Explain `TESIRequestFunctionSignature2` rest parameter `options` behavior

## [3.0.3] - 2025-03-14

### 🚜 Refactor

- Enable determination of whether `Opt` is required or optional using the `HasOpt` generics parameter

## [3.0.2] - 2025-03-14

### 🚜 Refactor

- Apply minItems and maxItems restrictions

## [3.0.1] - 2025-03-13

### ⚙️ Miscellaneous Tasks

- About `decoreateESIRequestBody`

## [3.0.0] - 2025-03-13

### 🚀 Features

- Update README for v3.0.0 new features

## [2.3.5] - 2025-03-10

### 🚀 Features

- Added `cachedSeconds` member from "x-cached-seconds", new utility type `TESICachedSeconds`

### 🐛 Bug Fixes

- Typo ESIRequesError -> ESIRequestError

### 🚜 Refactor

- Enum to type, `EInferSomethingBy`

## [2.3.4] - 2025-03-10

### 🐛 Bug Fixes

- Logger problem

### 🚜 Refactor

- Add lib/constants.mjs

### ⚙️ Miscellaneous Tasks

- Jsdoc of `initOptions`, refactor `injectESIRequestBody`
- ESITagsWithMethodList -> ESITagMethodMapping
- Apply `Object.freeze` to result of `injectESIRequestBody`
- *(release)* V2.3.4 release

## [2.3.3] - 2025-03-05

### ⚙️ Miscellaneous Tasks

- Add support for web browsers
- Add comment regarding the importance of setting the language parameter
- Add "index.html" for web testing

## [2.3.2] - 2025-03-04

### 🚜 Refactor

- Introduce ESI Error handling via "lib/esi-error-types.d.ts"

## [2.3.1] - 2025-03-02

### 💼 Other

- Added "v2/esi-tagged-types.d.ts" to define ESI tagged request types
- Fix missing pragma "/// <reference types='../v2/esi-tagged-types'/>"

### 🚜 Refactor

- Small improvements
- Utility type - v2/esi-tagged-types.d.ts
- `IfParameterizedPath` improved

## [2.2.5] - 2025-02-12

### ⚙️ Miscellaneous Tasks

- Remove non-functional bookmarks endpoints in ESI

