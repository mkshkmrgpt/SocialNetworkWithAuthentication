import { Component } from "@angular/core";
import { ApiService } from "./api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector : 'profile',
    template : `
        <div>
            <mat-card>
            <mat-card-header>
                <mat-card-title>
                    <h4>Profile</h4>
                </mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <mat-list>
                     <mat-list-item>Name : {{profile?.name}}</mat-list-item>
                     <mat-list-item>Email : {{profile?.email}}</mat-list-item>
                     <mat-list-item>Description : {{profile?.description}}</mat-list-item>
                </mat-list>
            </mat-card-content>
            </mat-card>
        </div>
    `
})

export class ProfileComponent{

    constructor(private apiService:ApiService, private router:ActivatedRoute){
    }

    profile

    ngOnInit(){
        var id = this.router.snapshot.params.id
        this.apiService.getUserProfile(id).subscribe(data =>{
            this.profile = data.json()
        })
    }
}