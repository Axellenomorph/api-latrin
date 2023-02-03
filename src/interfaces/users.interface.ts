import { Toilet } from '@/interfaces/toilet.interface';

export interface User {
  id: string;
  email: string;
  password: string;
  faves: Toilet[];
  toilets?: Toilet[];
}
