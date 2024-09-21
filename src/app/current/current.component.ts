import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-current',
  standalone: true,
  imports: [],
  templateUrl: './current.component.html',
  styleUrl: './current.component.css'
})
export class CurrentComponent {

  @Input() condition: any
  @Input() conditionIcon: any
  @Input() temp: any

}
