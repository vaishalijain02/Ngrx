import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import { tap, first, finalize, filter, distinctUntilChanged, map } from 'rxjs/operators';
import { loadDetails } from './actions/details.action';
import { countrySelectedData } from '../dashboard/dashboard.selector';
import { stationCode } from './details.selector';

@Injectable()
export class DetailsResolver implements Resolve<any> {
  countryOnDashboard: String;
  countryOnDetails: String;
  loading = false;
  constructor(private store: Store<AppState>) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    this.store
      .select(countrySelectedData)
      .subscribe(dashboardStateCode => (this.countryOnDashboard = dashboardStateCode.CountryCode));
    this.store.select(stationCode).subscribe(detailsStoreCode => (this.countryOnDetails = detailsStoreCode));

    return this.store.pipe(
      tap(() => {
        if (!this.loading && this.countryOnDetails !== this.countryOnDashboard) {
          this.loading = true;
          this.store.dispatch(loadDetails({ country: this.countryOnDashboard }));
        }
      }),
      first(),
      finalize(() => (this.loading = false))
    );
  }
}
