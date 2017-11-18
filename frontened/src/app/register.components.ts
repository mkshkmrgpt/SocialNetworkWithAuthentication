import { Component } from '@angular/core';
import { AuthService } from "./auth.service";

@Component({
  selector: 'register',
  template:`
    <mat-card>
        <mat-card-header>
            <mat-card-title>
                New user registration
            </mat-card-title>
        </mat-card-header>
    <form>
    <mat-input-container>
        <input [(ngModel)]="registerData.email" matInput type = "text" placeholder="Email" name = "email">
    </mat-input-container>
    <mat-input-container>
        <input [(ngModel)]="registerData.password" matInput type = "password" placeholder="Password" name = "password">
    </mat-input-container>
    <br>
    <mat-input-container>
        <input [(ngModel)]="registerData.name" matInput type ="text" placeholder="Name" name="name">
    </mat-input-container>
    <br>
    <mat-input-container>
        <input [(ngModel)]="registerData.description" matInput type="textArea" placeholder="Description" name="description">
    </mat-input-container>
    <br>
    <button (click)="post()" mat-raised-button color = "primary">Register</button>
    </form>
    </mat-card>
  ` ,
  styleUrls: ['./app.component.css']
})
export class RegisterComponent {
  title = 'Register';
  registerData = {}
  constructor(private authService:AuthService){}

  post(){
    this.authService.registerUser(this.registerData)
  }
}
