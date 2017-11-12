import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpModule } from "@angular/http";
import {MatButtonModule , MatCardModule, MatToolbarModule, MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { MessageComponent } from "./message.component";
import { RegisterComponent } from "./register.components";

const router = [
  {path :'register', component : RegisterComponent}
]

@NgModule({
  declarations: [
    AppComponent, MessageComponent, RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    MatButtonModule, 
    MatCardModule,
    MatToolbarModule,
    RouterModule.forRoot(router),
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
