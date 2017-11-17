import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpModule } from "@angular/http";
import {MatButtonModule , MatCardModule, MatToolbarModule, MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { AuthService } from "./auth.service";
import { MessageComponent } from "./message.component";
import { RegisterComponent } from "./register.components";
import { LoginComponent } from "./login.component";
import { UsersComponent } from "./users.component";

const router = [
  {path :'register', component : RegisterComponent},
  {path : 'login', component : LoginComponent},
  {path : 'users', component : UsersComponent},
  {path : 'profile/:id', component: UsersComponent}
]

@NgModule({
  declarations: [
    AppComponent, MessageComponent, RegisterComponent, LoginComponent,UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    MatButtonModule, 
    MatCardModule,
    MatToolbarModule,
    RouterModule.forRoot(router),
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [ApiService, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
