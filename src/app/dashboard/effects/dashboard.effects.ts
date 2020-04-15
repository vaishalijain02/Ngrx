import { loadGlobal, failLoadGlobal, loadedGlobal } from './../actions/dashboard.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { StatsService } from '../stats.service';
import {
  loadCountries,
  loadedCountryList,
  failLoadCountries,
} from '../actions/dashboard.actions';

@Injectable()
export class DashboardEffects {
  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCountries),
      mergeMap(() =>
        this.statsService.getCountriesList().pipe(
          map((countries) => loadedCountryList({ countryList: countries })),
          catchError(() => of(failLoadCountries()))
        )
      )
    )
  );

  getGlobalDetails$ = createEffect(() =>
  this.actions$.pipe(
    ofType(loadGlobal),
    mergeMap(() =>
      this.statsService.getGlobalDetail().pipe(
        map((details) => loadedGlobal({ globaldetails: details })),
        catchError(() => of(failLoadGlobal()))
      )
    )
  )
);

  constructor(private actions$: Actions, private statsService: StatsService) {
  }
}
