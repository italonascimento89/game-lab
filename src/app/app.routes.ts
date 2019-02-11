import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { MoviesComponent } from '../app/movies/movies.component'; 
import { CharactersComponent } from './characters/characters.component';
import { PlanetsComponent } from './planets/planets.component';
import { StarchipsComponent } from './starchips/starchips.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { SpeciesComponent } from './species/species.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'index', component: IndexComponent },
    { path: 'movies', component: MoviesComponent },
    { path: 'characters', component: CharactersComponent },
    { path: 'planets', component: PlanetsComponent },
    { path: 'starchips', component: StarchipsComponent },
    { path: 'vehicles', component: VehiclesComponent },
    { path: 'species', component: SpeciesComponent}
    
];


