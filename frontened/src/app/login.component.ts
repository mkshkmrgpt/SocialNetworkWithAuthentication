import { Component } from "@angular/core"
import { AuthService } from "./auth.service"

@Component({
    selector : 'login',
    template :`
    <mat-card>
        <mat-card-header>Login</mat-card-header>
        <mat-card-content>
        <form>
            <mat-input-container>
                <input [(ngModel)]="loginData.email" matInput type = "text" placeholder ="email" name ="email">
            </mat-input-container>
            <mat-input-container>
                <input [(ngModel)]="loginData.password" matInput type= "password" placeholder = "password" name = "password">
            </mat-input-container>
            <button (click)="post()" mat-raised-button color="primary">Login</button>
        </form>
        </mat-card-content>
    </mat-card>
              `
})

export class LoginComponent {
   
    loginData = {}
    constructor(private authService:AuthService){}

    post(){
        this.authService.loginUser(this.loginData)
    }
}