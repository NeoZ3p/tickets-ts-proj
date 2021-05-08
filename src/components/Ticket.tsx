import React, {FC} from 'react';
import {Card, Container, Row, Col} from "react-bootstrap";

{/*TODO map method card value */
}

export const Ticket: FC = () => {
    return (
        <Card style={{boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)'}} className='mt-4 mb-4'>
            <Card.Body>
                <Container>
                    <Row>
                        <Col>
                            <h2>10 000р</h2>
                        </Col>
                        <Col className='text-end'>
                            <img src="http://pics.avs.io/99/36/S7.png" alt="air-logo"/>
                        </Col>
                    </Row>
                    <Row className='mt-2 mb-1'>
                        <Col>
                            <p className='text-muted m-0'>MOW-HKT</p>
                            <p className='m-0'>10:45-08:00</p>
                        </Col>
                        <Col>
                            <p className='text-muted m-0'>В ПУТИ</p>
                            <p className='m-0'>21ч 15м</p>
                        </Col>
                        <Col>
                            <p className='text-muted m-0'>2 ПЕРЕСАДКИ</p>
                            <p className='m-0'>HKG, JNB</p>
                        </Col>
                    </Row>
                    <Row className='mt-2 mb-2'>
                        <Col>
                            <p className='text-muted m-0'>MOW-HKT</p>
                            <p className='m-0'>11:20-00:50</p>
                        </Col>
                        <Col>
                            <p className='text-muted m-0'>В ПУТИ</p>
                            <p className='m-0'>13ч 30м</p>
                        </Col>
                        <Col>
                            <p className='text-muted m-0'>1 ПЕРЕСАДКА</p>
                            <p className='m-0'>HKG</p>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
};
