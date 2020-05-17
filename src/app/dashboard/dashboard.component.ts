import { Global } from './interfaces/global';
import { CountryData } from './interfaces/countries';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  loadData,
  selectedCountry,
} from './actions/dashboard.actions';
import { AppState } from '../reducers';
import { FormGroup, FormControl } from '@angular/forms';
import { globaldetails, countrySelectedData, countryList } from './dashboard.selector';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private store: Store<AppState>
  ) {}

  public global$: Observable<Global> = this.store.select(globaldetails);
  public countryList$: Observable<CountryData[]> = this.store.select(countryList);
  public countrySelectedData$: Observable<CountryData> = this.store.select(countrySelectedData);

  public countryForm: FormGroup;

  public show = false;

  public countrySlectedCode: String = 'IN';

  ngOnInit() {
    this.store.dispatch(loadData());

    this.countrySelectedData$.subscribe((val) => {
      if (val) {
        this.show = true;
        this.countrySlectedCode = val.CountryCode;
      }
    });
    this.countryForm = new FormGroup({
      country: new FormControl(this.countrySlectedCode),
    });
    this.countryForm.controls.country.valueChanges.subscribe((val) => {
      this.getStations(val);
    });
    this.getStations(this.countryForm.controls.country.value);
  }

  public getStations(stationCode) {
     this.store.select(countryList).pipe(
       map(
        (countries: CountryData[]): CountryData => {
          if(countries.length){
            return countries.find(
              (country: CountryData): boolean =>
                country.CountryCode === stationCode
            )
          }
        }
          
      )
    ).subscribe((countryStats)=>{
      this.store.dispatch(selectedCountry({ countrySelected: countryStats }));
      this.show = true;
    })
  }

  //   helllo(){
  //     // World Map
  // google.charts.load("current", {
  //   packages: ["geochart"]
  // });
  // google.charts.setOnLoadCallback(drawRegionsMap);

  // function drawRegionsMap() {
  //   fetch("https://api.covid19api.com/summary")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       // Set number of cases
  //       setNumbers(res.Global);
  //       let cases = [];

  //       res.Countries.forEach((country) => {
  //         cases.push([country.CountryCode, country.TotalConfirmed]);
  //       });

  //       var data = google.visualization.arrayToDataTable([
  //         ["Country", "Number of cases"],
  //         ...cases
  //       ]);

  //       var options = {
  //         colorAxis: { colors: ["#3498db", "#ff7675", "#ff6b81", "#c0392b"] }
  //       };

  //       var chart = new google.visualization.GeoChart(
  //         document.querySelector(".world-map")
  //       );

  //       chart.draw(data, options);
  //     });
  // }

  // // Line charts
  // google.charts.load("current", { packages: ["corechart"] });
  // google.charts.setOnLoadCallback(drawChart);

  // // var countryName = 'india'; // Default country name

  // function drawChart(countryName = "india") {
  //   fetch(
  //     "https://api.covid19api.com/total/country/" +
  //       countryName +
  //       "/status/confirmed"
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       let cases = [];
  //       if (res.length !== 0) {
  //         res.forEach((day) => {
  //           cases.push([day.Date.slice(0, 10), day.Cases]);
  //         });

  //         var data = google.visualization.arrayToDataTable([
  //           ["Date", "Cases"],
  //           ...cases
  //         ]);

  //         var options = {
  //           title: "Number of cases",
  //           legend: { position: "bottom" }
  //         };

  //         var chart = new google.visualization.LineChart(
  //           document.querySelector(".country-chart")
  //         );

  //         chart.draw(data, options);
  //       } else {
  //         document.querySelector(".country-chart").innerHTML = "No data";
  //       }
  //     });
  // }

  //  setNumbers(numbers) {
  //   document.getElementById("cases").innerHTML = numbers.TotalConfirmed;
  //   document.getElementById("deaths").innerHTML = numbers.TotalDeaths;
  //   document.getElementById("recovered").innerHTML = numbers.TotalRecovered;
  // }

  // const select = document.getElementById("country");
  // window.onload = function () {
  //   fetch("https://api.covid19api.com/countries")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       data.forEach((d) => {
  //         select.innerHTML += `<option value="${d.Slug}">${d.Country}</option>`;
  //       });
  //       select.value = "india";
  //     });
  // };

  // select.addEventListener("change", () => {
  //   document.querySelector(".country-chart").innerHTML = "";
  //   drawChart(select.value);
  // });

  //   }
}
