import {makeAutoObservable} from 'mobx'

class TicketState {
    tickets: object[] = [];

    constructor() {
        makeAutoObservable(this);
    }
}

export const ticketState = new TicketState();