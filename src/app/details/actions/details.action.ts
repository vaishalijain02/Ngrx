import { createAction, props } from '@ngrx/store';

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
  export const loadDetails = createAction(
    '[Resolver] Load details',
    props<{country: String}>()
  );

  export const failLoadDetails = createAction(
    '[Load details API ] Load details API failed'
  );