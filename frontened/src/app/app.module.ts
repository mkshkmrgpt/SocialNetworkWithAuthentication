import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpModule } from "@angular/http";
import {MatButtonModule , MatCardModule, MatToolbarModule, MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { MessageComponent } from "./message.component";
import { RegisterComponent } from "./register.components";
import { LoginComponent } from "./login.component";

const router = [
  {path :'register', component : RegisterComponent},
  {path : 'login', component : LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent, MessageComponent, RegisterComponent, LoginComponent
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
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
