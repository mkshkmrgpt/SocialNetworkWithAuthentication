import { Component } from '@angular/core';
import { ApiService } from "./api.service";

@Component({
    selector: 'message',
    template: `<div *ngFor="let message of apiservice.messages">
                 <mat-card>{{message.message}}</mat-card>
             </div>`,
    styleUrls: ['./app.component.css']
})

export class MessageComponent {
    title = 'Message componenet';

    constructor(private apiservice: ApiService) {
    }

    ngOnInit() {
        this.apiservice.getMessages()
    }

}
