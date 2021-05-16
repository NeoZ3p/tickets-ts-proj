import {makeAutoObservable} from "mobx";
import {ITicket} from "../interfaces/ITicket";

class FirstFiveTicketState {
    fiveTickets: ITicket[] = [];

    constructor() {
        makeAutoObservable(this)
    }
}

export const firstFiveTicketState = new FirstFiveTicketState();