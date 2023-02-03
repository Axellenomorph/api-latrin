import { Location } from './location.interface';

export interface Toilet {
  id: string;
  type: EType;
  dryer: EDryer;
  location: Location;
  options: EOption[];
  rating: number;
  comment: string;
}

export enum EType {
  INOX,
  CERAMIC,
  JAPANESE,
  DRY,
  CHEMICAL,
  TURK,
  OTHER,
}

export enum EDryer {
  NAPKIN,
  TOWELS,
  AIRDRY,
  NONE,
  OTHER,
}

export enum EOption {
  SEPARATED,
  NOT_TO_MISS,
  WAIT_EXPECTED,
  PMR,
  SANITARY_PRODUCTS,
  BABY_CHANGE,
  NOT_GENRED,
}
