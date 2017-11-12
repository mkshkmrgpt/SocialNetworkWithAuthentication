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
        <input matInput type = "text" placeholder = "email">
    </mat-input-container>
    <mat-input-container>
        <input matInput type = "password" placeholder = "password">
    </mat-input-container>
    </form>
    </mat-card>
  ` ,
  styleUrls: ['./app.component.css']
})
export class RegisterComponent {
  title = 'Register';

}
