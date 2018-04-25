import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'ticket-add-edit-ticket',
    templateUrl: './add-edit-ticket.component.html',
    styleUrls: ['./add-edit-ticket.component.scss']
})
export class AddEditTicketComponent implements OnInit {
    public ticketForm: FormGroup;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.ticketForm = this.fb.group({
            subject: [null, Validators.required],
            body: [null, Validators.required, Validators.minLength(10), Validators.maxLength(500)],
            urgent: [false],
            owner: [null, Validators.required],
            created: [new Date()],
            type: [null, Validators.required]
        });
    }
}
