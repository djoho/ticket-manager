import {Component, OnInit} from '@angular/core';
import {TicketInterface} from '../../../interfaces/ticket.interface';
import {TicketService} from '../../../services/ticket.service';
import {BoardMessageService} from '../../../services/board-message.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'ticket-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.scss']
})
export class ViewTicketComponent implements OnInit {
  public ticket: TicketInterface = <any>{};

  constructor(private ticketService: TicketService,
              private route: ActivatedRoute,
              private router: Router,
              private boardMessageService: BoardMessageService) {
  }

  ngOnInit() {
    this.route.params.subscribe((val) => {
      if (val['id']) {
        this.ticketService.getTicket(val['id']).subscribe((ticket) => {
          this.ticket = ticket;
        });
      }
    });
  }

  public delete(ticket: TicketInterface) {
    this.ticketService.delete(ticket).subscribe(() => {
      this.boardMessageService.addMessage('Ticket ' + this.ticket.subject + ' wurde erfolgreich gelöscht');
      this.router.navigateByUrl('/home');
    });
  }

}
