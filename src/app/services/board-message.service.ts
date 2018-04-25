import {Injectable} from '@angular/core';

@Injectable()
export class BoardMessageService {
    public messages: MessageInterface[] = [];

    constructor() {
    }

    public addMessage(message: string, type: MessageTypes = 'success', duration: number = 3000) {
        this.messages.push({
            message: message,
            duration: duration,
            type: type
        });
        setTimeout(() => {
            let index: number = this.messages.findIndex(msgObj => msgObj.message === message);
            if (index > -1) {
                this.messages.splice(index, 1);
            }
        }, duration);
    }
}

export type MessageTypes = 'error' | 'success' | 'warning';

export interface MessageInterface {
    message: string;
    duration: number;
    type: MessageTypes;
}
