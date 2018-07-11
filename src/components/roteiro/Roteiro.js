import React from 'react';
import { Modal, Button } from "react-materialize";

const Roteiro = ({ roteiro }) => {
    return (
        <div className="grid-container-item">
            <img  className="grid-container-item-figure  "   
                    src={roteiro.img} alt="item" />
            <div className="grid-container-item-footer">
                <p>{roteiro.title}</p>
                <Modal
                    header={roteiro.title}
                    trigger={<i className="material-icons small gift green-text text-darken-2">card_giftcard</i>}>
                    <p>{roteiro.text}</p>
                    <p>Preço: R$ {roteiro.price}</p>
                    <Button className="red darken-4 waves-effect waves-light">Comprar</Button>
                </Modal>
            </div>                       
        </div>    
    );
}

export default Roteiro;