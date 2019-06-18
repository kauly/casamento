import React, { Component } from "react";
import { Row, Input, Button, Preloader } from 'react-materialize'
// import Api from '../../utils/pagApi';
import './Rsvp.scss';

class Rsvp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            acom: '',
            loader: false
        };
     //   this.saveGuest = this.saveGuest.bind(this);
    }
/*
    saveGuest(){
      document.getElementById('sendButton').style.display = 'none';
      this.setState({loader: true});
      Api.newGuest(this.state.nome, this.state.acom)
        .then(res => {
          if (res === 200) {
            document.getElementById('sendButton').style.display = 'block';
            this.setState({loader: false});
            window.Materialize.toast('Te esperamos lá ;)', 4000);
            this.setState({nome: '', acom: ''});
          }
        });
    }*/

    render(){
        return(
            <Row>
                <Input s={12} label="Nome" value={this.state.nome} onChange={e => this.setState({nome: e.target.value})}/>
                <Input s={12} label="Acompanhante" value={this.state.acom} onChange={e => this.setState({acom: e.target.value})}/>
                <Button waves='light' large={true} id='sendButton'>Confirmar</Button>
                {
                  this.state.loader ? <Preloader flashing/> : null
                }

            </Row>
        );
    }

}

export default Rsvp;