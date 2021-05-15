import React, {FC} from 'react';
import {Form, ListGroupItem} from "react-bootstrap";

export const Checkboxes: FC = () => {
    const numOfTransfers: string[] = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];
    return (
        <>
            {numOfTransfers.map((method, id) => (
                <ListGroupItem key={id}>
                    <Form.Check
                        type='checkbox'
                        id={`method-${method}`}
                        label={method}
                    />
                </ListGroupItem>
            ))}
        </>
    );
};
