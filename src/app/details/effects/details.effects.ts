import {
    loadedCountryConfirmed,
    loadedCountryDead,
    loadedCountryRecovered,
    loadDetails,
    failLoadDetails,
  } from '../actions/details.action';
  import { Injectable } from '@angular/core';
  import { Actions, createEffect, ofType, act } from '@ngrx/effects';
  import { of } from 'rxjs';
  import { map, mergeMap, catchError, tap } from 'rxjs/operators';
  import { StatsService } from '../../services/stats.service';
  
  @Injectable()
  export class DetailsEffects {
  
    getCountrySelectedConfirmedDetails$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loadDetails),
        mergeMap((action) =>
          this.statsService.getConfirmedByCountry(action.country).pipe(
            map((confirmed) =>
            loadedCountryConfirmed({ confirmedList: confirmed })
            ),
            catchError(() => of(failLoadDetails()))
          )
        )
      )
    );
  
    getCountrySelectedRecoveredDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadDetails),
      mergeMap((action) =>
        this.statsService.getRecoveredByCountry(action.country).pipe(
          map((recovered) =>
          loadedCountryRecovered({ recoveredList: recovered })
          ),
          catchError(() => of(failLoadDetails()))
        )
      )
    )
  );
  
  getCountrySelectedDeadDetails$ = createEffect(() =>
  this.actions$.pipe(
    ofType(loadDetails),
    mergeMap((action) =>
      this.statsService.getDeadByCountry(action.country).pipe(
        map((dead) =>
        loadedCountryDead({ deadList: dead })
        ),
        catchError(() => of(failLoadDetails()))
      )
    )
  )
  );
  
    constructor(private actions$: Actions, private statsService: StatsService) {}
  }
  