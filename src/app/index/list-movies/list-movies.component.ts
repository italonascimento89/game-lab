import { Component, Input } from '@angular/core';
import { Movies } from './list-movies.model';


@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent {
  
  @Input() movie: Movies;
  
  constructor() { }

}
