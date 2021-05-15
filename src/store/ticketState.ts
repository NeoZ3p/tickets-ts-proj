import {makeAutoObservable} from 'mobx'
import {ITicket} from '../interfaces/ITicket';

class TicketState {
    tickets: ITicket[] = [];

    constructor() {
        makeAutoObservable(this);
    }
}

export const ticketState = new TicketState();