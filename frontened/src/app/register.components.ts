import { Component } from '@angular/core';

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
        <input [(ngModel)]="registerData.email" matInput type = "text" name = "email">
    </mat-input-container>
    <mat-input-container>
        <input [(ngModel)]="registerData.pwd" matInput type = "password" name = "password">
    </mat-input-container>
    <button (click)="post()" mat-raised-button color = "primary">Register</button>
    </form>
    </mat-card>
  ` ,
  styleUrls: ['./app.component.css']
})
export class RegisterComponent {
  title = 'Register';
  registerData = []
  post(){
    console.log(this.registerData)
  }
}
