import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ApiService {

    messages = []
    users = []
    profile = {}

    constructor(private http:Http) {
    }

    getMessages(){
        this.http.get('http://localhost:3000/posts').subscribe(res=>{
            this.messages = res.json()
        })
    }

    postMessage(postData){
        this.http.post('http://localhost:3000/post', postData).subscribe(res=>{
        })
    }

    getUsers(){
        this.http.get('http://localhost:3000/users').subscribe(res=>{
            this.users = res.json();
        })
    }

    getUserProfile(id){
       return this.http.get('http://localhost:3000/profile/'+id)
    }

}