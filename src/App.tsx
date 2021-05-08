import React, {FC} from 'react';
import {TicketsList} from "./components/TicketsList";
import {Filter} from "./components/Filter";
import {Col, Container, Row} from "react-bootstrap";

const App: FC = () => {
    return (
        <Container>
            <Row className="justify-content-center mt-4 mb-4">
                <Col className='text-center'>
                    <img src={'/assets/logo.png'} alt="logo"/>
                </Col>
            </Row>
            <Row>
                <Col className='mb-2 mb-xl-0 mb-sm-3 mb-md-0 mb-lg-0' xs='12' md='4' lg='3'>
                    <Filter/>
                </Col>
                <Col className='mt-2 mt-xl-0 mt-sm-3 mt-md-0 mt-lg-0' xs='12' md='8' lg='9'>
                    <TicketsList/>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
