import { CountryData } from './../dashboard/interfaces/countries';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private store: Store<AppState>) { }
  public country$: Observable<CountryData>;
  public countryDataConfirmedList$: Observable<any> = this.store.select(
    (state) => state.dashboard.countryConfirmedData
  );

  public countryDataRecoveredList$: Observable<any> = this.store.select(
    (state) => state.dashboard.countryRecoveredData
  );

  public countryDataDeadList$: Observable<any> = this.store.select(
    (state) => state.dashboard.countryDeadData
  );

  ngOnInit() {
    this.country$ = this.store.select((state) => state.dashboard.countrySelected);
  }

}
