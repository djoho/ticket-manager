import {Component, OnInit} from '@angular/core';
import {TicketInterface} from '../../../interfaces/ticket.interface';
import {TicketService} from '../../../services/ticket.service';
import {BoardMessageService} from '../../../services/board-message.service';

@Component({
  selector: 'ticket-ticket-overview',
  templateUrl: './ticket-overview.component.html',
  styleUrls: ['./ticket-overview.component.scss']
})
export class TicketOverviewComponent implements OnInit {
  public tickets: TicketInterface[];

  constructor(private ticketService: TicketService,
              private boardMessageService: BoardMessageService) {
  }

  ngOnInit() {
    this.loadTickets();
  }

  public delete(ticket: TicketInterface) {
    this.ticketService.delete(ticket).subscribe(() => {
      this.boardMessageService.addMessage('Ticket ' + ticket.subject + ' wurde erfolgreich gelöscht');
      this.loadTickets();
    });
  }

  public loadTickets() {
    this.ticketService.getTickets().subscribe((tickets) => {
      this.tickets = tickets;
    });
  }
}
