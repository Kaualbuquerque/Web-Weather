import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.css'
})
export class ForecastComponent {
  @Input() time: any
  @Input() conditionIcon: any
  @Input() temp: any
}
