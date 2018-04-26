import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TicketService} from '../../services/ticket.service';
import {FormControl} from '@angular/forms';
import {TicketInterface} from '../../interfaces/ticket.interface';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switch';

@Component({
    selector: 'ticket-search-ticket',
    templateUrl: './search-ticket.component.html',
    styleUrls: ['./search-ticket.component.scss']
})
export class SearchTicketComponent implements OnInit {
    public ticketSearchControl: FormControl = new FormControl();
    public tickets: TicketInterface[];
    @Output() ticketChanged: EventEmitter<TicketInterface[]> = new EventEmitter<TicketInterface[]>();

    constructor(private ticketService: TicketService) {
    }

    ngOnInit() {
        this.ticketSearchControl
            .valueChanges
            .debounceTime(500)
            .distinctUntilChanged()
            .subscribe((val) => {
            if (!val) {
                this.ticketService.getTickets().subscribe((tickets) => {
                    this.ticketChanged.emit(tickets);
                    this.tickets = tickets;
                });
            } else {
                this.ticketService.search(<string>val).subscribe((tickets) => {
                    this.ticketChanged.emit(tickets);
                    this.tickets = tickets;
                });
            }
        });
    }
}
