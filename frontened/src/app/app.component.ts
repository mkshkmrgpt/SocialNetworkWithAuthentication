import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <mat-toolbar>
      <span>Social Network</span>
      <button mat-button routerLink="/users">Users</button>
      <span style= "flex: 1 1 auto"></span>
      <button mat-button routerLink="/register">Registor</button>
    </mat-toolbar>
    <router-outlet></router-outlet> 
  ` ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

}
