/*!
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  Copyright (C) 2026 jeffy-g <hirotom1107@gmail.com>
//  Released under the MIT license
//  https://opensource.org/licenses/mit-license.php
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
/**
 * @file resources/next/eve-sde-types.d.ts
 */

export type TISODateString =
  `${number}-${number}-${number}T${number}:${number}:${number}Z`;
// {_key: 'sde', buildNumber: 3187404, releaseDate: '2026-02-02T11:23:42Z'}
export type TSDEJsonLatestInfo = {
  _key: string;
  buildNumber: number;
  releaseDate: TISODateString;
};

export {};
export as namespace NsEVESDETypes;
