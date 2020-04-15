import { Global } from "./interfaces/global";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Summary } from "./interfaces/response";
import { map } from "rxjs/operators";
import { CountryData } from "./interfaces/countries";

@Injectable({
  providedIn: "root",
})
export class StatsService {
  constructor(private http: HttpClient) {}
  private configUrl = "https://api.covid19api.com/summary";
  //https://api.covid19api.com/country/south-africa/status/confirmed/live
  private getConfig(): Observable<Summary> {
    return this.http.get<Summary>(this.configUrl);
  }

  // private getCountryDataConfig(country) {
  //   const countryDataUrl = "https://api.covid19api.com/country/"+country+"/status/confirmed/live";
  //   return this.http.get(countryDataUrl);
  // }

  getGlobalDetail(): Observable<Global> {
    return this.getConfig().pipe(map((res) => res.Global));
  }

  getCountriesList(): Observable<Array<CountryData>> {
    return this.getConfig().pipe(
      map((data: Summary) =>
        data
          ? data.Countries.map((countryData: CountryData) => countryData)
          : []
      )
    );
  }

  public countryByCountryCode(
    countryCode: string
  ): Observable<CountryData | undefined> {
    return this.getCountriesList().pipe(
      map(
        (countries: CountryData[]): CountryData =>
          countries.find(
            (country: CountryData): boolean =>
              country.CountryCode === countryCode
          )
      )
    );
  }
}
