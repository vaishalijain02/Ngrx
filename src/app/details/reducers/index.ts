import {
  createReducer,
  Action,
  on
} from '@ngrx/store';
import * as DetailsActions from "../actions/details.action";

export const detailsFeatureKey = 'details';

export interface DetailsState {
  countryConfirmedData: any;
  countryRecoveredData: any;
  countryDeadData: any;
}
export const initialState: DetailsState = {
  countryConfirmedData: null,
  countryRecoveredData: null,
  countryDeadData: null
};

const detailsReducer = createReducer(
  initialState,
  on(DetailsActions.loadedCountryConfirmed, (state, action) => ({
    ...state,
    countryConfirmedData: action.confirmedList,
  })),
  on(DetailsActions.loadedCountryRecovered, (state, action) => ({
    ...state,
    countryRecoveredData: action.recoveredList
  })),
  on(DetailsActions.loadedCountryDead, (state, action) => ({
    ...state,
    countryDeadData: action.deadList,
  }))
);

export function reducer(state: DetailsState | undefined, action: Action) {
  return detailsReducer(state, action);
}
