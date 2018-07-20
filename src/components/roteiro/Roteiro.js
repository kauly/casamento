import React from 'react';
import { Modal, Button } from "react-materialize";
import Api from '../../utils/pagApi';

const Roteiro = ({ roteiro }) => {
    const handlleClick = () => {
      Api.sendPayment(1, roteiro.title, roteiro.price);
    };
    return (
        <div className="grid-container-item">
            <img  className="grid-container-item-figure  "   
                    src={roteiro.img} alt="item" />
            <div className="grid-container-item-footer">
                <p>{roteiro.title}</p>
                <Modal
                    header={roteiro.title}
                    trigger={<i className="material-icons small gift white-text">card_giftcard</i>}>
                    <p>{roteiro.text}</p>
                    <p>Preço: R$ {roteiro.price}</p>
                    <Button className="red darken-4 waves-effect waves-light" onClick={handlleClick}>Comprar</Button>
                </Modal>
            </div>                       
        </div>    
    );
}

export default Roteiro;