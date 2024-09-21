import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa o FormsModule

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  cityName: string = ''

  @Output() cityChange: EventEmitter<string> = new EventEmitter()

  onSearch(){
    this.cityChange.emit(this.cityName)
  }
}
