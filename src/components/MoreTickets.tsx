import React, {FC} from 'react';
import {observer} from 'mobx-react-lite';
import {Button} from "react-bootstrap";
import {firstFiveTicketState} from '../store/firstFiveTicketState';

export const MoreTickets: FC = observer(() => {

    return (
        <Button onClick={() => firstFiveTicketState.getFiveTickets()}
                variant='primary'
                block size='lg'
        >
            Показать еще 5 билетов!
        </Button>
    );
})
