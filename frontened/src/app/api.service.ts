import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ApiService {

    messages = []
    users = []
    profile = {}

    constructor(private http:HttpClient) {
    }

    getMessages(userId){
        this.http.get<any>('http://localhost:3000/posts/'+userId).subscribe(res=>{
            this.messages = res.json
        })
    }

    postMessage(postData){
        this.http.post('http://localhost:3000/post', postData).subscribe(res=>{
        })
    }

    getUsers(){
        this.http.get<any>('http://localhost:3000/users').subscribe(res=>{
            this.users = res;
        })
    }

    getUserProfile(id){
       return this.http.get('http://localhost:3000/profile/'+id)
    }

}