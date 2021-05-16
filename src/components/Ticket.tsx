import React, {FC} from 'react';
import {Card, Container, Row, Col} from "react-bootstrap";
import {ITicket} from '../interfaces/ITicket';
import {TicketProps} from '../interfaces/TicketProps';

export const Ticket: FC<TicketProps> = ({ticket}) => {

    const {price, carrier, segments} = ticket;

    //DURATION
    const dur0 = segments[0].duration;
    const dur1 = segments[1].duration;

    const mins0 = dur0 % 60;
    const mins1 = dur1 % 60;

    const hours0 = (dur0 - mins0) / 60;
    const hours1 = (dur1 - mins1) / 60;

    //DATE
    const date0 = new Date(segments[0].date);
    const date1 = new Date(segments[1].date);
    const formatedDate0 = new Intl.DateTimeFormat('ru-RU', {hour: '2-digit', minute: '2-digit'}).format(date0);
    const formatedDate1 = new Intl.DateTimeFormat('ru-RU', {hour: '2-digit', minute: '2-digit'}).format(date1);
    const readyDate0 = date0.setMinutes(date0.getMinutes() + dur0);
    const readyDate1 = date1.setMinutes(date1.getMinutes() + dur1);

    //NUM OF STOPS
    const numOfStops0 = segments[0].stops.length;
    const numOfStops1 = segments[1].stops.length;


    return (
        <Card style={{boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)'}} className='mt-4 mb-4'>
            <Card.Body>
                <Container>
                    <Row>
                        <Col>
                            <h2>{price} руб</h2>
                        </Col>
                        <Col className='text-end'>
                            <img src={`http://pics.avs.io/99/36/${carrier}.png`} alt="air-logo"/>
                        </Col>
                    </Row>
                    <Row className='mt-2 mb-1'>
                        <Col>
                            <p className='text-muted m-0'>{segments[0].origin}-{segments[0].destination}</p>
                            <p className='m-0'>{`${formatedDate0}-${formatedDate1}`}</p>
                        </Col>
                        <Col>
                            <p className='text-muted m-0'>В ПУТИ</p>
                            <p className='m-0'>{`${hours0}ч ${mins0}м`}</p>
                        </Col>
                        <Col>
                            <p className='text-muted m-0'>{numOfStops0 === 0 ? 'НЕТ' : numOfStops0} {numOfStops0 === 1 ? 'ПЕРЕСАДКА' : numOfStops0 === 2 ? 'ПЕРЕСАДКИ' : numOfStops0 === 3 ? 'ПЕРЕСАДКИ' : 'ПЕРЕСАДОК'}</p>
                            <p className='m-0'>{segments[0].stops.join(', ')}</p>
                        </Col>
                    </Row>
                    <Row className='mt-2 mb-2'>
                        <Col>
                            <p className='text-muted m-0'>{segments[1].origin}-{segments[1].destination}</p>
                            <p className='m-0'>{`${formatedDate0}-${formatedDate1}`}</p>
                        </Col>
                        <Col>
                            <p className='text-muted m-0'>В ПУТИ</p>
                            <p className='m-0'>{`${hours1}ч ${mins1}м`}</p>
                        </Col>
                        <Col>
                            <p className='text-muted m-0'>{numOfStops1 === 0 ? 'НЕТ' : numOfStops1} {numOfStops1 === 1 ? 'ПЕРЕСАДКА' : numOfStops1 === 2 ? 'ПЕРЕСАДКИ' : numOfStops1 === 3 ? 'ПЕРЕСАДКИ' : 'ПЕРЕСАДОК'}</p>
                            <p className='m-0'>{segments[1].stops.join(', ')}</p>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
};
