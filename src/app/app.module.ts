import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ROUTES } from './app.routes'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SectionTitleComponent } from './index/section-title/section-title.component';
import { ListMoviesComponent } from './index/list-movies/list-movies.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesDescriptionComponent } from './movies/movies-description/movies-description.component';
import { ListMoviesService } from '../app/app.service';
import { CharactersComponent } from './characters/characters.component';
import { PlanetsComponent } from './planets/planets.component';
import { StarchipsComponent } from './starchips/starchips.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { SpeciesComponent } from './species/species.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndexComponent,
    NavbarComponent,
    FooterComponent,
    SectionTitleComponent,
    ListMoviesComponent,
    MoviesComponent,
    MoviesDescriptionComponent,
    CharactersComponent,
    PlanetsComponent,
    StarchipsComponent,
    VehiclesComponent,
    SpeciesComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [ListMoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
