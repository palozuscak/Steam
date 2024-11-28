import { Routes } from '@angular/router';
import { HomeComponent } from './home.component/home.component.component';
import { GameComponent } from './game/game.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Hlavná stránka
  { path: 'about', component: GameComponent }, // O aplikácii
];
