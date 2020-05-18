import { createSelector, createFeatureSelector } from '@ngrx/store';
// import { AppState } from '../reducers';
import { DashboardState } from './reducers';

//export const selectFeature = (state: AppState) => state.dashboard;
export const selectFeature = createFeatureSelector<DashboardState>('dashboard');
export const summaryDetails = createSelector(
  selectFeature,
  (state: DashboardState) => state.summary
);

export const countrySelectedData = createSelector(
  selectFeature,
  (state: DashboardState) => state.countrySelected
);

export const countryList = createSelector(
  summaryDetails,
  summary => {
    if (summary) {
      return summary.Countries;
    } else {
      return [];
    }
  }
);

export const globaldetails = createSelector(
  summaryDetails,
  summary => {
    if (summary) return summary.Global;
  }
);
