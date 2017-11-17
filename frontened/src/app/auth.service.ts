import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {

    constructor(private http:Http){}
    
    registerUser(userData) {
        this.http.post("http://localhost:3000/register", userData).subscribe(res => {
            console.log(res)
        })
    }

    loginUser(userData) {
        this.http.post("http://localhost:3000/login", userData).subscribe(res => {
            console.log(res)
        })
    }
}