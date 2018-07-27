import React from 'react';
import { Modal, Button, Preloader } from "react-materialize";
import Api from '../../utils/pagApi';

const Roteiro = ({ roteiro }) => {

    let state = { loader: false };
    const handlleClick = () => {
      document.getElementById('payButton').style.display = 'none';
      state.loader = true;
      Api.sendPayment(1, roteiro.title, roteiro.price)
      .then(res => {
        state.loader = false
        document.getElementById('payButton').style.display = 'block';
        window.location = res;
      });
    };
    return (
        <div className="grid-container-item z-depth-4">
            <img  className="grid-container-item-figure  "   
                    src={roteiro.img} alt="item" />
            <div className="grid-container-item-footer">
                <p>{roteiro.title}</p>
                <Modal
                    header={roteiro.title}
                    trigger={<i className="material-icons small gift white-text">card_giftcard</i>}>
                    <p>{roteiro.text}</p>
                    <p>Preço: R$ {roteiro.price}</p>
                    <Button className="red darken-4 waves-effect waves-light" id="payButton" onClick={handlleClick}>Comprar</Button>
                    {
                      state.loader ? <Preloader flashing/> : null
                    }
                </Modal>
            </div>                       
        </div>    
    );
}

export default Roteiro;