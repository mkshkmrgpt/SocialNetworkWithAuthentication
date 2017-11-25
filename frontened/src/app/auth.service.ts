import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {

    constructor(private http:HttpClient){}

    TOKEN_KEY = 'token'
    path = 'http://localhost:3000/auth/'
    registerUser(userData) {
        this.http.post<any>(this.path+"register", userData).subscribe(res => {
            console.log(res)
            localStorage.setItem(this.TOKEN_KEY, res.token)
        })
    }

    loginUser(userData) {
        this.http.post<any>(this.path+"login", userData).subscribe(res => {
            console.log(res)
            localStorage.setItem(this.TOKEN_KEY, res.token)
        })
    }
    
    getToken(){
        return localStorage.getItem(this.TOKEN_KEY)
    }

    removeToken(){
        localStorage.removeItem(this.TOKEN_KEY)
    }
    get isAuthenticated(){
        return !!localStorage.getItem(this.TOKEN_KEY)
    }
}