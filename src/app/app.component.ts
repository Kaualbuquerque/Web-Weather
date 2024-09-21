import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SearchComponent } from './search/search.component';
import { CurrentComponent } from './current/current.component';
import { ForecastComponent } from './forecast/forecast.component';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SearchComponent, CurrentComponent, ForecastComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'web-weather';

  current: any = {
    condition: '',
    conditionIcon: '',
    temp: ''
  };

  forecast: Array<{ time: string, conditionIcon: string, temp: string }> = [];

  currentHour: number = new Date().getHours();
  city: string = ''

  constructor(private weather: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherData("Recife");
  }

  onCityChange(city: string): void {
    this.city = city;
    this.getWeatherData(city); // Atualiza os dados do clima com o novo nome da cidade
  }

  private getWeatherData(city: string): void {
    this.weather.getWeather(city).subscribe({
      next: (data) => {
        const totalHours = data.forecast.forecastday[0].hour.length;

        /* Current Data */
        this.current.condition = data.current.condition.text;
        this.current.conditionIcon = `http:${data.current.condition.icon}`;
        this.current.temp = data.forecast.forecastday[0].hour[this.currentHour].temp_c.toString().slice(0, 2);

        /* Forecast Data */
        this.forecast = []; // Limpa a previsão antes de preenchê-la
        for (let i = 1; i <= 5; i++) {
          const nextHourIndex = (this.currentHour + i) % totalHours; // Incrementa o índice
          this.forecast.push({
            time: data.forecast.forecastday[0].hour[nextHourIndex].time.slice(-5),
            conditionIcon: `http:${data.forecast.forecastday[0].hour[nextHourIndex].condition.icon}`,
            temp: data.forecast.forecastday[0].hour[nextHourIndex].temp_c.toString().slice(0, 2)
          });
        }
      },
      error: (err) => {
        console.error('Erro ao obter os dados do clima:', err);
      }
    });
  }
}
