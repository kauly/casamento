import React, { Component } from "react";
import { Row, Input, Button } from 'react-materialize'

class Rsvp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            acom: ''
        };
    }

    render(){
        return(
            <Row>
                <Input s={12} label="Nome" value={this.state.nome} onChange={e => this.setState({nome: e.target.value})}/>
                <Input s={12} label="Acompanhante" value={this.state.acom} onChange={e => this.setState({acom: e.target.value})}/>
                <Button waves='light' large={true}>Confirmar</Button>
            </Row>
        );
    }

}

export default Rsvp;