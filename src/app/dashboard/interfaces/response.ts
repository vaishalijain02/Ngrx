import { CountryData } from './countries';
import { Global } from './global';

export interface Summary {
  Global: Global;
  Countries: Array<CountryData>;
  Date: String;
}
