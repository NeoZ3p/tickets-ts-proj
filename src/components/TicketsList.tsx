import React, {FC, useEffect} from 'react';
import {Ticket} from "./Ticket";
import {Tab, Tabs} from "react-bootstrap";
import {MoreTickets} from "./MoreTickets";
import {searchIdState} from '../store/searchIdState'
import {ticketState} from '../store/ticketState'
import {ITicket} from '../interfaces/ITicket'
import {ISearchId} from '../interfaces/ISearchId'
import {ITicketsResponse} from '../interfaces/ITicketsResponse';


export const TicketsList: FC = () => {

    async function fetchData() {
        const searchIdData = await fetch('https://front-test.beta.aviasales.ru/search')
            .then(response => response.json())
            .then((response: ISearchId) => searchIdState.state = response)

        const ticketsData = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchIdData.searchId}`)
            .then(response => response.json())
            .then((response: ITicketsResponse) => ticketState.tickets = response.tickets)
    }

    useEffect(() => {
        fetchData()
    })

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
};
