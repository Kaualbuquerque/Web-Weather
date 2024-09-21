import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { CurrentComponent } from './current/current.component';
import { ForecastComponent } from './forecast/forecast.component';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchComponent, CurrentComponent, ForecastComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrigido de styleUrl para styleUrls
})
export class AppComponent implements OnInit {
  title = 'web-weather';
  current: any;  // Você pode usar `any` ou definir uma interface específica

  constructor(private weather: WeatherService) { }

  ngOnInit() {
    // Substitua 'Olinda' pela cidade que você deseja buscar
    this.weather.getWeather("Recife").subscribe(data => {
      this.current = data;
      console.log(this.current); // Para verificar os dados recebidos
    }, error => {
      console.error('Erro ao obter os dados do clima: ', error);
    });
  }
}
