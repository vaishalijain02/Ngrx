import { CountryData } from './../interfaces/countries';
import { Action, createReducer, on } from '@ngrx/store';
import * as DashboardActions from '../actions/dashboard.actions';
import { Summary } from '../interfaces/response';

export const dashboardFeatureKey = 'dashboard';

export interface DashboardState {
  summary: Summary;
  countrySelected: CountryData;
}

export const initialState: DashboardState = {
  summary: null,
  countrySelected: null
};

const dashboardReducer = createReducer(
  initialState,
  on(DashboardActions.loadedSummary, (state, action) => ({
    ...state,
    summary: action.summary
  })),

  on(DashboardActions.selectedCountry, (state, action) => ({
    ...state,
    countrySelected: action.countrySelected
  }))
);

export function reducer(state: DashboardState | undefined, action: Action) {
  return dashboardReducer(state, action);
}
