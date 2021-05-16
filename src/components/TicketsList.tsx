import React, {FC, useEffect} from 'react';
import {Ticket} from "./Ticket";
import {Tab, Tabs} from "react-bootstrap";
import {MoreTickets} from "./MoreTickets";
import {ticketState} from '../store/ticketState'
import {observer} from 'mobx-react-lite';
import {firstFiveTicketState} from '../store/firstFiveTicketState';
import {Loader} from './Loader';


export const TicketsList: FC = observer(() => {

    useEffect(() => {
        (async () => {
            await ticketState.getTickets();
            //first five tickets
            const getFiveTickets = ticketState.tickets.slice(0, 5);

            firstFiveTicketState.fiveTickets = getFiveTickets;
        })()

    }, [])

    if (ticketState.loadingContent) {
        return <Loader/>
    }

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
