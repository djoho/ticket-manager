import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TicketInterface} from '../../../interfaces/ticket.interface';
import {TicketService} from '../../../services/ticket.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BoardMessageService} from '../../../services/board-message.service';
import {UserInterface} from '../../../interfaces/user.interface';
import {UserService} from '../../../services/user.service';
import 'rxjs/add/operator/map';

@Component({
    selector: 'ticket-add-edit-ticket',
    templateUrl: './add-edit-ticket.component.html',
    styleUrls: ['./add-edit-ticket.component.scss']
})
export class AddEditTicketComponent implements OnInit {
    public ticketForm: FormGroup;
    public users: UserInterface[];

    constructor(private fb: FormBuilder,
                private ticketService: TicketService,
                private userService: UserService,
                private route: ActivatedRoute,
                private router: Router,
                private boardMessageService: BoardMessageService) {
    }

    ngOnInit() {
        this.ticketForm = this.fb.group({
            _id: [false],
            subject: [null, Validators.required, checkDoesTicketExist(this.ticketService)],
            body: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
            urgent: [false],
            owner: [null, Validators.required],
            created: [new Date()],
            type: [null, Validators.required]
        });

        // Show form state for debugging
        // setInterval(()=>{
        //     console.log(this.ticketForm);
        // },1000);

        this.route.params.subscribe((val) => {
            if (val['id']) {
                this.ticketService.getTicket(val['id']).subscribe((ticket) => {
                    this.ticketForm.patchValue(ticket);
                });
            }
        });

        this.userService.getUsers().subscribe((users) => {
            this.users = users;
        });
    }

    public submit() {
        if (this.ticketForm.value._id) {
            this.ticketService.update(this.ticketForm.value).subscribe((ticket) => {
                this.boardMessageService.addMessage('Ticket ' + ticket.subject + ' wurde erfolgreich geändert');
                this.router.navigateByUrl('/view/' + ticket._id);
            });
        } else {
            this.ticketService.save(this.ticketForm.value).subscribe((ticket) => {
                // this.ticketForm.patchValue(ticket);
                this.boardMessageService.addMessage('Ticket ' + ticket.subject + ' wurde erfolgreich erstellt');
                this.router.navigateByUrl('/view/' + ticket._id);
            });
        }
    }
}

export function checkDoesTicketExist(ticketService: TicketService) {
    return (c: AbstractControl) => {
        return ticketService.checkUnique(c.value).map((val: {taken: boolean}) => {
            if (val.taken !== true) {
                return null;
            } else {
                return {
                    'ticketExists': {
                        message: 'Ticket mit Titel ' + c.value + ' existiert bereits'
                    }
                };
            }
        });
    };
}
