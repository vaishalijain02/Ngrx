import {
  loadData,
  loadedSummary,
  loadedSummaryFailed,
  selectedCountryCode,
  selectedCountry
} from './../actions/dashboard.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { StatsService } from '../../services/stats.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { CountryData } from '../interfaces/countries';
import { countryList } from '../dashboard.selector';

@Injectable()
export class DashboardEffects {
  loadSummary$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadData),
      mergeMap(() =>
        this.statsService.getSummary$.pipe(
          map(details => loadedSummary({ summary: details })),
          catchError(() => of(loadedSummaryFailed()))
        )
      )
    )
  );

  selectedCountry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(selectedCountryCode),
      mergeMap(station =>
        this.store.select(countryList).pipe(
          map((countries: CountryData[]) => {
            const countryStats = countries.find(
              (country: CountryData): boolean => country.CountryCode === station.code
            );
            return selectedCountry({ countrySelected: countryStats });
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private statsService: StatsService, private store: Store<AppState>) {}
}
