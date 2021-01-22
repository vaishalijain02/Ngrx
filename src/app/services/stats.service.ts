import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Summary } from '../dashboard/interfaces/response';


@Injectable({
  providedIn: 'root',
})
export class StatsService {
  constructor(private http: HttpClient) {}
  private configUrl = 'https://api.covid19api.com/summary';
  public getSummary$ =  this.http.get<Summary>(this.configUrl);

  public getConfirmedByCountry(countryCode: String) {
    return this.http.get(
      'https://api.covid19api.com/country/' +
        countryCode +
        '/status/confirmed/live'
    );
  }

  public getDeadByCountry(countryCode: String) {
    return this.http.get(
      'https://api.covid19api.com/country/' +
        countryCode +
        '/status/deaths/live'
    );
  }

  public getRecoveredByCountry(countryCode: String) {
    return this.http.get(
      'https://api.covid19api.com/country/' +
        countryCode +
        '/status/recovered/live'
    );
  }
}
