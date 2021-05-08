import React, {FC} from 'react';
import {Button} from "react-bootstrap";

export const MoreTickets: FC = () => {
    return (
        <Button variant='primary' block size='lg'>
            Показать еще 5 билетов!
        </Button>
    );
}
