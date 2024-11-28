import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {RouterModule} from '@angular/router';
import { GameComponent } from '../game/game.component';
import { Game } from '../../game';
import { ServiceGameService } from '../ServiceGame/service-game.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, GameComponent, CommonModule,NgFor,MatToolbarModule,MatButtonModule,MatCardModule,MatIconModule,RouterModule],
  templateUrl: './home.component.component.html',
  styleUrls: ['./home.component.component.css'],
}
)

export class HomeComponent {
[x:string]: any;

gameComponentList : Game[] = []

constructor(serviceGameService:ServiceGameService) {
 this. gameComponentList = serviceGameService.getAllGames()
}
  
}



