import { Global } from './../interfaces/global';
import { createAction, props } from '@ngrx/store';
import { CountryData } from '../interfaces/countries';

export const loadCountries = createAction('[Dashboard] Load Countries');
export const loadGlobal = createAction('[Dashboard] Load Global Details');

export const selectedCountry = createAction(
  '[Dashboard] Selected Country',
  props<{ countrySelected: CountryData }>()
);

export const loadedCountryList = createAction(
  '[Countries API] Countries Loaded Success',
  props<{ countryList: CountryData[] }>()
);

export const failLoadCountries = createAction(
  '[Countries API] Countries Loaded Error'
);

export const loadedGlobal = createAction(
  '[Global API] Global Loaded Success',
  props<{ globaldetails: Global }>()
);

export const failLoadGlobal = createAction(
  '[Global API] Global Loaded Error'
);

export const loadedCountryConfirmed = createAction(
  '[Countries Confirmed API] Countries Confirmed Cases Loaded',
  props<{ confirmedList: {} }>()
);

export const loadedCountryRecovered = createAction(
  '[Countries Recovered API] Countries Recovered Cases Loaded',
  props<{ recoveredList: {} }>()
);

export const loadedCountryDead = createAction(
  '[Countries Dead API] Countries Dead Cases Loaded',
  props<{ deadList: {} }>()
);

export const failLoadCountryData = createAction(
  '[Selected Country Data API] CountryData Loaded Error'
);