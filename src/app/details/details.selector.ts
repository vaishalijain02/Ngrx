import { createSelector, createFeatureSelector } from '@ngrx/store';
import { DetailsState, detailsFeatureKey } from './reducers';

export const selectFeature = createFeatureSelector<DetailsState>(detailsFeatureKey);

export const stationCode = createSelector(
    selectFeature,
    (state:DetailsState)=> state.selectedCountryCode
);





