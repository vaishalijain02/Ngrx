import { createSelector, State } from '@ngrx/store';
import { AppState } from '../reducers';
import { DashboardState } from './reducers';

export const selectFeature = (state: AppState) => state.dashboard;
 
export const globaldetails = createSelector(
    selectFeature,
    (state:DashboardState)=> state.globaldetails
);

export const countryList = createSelector(
    selectFeature,
    (state:DashboardState)=> state.countryList
);

export const countrySelectedData = createSelector(
    selectFeature,
    (state:DashboardState)=> state.countrySelected
);

