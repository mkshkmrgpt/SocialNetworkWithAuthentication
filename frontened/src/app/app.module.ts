import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import {MatButtonModule ,
   MatCardModule, 
   MatToolbarModule,
  MatInputModule,
  MatListModule} from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";


import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { AuthService } from "./auth.service";
import { MessageComponent } from "./message.component";
import { RegisterComponent } from "./register.components";
import { LoginComponent } from "./login.component";
import { UsersComponent } from "./users.component";
import { ProfileComponent } from "./profile.component";
import { PostComponent } from "./post.component";
import { AuthInterceptorService } from "./authInterceptor.service";

const router = [
  {path :'register', component : RegisterComponent},
  {path : 'login', component : LoginComponent},
  {path : 'users', component : UsersComponent},
  {path : 'profile/:id', component: ProfileComponent},
  {path : 'post', component: PostComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    RegisterComponent, 
    LoginComponent,
    UsersComponent,
    ProfileComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    MatButtonModule, 
    MatCardModule,
    MatToolbarModule,
    RouterModule.forRoot(router),
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    MatListModule
  ],
  providers: [ApiService, AuthService, {
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptorService,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
