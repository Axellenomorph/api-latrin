import { Toilet } from './toilet.interface';

export interface Location {
  googleMapsID: string;
  googleMapsInfo: MapsInfos;
  toilets: Toilet[];
}

export interface MapsInfos {
  businessStatus: string;
  name: string;
  placeId: string;
  type: string;
  url: string;
  location: { lat: number; lng: number };
}
