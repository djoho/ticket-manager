import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TicketInterface} from '../../../interfaces/ticket.interface';
import {TicketService} from '../../../services/ticket.service';
import {ActivatedRoute} from '@angular/router';
import {BoardMessageService} from "../../../services/board-message.service";

@Component({
  selector: 'ticket-add-edit-ticket',
  templateUrl: './add-edit-ticket.component.html',
  styleUrls: ['./add-edit-ticket.component.scss']
})
export class AddEditTicketComponent implements OnInit {
  public ticketForm: FormGroup;
  public ticket: TicketInterface = <any>{};

  constructor(private fb: FormBuilder,
              private ticketService: TicketService,
              private route: ActivatedRoute,
              private boardMessageService: BoardMessageService) {
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

    this.route.params.subscribe((val) => {
      if (val['id']) {
        this.ticketService.getTicket(val['id']).subscribe((ticket) => {
          this.ticket = ticket;
        });
      }
    });
  }

  public submit() {
    if (this.ticket._id) {
      this.ticketService.update(this.ticket).subscribe((ticket) => {
        this.boardMessageService.addMessage('Ticket ' + this.ticket.subject + ' wurde erfolgreich geändert');
      });
    } else {
      this.ticketService.save(this.ticket).subscribe((ticket) => {
        this.boardMessageService.addMessage('Ticket ' + this.ticket.subject + ' wurde erfolgreich erstellt');
        this.ticket = ticket;
      });
    }
  }
}
