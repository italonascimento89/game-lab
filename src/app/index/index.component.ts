import { Component, OnInit, Output } from '@angular/core';
import { Movies } from './list-movies/list-movies.model';
import { ListMoviesService } from '../app.service'


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  
  @Output() movies: Movies[]
  
  constructor(private listMovies: ListMoviesService ) { }

  ngOnInit() {

    this.listMovies.getFilms()
    .subscribe(data => this.movies = data);
  
  }

  

  


}
