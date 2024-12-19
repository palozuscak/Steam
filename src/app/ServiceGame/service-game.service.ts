
import { Injectable } from '@angular/core';
import { Game } from '../../game';
import { Observable, of, delay } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceGameService {

  protected gameComponentList: Game[] = [
    {
      id: 2,
      name: 'Fortnite',
      category: 'Battle Royale',
      comments: 'Very popular multiplayer game!',
      content: 'Survival game with building mechanics.',
      title: 'Fortnite',
      dateOfRelease: '21.7.2017',
      inCart:false,
      ImageUrl: "https://primagames.com/wp-content/uploads/2022/12/FortniteChapter4Start.jpg",
      available:false,
      
    },
    {
      id: 3,
      name: 'Valorant',
      category: 'FPS',
      comments: 'Great tactical shooter!',
      content: '5v5 character-based tactical shooter.',
      title: 'Valorant',
      dateOfRelease: '2.6.2020',
      inCart:false,
      ImageUrl: "https://th.bing.com/th/id/R.414dcc584cb1dbfaf1fd48104e8b7a29?rik=KT%2bBgio%2fBDCETg&pid=ImgRaw&r=0",
      available:false,
    
    },
    {
      id: 4,
      name: 'Hearthstone',
      category: 'Card Game',
      comments: 'Engaging card game!',
      content: 'Online collectible card game.',
      title: 'Hearthstone',
      dateOfRelease: '11.3.2014',
      inCart:false,
      ImageUrl: "https://th.bing.com/th/id/R.475d770302527dbab7708dca2af05afd?rik=ikIUngHqksuEQQ&pid=ImgRaw&r=0",
      available:false,
    
    },
    {
      id: 5,
      name: 'Mortal Kombat 1',
      category: 'Fighting',
      comments: 'Reboot of the classic series!',
      content: 'Intense, brutal fighting game.',
      title: 'Mortal Kombat 1',
      dateOfRelease: '19.9.2023',
      inCart:false,
      ImageUrl: "https://th.bing.com/th/id/OIP.7X69LcbPiNg7dCHEZkOsUAHaEK?rs=1&pid=ImgDetMain",
      available:false,
  
    },
    {
      id: 6,
      name: 'Mortal Kombat 11',
      category: 'Fighting',
      comments: 'Great continuation of the saga!',
      content: 'Dynamic and violent fighting game.',
      title: 'Mortal Kombat 11',
      dateOfRelease: '23.4.2019',
      inCart:false,
      ImageUrl: "https://th.bing.com/th/id/OIP.NnAVPPBBo5WIlOcFpdOmuQHaEK?rs=1&pid=ImgDetMain",
      available:false,
    
    },
    {
      id: 7,
      name: 'Minecraft',
      category: 'Sandbox',
      comments: 'Creative and endless possibilities!',
      content: 'Explore, build, and survive in an open world.',
      title: 'Minecraft',
      dateOfRelease: '18.11.2011',
      inCart:false,
      ImageUrl: "https://th.bing.com/th/id/R.d0bf684a7a0bc8d2a7a8d1388cb4d404?rik=2cFJq3TqhDxpRA&pid=ImgRaw&r=0",
      available:false,
      
    },
  
    {
      id: 1,
    name: 'CSGO 2',
    category: 'FPS',
    comments: 'Nová verzia klasickej hry!',
    content: 'Taktická strieľačka s vylepšenými grafikami.',
    title: 'Counter-Strike 2',
    dateOfRelease: '27.9.2023',
    inCart:false,
    ImageUrl: "https://th.bing.com/th/id/OIP.rj6i5YqPSOh224--r06JKAHaEF?rs=1&pid=ImgDetMain",
    available:false,
    
    },
    {
      
        id: 0, 
        name: 'League of Legends',
        category: 'MOBA',
        comments: 'Legendárna online hra!',
        content: 'Strategická hra pre viacerých hráčov.',
        title: 'League of Legends',
        dateOfRelease: '27.10.2009',
        inCart:false,
      ImageUrl: "https://wallpapers.com/images/hd/amazing-league-of-legends-logo-qvf2e8n179r0kmb1.jpg",
      available:false,
      
    }
  ];

  getAllGames(): Observable<Game[]> {
    return of(this.gameComponentList).pipe(
      delay(2000), // Simulácia oneskorenia
      map(games => 
        games.map(game => ({
          ...game,
          name: game.name.toUpperCase() // Prevod názvov hier na veľké písmená
        }))
      )
    );
  }
}

