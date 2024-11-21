import { Routes } from '@angular/router';
import { AppComponent } from '';
import { GameComponent } from './game/game.component';


export const routes: Routes = [
  { path: '', component: AppComponent }, // Hlavná stránka
  { path: 'about', component: GameComponent }, // O aplikácii
];
