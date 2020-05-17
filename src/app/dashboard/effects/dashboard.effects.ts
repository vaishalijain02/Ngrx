import {
  loadData,
  loadedSummary,
  loadedSummaryFailed
} from './../actions/dashboard.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { StatsService } from '../../services/stats.service';

@Injectable()
export class DashboardEffects {

  loadSummary$ = createEffect(() => 
     this.actions$.pipe(
      ofType(loadData),
      mergeMap(()=>
      this.statsService.getSummary$.pipe(
        map((details) => loadedSummary({ summary: details })),
        catchError(() => of(loadedSummaryFailed()))
      )
      )
    )
  )

  constructor(private actions$: Actions, private statsService: StatsService) {}
}
