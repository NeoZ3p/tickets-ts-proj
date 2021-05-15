import React, {FC, useEffect} from 'react';
import {Ticket} from "./Ticket";
import {Tab, Tabs} from "react-bootstrap";
import {MoreTickets} from "./MoreTickets";
import {searchIdState} from '../store/searchIdState'
import {ticketState} from '../store/ticketState'
import {ITicket} from '../interfaces/ITicket'
import {ISearchId} from '../interfaces/ISearchId'


export const TicketsList: FC = () => {

    async function fetchData() {
        const searchIdData = await fetch('https://front-test.beta.aviasales.ru/search')
            .then(response => response.json())
            .then((response: ISearchId) => searchIdState.state = response)

        const ticketsData = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchIdData.searchId}`)
            .then(response => response.json())
            .then((response: ITicket[]) => ticketState.tickets.push(response))
    }

    useEffect(() => {
        fetchData()
    })

    return (
        <>
            <Tabs className='justify-content-center '>
                <Tab eventKey="theCheapest" title="САМЫЙ ДЕШЕВЫЙ">
                    {ticketState.tickets.map((ticket) => {
                        console.log(ticket)
                        // return <Ticket ticket={ticket}/>
                    })}
                    <MoreTickets/>
                </Tab>
                <Tab eventKey="theFastest" title="САМЫЙ БЫСТРЫЙА">
                    <MoreTickets/>
                </Tab>эт
            </Tabs>
        </>
    );
};
