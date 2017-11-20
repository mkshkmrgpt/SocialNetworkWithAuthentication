import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {

    constructor(private http:HttpClient){}

    registerUser(userData) {
        this.http.post("http://localhost:3000/register", userData).subscribe(res => {
            console.log(res)
        })
    }

    loginUser(userData) {
        this.http.post<any>("http://localhost:3000/login", userData).subscribe(res => {
            console.log(res)
            localStorage.setItem('token', res.token)
        })
    }
}