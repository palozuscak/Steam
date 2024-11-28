import { Injectable } from '@angular/core';
import { Game } from '../../game';

@Injectable({
  providedIn: 'root'
})
export class ServiceGameService {

  protected gameComponentList : Game[] = [


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
  
  ];
 getAllGames(): Game[] {
    return this.gameComponentList
  };

}
