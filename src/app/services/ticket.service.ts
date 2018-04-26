import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TicketInterface} from 'app/interfaces/ticket.interface';

@Injectable()
export class TicketService {

    constructor(private httpClient: HttpClient) {
    }

    public getTickets() {
        return this.httpClient.get<TicketInterface[]>('/api/ticket');
    }

    public getTicket(ticketId: string) {
        return this.httpClient.get<TicketInterface>('/api/ticket/' + ticketId);
    }

    public save(ticket: TicketInterface) {
        return this.httpClient.post<TicketInterface>('/api/ticket', ticket);
    }

    public update(ticket: TicketInterface) {
        return this.httpClient.put<TicketInterface>('/api/ticket/' + ticket._id, ticket);
    }

    public delete(ticket: TicketInterface) {
        return this.httpClient.delete<TicketInterface>('/api/ticket/' + ticket._id);
    }

    public checkUnique(subjectToCheck: string) {
        return this.httpClient.post('/api/ticket/nameTaken', {toCheck: subjectToCheck});
    }
}
