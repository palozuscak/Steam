
 

import { Component, Input } from '@angular/core';
import { Game } from '../../game';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';




@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  imports: [CommonModule,RouterModule],
  standalone: true,
  styleUrls: ['./game.component.css']
  


})
export class GameComponent {
  @Input() game!: Game;
}
   

