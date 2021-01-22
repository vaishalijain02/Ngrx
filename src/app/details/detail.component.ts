import { CountryData } from './../dashboard/interfaces/countries';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,private store: Store<AppState>) { }
  public country$: Observable<CountryData>;


  ngOnInit() {
    this.route.data.subscribe(data => console.log('Data :', data));
    this.country$ = this.store.select((state) => state.dashboard.countrySelected);
  }
}
