import {UserInterface} from './user.interface';

export interface TicketInterface {
  _id: string;
  subject: string;
  body: string;
  urgent: boolean;
  type: string;
  created: Date;
  owner: UserInterface;
}
