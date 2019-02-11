import { Component, OnInit, Input } from '@angular/core';
import { Movies } from '../../index/list-movies/list-movies.model';
import { ListMoviesService } from '../../app.service';


@Component({
  selector: 'app-movies-description',
  templateUrl: './movies-description.component.html',
  styleUrls: ['./movies-description.component.css']
})
export class MoviesDescriptionComponent implements OnInit {

  @Input() description: Movies[];

  constructor(private descriptionMovie: ListMoviesService) { }

  ngOnInit() {
      this.descriptionMovie.getFilms()
      .subscribe( data => this.description = data)
     
  }

}
