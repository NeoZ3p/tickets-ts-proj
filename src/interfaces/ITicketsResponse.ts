import {ITicket} from "./ITicket";

export interface ITicketsResponse {
    stop: boolean
    tickets: ITicket[]
}