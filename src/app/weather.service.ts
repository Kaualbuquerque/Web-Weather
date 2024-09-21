import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = '/api/getWeather';  // Chama a função serverless

  constructor(private http: HttpClient) { }

  getWeather(city: string = "Recife"): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?city=${city}`);
  }
}
