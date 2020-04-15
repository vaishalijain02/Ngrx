import { DashboardState } from './../dashboard/reducers/index';
import { createReducer, Action } from '@ngrx/store';
import { DetailsState } from '../details/reducers';

export interface AppState {
  dashboard: DashboardState;
  details: DetailsState;
}

export const initialState: AppState = {
  dashboard: null,
  details: null,
};

const appReducer = createReducer(initialState);

export function reducers(state: AppState | undefined, action: Action) {
  return appReducer(state, action);
}
