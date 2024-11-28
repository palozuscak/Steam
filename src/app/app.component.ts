import { routes } from "./app.routes";
import { RouterLink,RouterLinkActive, RouterOutlet } from "@angular/router";
import { Component } from "@angular/core";
import { HomeComponent } from "./home.component/home.component.component";
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterLink,RouterLinkActive, RouterOutlet,HomeComponent,MatButtonModule,MatCardModule,MatIconModule,MatToolbarModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],

  })

  export class AppComponent {
    title='Steam';
  }