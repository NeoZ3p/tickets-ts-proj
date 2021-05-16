import {makeAutoObservable, configure} from 'mobx'
import {ITicket} from '../interfaces/ITicket';
import {API} from '../api/ticketsApi'

configure({
    enforceActions: 'never'
})

class TicketState {
    tickets: ITicket[] = [];
    loadingContent: boolean = true

    constructor() {
        makeAutoObservable(this);
    }

    async getTickets() {
        const searchResp = await API.get('/search');
        const ticketsResp = await API.get(`/tickets?searchId=${searchResp.data.searchId}`);

        this.tickets = ticketsResp.data.tickets;
        this.loadingContent = false;
    }

}

export const ticketState = new TicketState();