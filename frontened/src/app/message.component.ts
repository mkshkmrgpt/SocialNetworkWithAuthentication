import { Component } from '@angular/core';
import { ApiService } from "./api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'message',
    template: `<div *ngFor="let message of apiservice.messages">
                 <mat-card>{{message.message}}</mat-card>
             </div>`,
    styleUrls: ['./app.component.css']
})

export class MessageComponent {
    title = 'Message componenet';

    constructor(private apiservice: ApiService, private route:ActivatedRoute) {
    }

    ngOnInit() {
        var id = this.route.snapshot.params.id
        this.apiservice.getMessages(id)
    }

}
