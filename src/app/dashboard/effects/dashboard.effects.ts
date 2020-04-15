import {
  loadGlobal,
  failLoadGlobal,
  loadedGlobal,
  selectedCountry,
  loadedCountryConfirmed,
  failLoadCountryData,
  loadedCountryDead,
  loadedCountryRecovered,
} from './../actions/dashboard.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
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

  getCountrySelectedConfirmedDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(selectedCountry),
      mergeMap((action) =>
        this.statsService.getConfirmedByCountry(action.countrySelected.CountryCode).pipe(
          map((confirmed) =>
          loadedCountryConfirmed({ confirmedList: confirmed })
          ),
          catchError(() => of(failLoadCountryData()))
        )
      )
    )
  );

  getCountrySelectedRecoveredDetails$ = createEffect(() =>
  this.actions$.pipe(
    ofType(selectedCountry),
    mergeMap((action) =>
      this.statsService.getRecoveredByCountry(action.countrySelected.CountryCode).pipe(
        map((recovered) =>
        loadedCountryRecovered({ recoveredList: recovered })
        ),
        catchError(() => of(failLoadCountryData()))
      )
    )
  )
);

getCountrySelectedDeadDetails$ = createEffect(() =>
this.actions$.pipe(
  ofType(selectedCountry),
  mergeMap((action) =>
    this.statsService.getDeadByCountry(action.countrySelected.CountryCode).pipe(
      map((dead) =>
      loadedCountryDead({ deadList: dead })
      ),
      catchError(() => of(failLoadCountryData()))
    )
  )
)
);

  constructor(private actions$: Actions, private statsService: StatsService) {}
}
