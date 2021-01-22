import { DashboardState } from './../dashboard/reducers/index';
import { createReducer, Action, ActionReducerMap } from '@ngrx/store';
import { DetailsState } from '../details/reducers';
import { routerReducer } from '@ngrx/router-store';

export interface AppState {
  dashboard: DashboardState;
  details: DetailsState;
  router
}

export const initialState: ActionReducerMap<AppState> = {
  dashboard: null,
  details: null,
  router: routerReducer
};

export const reducers: ActionReducerMap<AppState> = {
  ...initialState,
  router: routerReducer
}

// const appReducer = createReducer(initialState);

// export function reducers(state: AppState | undefined, action: Action) {
//   return appReducer(state, action);
// }
