/*!
 * ESI endpoint: get:/universe/stars/{star_id}/
 */
/**
 * spectral_class string
 */
type GetUniverseStarsStarIdSpectralClass =
  | "K2 V"
  | "K4 V"
  | "G2 V"
  | "G8 V"
  | "M7 V"
  | "K7 V"
  | "M2 V"
  | "K5 V"
  | "M3 V"
  | "G0 V"
  | "G7 V"
  | "G3 V"
  | "F9 V"
  | "G5 V"
  | "F6 V"
  | "K8 V"
  | "K9 V"
  | "K6 V"
  | "G9 V"
  | "G6 V"
  | "G4 VI"
  | "G4 V"
  | "F8 V"
  | "F2 V"
  | "F1 V"
  | "K3 V"
  | "F0 VI"
  | "G1 VI"
  | "G0 VI"
  | "K1 V"
  | "M4 V"
  | "M1 V"
  | "M6 V"
  | "M0 V"
  | "K2 IV"
  | "G2 VI"
  | "K0 V"
  | "K5 IV"
  | "F5 VI"
  | "G6 VI"
  | "F6 VI"
  | "F2 IV"
  | "G3 VI"
  | "M8 V"
  | "F1 VI"
  | "K1 IV"
  | "F7 V"
  | "G5 VI"
  | "M5 V"
  | "G7 VI"
  | "F5 V"
  | "F4 VI"
  | "F8 VI"
  | "K3 IV"
  | "F4 IV"
  | "F0 V"
  | "G7 IV"
  | "G8 VI"
  | "F2 VI"
  | "F4 V"
  | "F7 VI"
  | "F3 V"
  | "G1 V"
  | "G9 VI"
  | "F3 IV"
  | "F9 VI"
  | "M9 V"
  | "K0 IV"
  | "F1 IV"
  | "G4 IV"
  | "F3 VI"
  | "K4 IV"
  | "G5 IV"
  | "G3 IV"
  | "G1 IV"
  | "K7 IV"
  | "G0 IV"
  | "K6 IV"
  | "K9 IV"
  | "G2 IV"
  | "F9 IV"
  | "F0 IV"
  | "K8 IV"
  | "G8 IV"
  | "F6 IV"
  | "F5 IV"
  | "A0"
  | "A0IV"
  | "A0IV2";

/**
 * 200 ok object
 */
interface GetUniverseStarsStarIdOk {
  /**
   * Age of star in years
   */
  age: number;
  /**
   * luminosity number
   */
  luminosity: number;
  /**
   * name string
   */
  name: string;
  /**
   * radius integer
   */
  radius: number;
  /**
   * solar_system_id integer
   */
  solar_system_id: number;
  spectral_class: GetUniverseStarsStarIdSpectralClass;
  /**
   * temperature integer
   */
  temperature: number;
  type_id: number;
  [k: string]: unknown | undefined;
}
