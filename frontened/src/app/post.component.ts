import { Component } from "@angular/core";
import { ApiService } from "./api.service";

@Component({
    selector : 'post',
    template :
    `<mat-card>
        <mat-card-header>
            <mat-card-title><h3>Posts</h3></mat-card-title>
        </mat-card-header>
        <form>
            <mat-input-container style="width:100%">
                <textarea [(ngModel)]="postData.message" matInput placeholder="Post" name="message"></textarea>
            </mat-input-container>
            <br>
            <button (click)="post()" mat-raised-button color="primary">Post</button>
        </form>
    </mat-card>
    `
})

export class PostComponent{
    constructor(private apiService:ApiService){}

    postData = {}

    post(){
        this.apiService.postMessage(this.postData)
    }
}