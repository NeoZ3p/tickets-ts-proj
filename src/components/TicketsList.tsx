import React, {FC, useEffect} from 'react';
import {Ticket} from "./Ticket";
import {Tab, Tabs} from "react-bootstrap";
import {MoreTickets} from "./MoreTickets";
import {ticketState} from '../store/ticketState'
import {observer} from 'mobx-react-lite';
import {firstFiveTicketState} from '../store/firstFiveTicketState';


export const TicketsList: FC = observer(() => {

    useEffect(() => {
        ticketState.getTickets();
        //first five tickets
        const getFiveTickets = ticketState.tickets.slice(0, 6);

        firstFiveTicketState.fiveTickets = getFiveTickets;
    }, [])

    return (
        <>
            <Tabs className='justify-content-center '>
                <Tab eventKey="theCheapest" title="САМЫЙ ДЕШЕВЫЙ">
                    {firstFiveTicketState.fiveTickets.map((ticket, id) => {
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
