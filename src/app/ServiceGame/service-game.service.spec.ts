

import { Component, OnInit } from '@angular/core';
import { ServiceGameService } from './service-game.service';
import { Game } from '../../game';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  games: Game[] = [];
  isLoading = true; // Indikátor načítavania
  errorMessage: string | null = null;

  constructor(private gameService: ServiceGameService) {}

  ngOnInit() {
    this.gameService.getAllGames()
      .pipe(
        catchError(err => {
          this.errorMessage = err.message; // Nastavenie chybovej správy
          this.isLoading = false; // Ukončenie načítavania
          return of([]); // Vráti prázdne pole ako fallback
        })
      )
      .subscribe({
        next: (data: Game[]) => {
          this.games = data;
          this.isLoading = false; // Ukončenie načítavania po úspechu
        }
      });
  }
}
