import { Component } from '@angular/core';
import { AuthService } from "./auth.service";

@Component({
  selector: 'app-root',
  template:`
    <mat-toolbar>
      <span>Social Network</span>
      <button mat-button routerLink="/users">Users</button>
      <span style= "flex: 1 1 auto"></span>
      <button mat-button *ngIf="!authService.isAuthenticated" routerLink="/register">Registor</button>
      <button mat-button *ngIf="!authService.isAuthenticated" routerLink="/login">Login</button>
      <button mat-button (click)="logout()" *ngIf="authService.isAuthenticated">Logout</button>
    </mat-toolbar>
    <router-outlet></router-outlet> 
  ` ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private authService:AuthService){}

  logout(){
    this.authService.removeToken()
  }
}
