import {makeAutoObservable} from "mobx";
import {ITicket} from "../interfaces/ITicket";
import {ticketState} from "./ticketState";

class FirstFiveTicketState {
    fiveTickets: ITicket[] = [];

    constructor() {
        makeAutoObservable(this)
    }

    getFiveTickets() {
        const fiveNow = this.fiveTickets;
        const fiveMore = ticketState.tickets.slice(fiveNow.length, fiveNow.length + 5);

        return fiveNow.push(...fiveMore)
    }
}

export const firstFiveTicketState = new FirstFiveTicketState();