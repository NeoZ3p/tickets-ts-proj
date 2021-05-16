import React, {FC, useEffect} from 'react';
import {Ticket} from "./Ticket";
import {Tab, Tabs} from "react-bootstrap";
import {MoreTickets} from "./MoreTickets";
import {searchIdState} from '../store/searchIdState'
import {ticketState} from '../store/ticketState'
import {ITicket} from '../interfaces/ITicket'
import {ISearchId} from '../interfaces/ISearchId'
import {ITicketsResponse} from '../interfaces/ITicketsResponse';
import {observer} from 'mobx-react-lite';


export const TicketsList: FC = observer(() => {

    useEffect(() => {
        ticketState.getTickets();
    }, [])

    return (
        <>
            <Tabs className='justify-content-center '>
                <Tab eventKey="theCheapest" title="САМЫЙ ДЕШЕВЫЙ">
                    {ticketState.tickets.map((ticket, id) => {
                        return <Ticket key={id} ticket={ticket}/>
                    })}
                    <MoreTickets/>
                </Tab>
                <Tab eventKey="theFastest" title="САМЫЙ БЫСТРЫЙ">
                    {ticketState.tickets.map((ticket, id) => {
                        return <Ticket key={id} ticket={ticket}/>
                    })}
                    <MoreTickets/>
                </Tab>
            </Tabs>
        </>
    );
});
