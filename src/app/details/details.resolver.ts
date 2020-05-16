import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { tap, first, finalize } from 'rxjs/operators';
import { loadDetails } from './actions/details.action';

@Injectable()
export class DetailsResolver implements Resolve<any>{
    country: String;
    loading = false;
    constructor(private store:Store<AppState>){}
    resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any>{
        
         this.store.select(
            (state) => state.dashboard.countrySelected
          ).subscribe((country)=> this.country = country.CountryCode)

          return this.store.pipe(
              tap(()=> {
                  if(!this.loading){
                      this.loading = true;
                    this.store.dispatch(loadDetails({country: this.country}))
                  }
              }),
              first(),
              finalize(()=> this.loading = false)
          );
         }
}