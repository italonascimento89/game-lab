import { Component, OnInit, Input } from '@angular/core';
import { Movies } from '../index/list-movies/list-movies.model';
import { ListMoviesService } from '../app.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  @Input() movieDescription: Movies;

  constructor() { }

  ngOnInit() {
    
  }

}
