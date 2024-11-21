import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameComponent } from './game/game.component';
import { CommonModule } from '@angular/common';
import { Game } from '../game';
import { NgFor } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {RouterModule} from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GameComponent, CommonModule,NgFor,MatToolbarModule,MatButtonModule,MatCardModule,MatIconModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
}
)

export class AppComponent {
[x:string]: any;

gameComponentList : Game[] = [


  {
    id: 0,
    name: 'Game 1',
    category: 'Action',
    level: 10,
    comments: 'Great game!',
    content: 'Fun gameplay with great graphics.',
    title: 'gtjmmtj',
    dateOfRelease: '15.9',
  },

  {
    id: 1,
    name: 'Game 2',
    category: 'Adventure',
    level: 5,
    comments: 'Amazing storyline!',
    content: 'A thrilling adventure.',
    dateOfRelease: '15.9',
    title: 'gtjmmtj',
  },
  {
    id: 2,
    name: 'Game 3',
    category: 'RPG',
    level: 15,
    comments: 'Immersive world!',
    content: 'A rich and detailed environment.',
    title: 'gtjmmtj',
    dateOfRelease: '15.9',
  }

]
}



