import { createAction, props } from '@ngrx/store';
import { CountryData } from '../interfaces/countries';
import { Summary } from '../interfaces/response';

export const loadData = createAction('[Dashboard] Load Summary');

export const selectedCountry = createAction('[Dashboard] Selected Country', props<{ countrySelected: CountryData }>());

export const selectedCountryCode = createAction('[Dashboard] Selected Country code', props<{ code: String }>());

export const loadedSummary = createAction('[API call] Loaded Summary Data Success', props<{ summary: Summary }>());

export const loadedSummaryFailed = createAction('[API call] Loaded Summary Data fail');

export const failLoadCountryData = createAction('[Selected Country Data API] CountryData Loaded Error');
