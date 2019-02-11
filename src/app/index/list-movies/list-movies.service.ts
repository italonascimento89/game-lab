import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Movies } from '../list-movies/list-movies.model';
import { GAME_LAB_API } from '../../app.api'

@Injectable()
export class ListMoviesService{
    
    constructor(private http: HttpClient){}
    
    getFilms() : Observable<Movies[]>{
        return this.http.get<Movies[]>(`${GAME_LAB_API}/films/`)
        .map( data => {
             return data ['results'];
         });
     }
}