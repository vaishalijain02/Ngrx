import { loadedGlobal } from './../actions/dashboard.actions';
import { Global } from './../interfaces/global';
import { CountryData } from "./../interfaces/countries";
import { Action, createReducer, on } from "@ngrx/store";
import * as DashboardActions from "../actions/dashboard.actions";

export const dashboardFeatureKey = "dashboard";

export interface DashboardState {
  countryList: CountryData[];
  countrySelected: CountryData;
  globaldetails: Global;
}

export const initialState: DashboardState = {
  countryList: null,
  countrySelected: null,
  globaldetails: null
};

const dashboardReducer = createReducer(
  initialState,
  on(DashboardActions.loadedCountryList, (state, action) => ({
    ...state,
    countryList: action.countryList,
  })),
  on(DashboardActions.selectedCountry, (state, action) => ({
    ...state,
    countrySelected: action.countrySelected,
  })),
  on(DashboardActions.loadedGlobal, (state, action) => ({
    ...state,
    globaldetails: action.globaldetails,
  }))
);

export function reducer(state: DashboardState | undefined, action: Action) {
  return dashboardReducer(state, action);
}
