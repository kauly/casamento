import React from 'react';
import { Modal, Button, Preloader } from "react-materialize";
import Api from '../../utils/pagApi';
import './Roteiro.scss';

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
        <div className="item z-depth-4">
            <img  className="item-figure"   
                    src={roteiro.img} alt="item" />
            <div className="item-footer">
                <p>{roteiro.title}</p>
                <p className="item-preco">R$ {roteiro.price}</p>
                
                <Modal
                    header={roteiro.title}
                    trigger={<p className="item-buy">comprar</p>}>
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