import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from "../environments/environment.prod"

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = 'https://api.weatherapi.com/v1/forecast.json';


  constructor(private http: HttpClient) { }

  getWeather(city: string = "Recife"): Observable<any> {
    const url = `${this.apiUrl}?key=${environment.API_KEY}&q=${city}&days=1`;
    return this.http.get<any>(url);
  }
}
