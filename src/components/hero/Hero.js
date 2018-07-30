import React from 'react';
import Navbar from '../navbar/Navbar';
import './Hero.scss';

const Hero = () => {
    return (
        <section className="hero-main ">
          <Navbar />
          <div className="hero-main-text z-depth-4">
            <p className="hero-main-text-p flow-text">
              <span className="hero-main-text-p-begin">Queridos amigos,</span>
              Pelas mãos do Divino Mestre nossos destinos se encontraram, estamos muitos felizes em comemorar nossa união nesta cerimônia. 
              Sempre foi um desejo podermos reunir os familiares e os amigos especiais para compartilhar parte da nossa história e, viver este momento da maior e mais verdadeira alegria, desejo e emoção.
              A presença de cada um vocês é o verdadeiro presente que poderiam nos dar, mas se mesmo assim desejarem nos presentear com algo mais deixamos umas sugestões que seriam maravilhosas para a nossa lua de mel. A Itália foi o destino escolhido para curtimos alguns momentos de paixão e romance, 
              para tanto selecionamos presentes de forma que todos pudessem de alguma forma partilhar ainda mais deste sonho.
              <span className="hero-main-text-p-final">Beijos e abraços!</span>
            </p>
          </div>
          <div className="hero-main-img ">
            
          </div>
        
        </section>
    );
}

export default Hero;