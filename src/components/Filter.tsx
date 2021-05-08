import React, {FC} from 'react';
import {Card, ListGroup} from "react-bootstrap";
import {Checkboxes} from "./Checkboxes";

export const Filter: FC = () => {
    return (
        <Card style={{boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px 10px 0 0'}}>
            <Card.Body>
                <Card.Title>Количество пересадок</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <Checkboxes/>
            </ListGroup>
        </Card>
    );
};
