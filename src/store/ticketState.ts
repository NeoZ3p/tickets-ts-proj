import {makeAutoObservable, configure} from 'mobx'
import {ITicket} from '../interfaces/ITicket';
import {API} from '../api/ticketsApi'

configure({
    enforceActions: 'never'
})

class TicketState {
    tickets: ITicket[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    async getTickets() {
        const searchResp = await API.get('/search');
        const ticketsResp = await API.get(`/tickets?searchId=${searchResp.data.searchId}`);

        this.tickets = ticketsResp.data.tickets;
    }

}

export const ticketState = new TicketState();