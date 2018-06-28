import React from "react";
import Colors from '../../utils/colors';
import { Row, Input, Button } from 'react-materialize'

const Rsvp = () => {
    return(
        <Row>
            <Input s={12} label="Nome" />
            <Input s={12} label="Acompanhante" />
            <Button waves='light' large='true'>Confirmar</Button>
        </Row>
    );
}

export default Rsvp;