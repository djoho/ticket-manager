import {UserInterface} from './user.interface';

export interface TicketInterface {
    subject: string;
    body: string;
    urgent: boolean;
    type: string;
    created: Date;
    owner: UserInterface;
}