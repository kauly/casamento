import React from "react";
import './Hero.scss';
import heroImg from '../../img/hero_img.jpg';
import logo from '../../img/heart-balloon.png';
import { Container } from 'react-materialize';

const Hero = () => {
    return (
        <section className="hero-main ">
          
          <nav className="hero-main-navbar">
            
            <img src={logo} alt="logo"/>
           
            <p className="hero-main-navbar-data">Mariana e Eduardo <span>29 de setembro de 2018</span></p>
          </nav>
        
          <div className="hero-main-text z-depth-4 ">
            <p className="hero-main-text-p flow-text">
              <span className="hero-main-text-p-begin">Queridos amigos,</span>
              Pelas mãos do Divino Mestre nossos destinos se encontraram, estamos muitos felizes em comemorar nossa união nesta cerimônia. 
              Sempre foi um desejo podermos reunir os familiares e os amigos especiais para compartilhar de parte da nossa história e, viver este momento da maior e mais verdadeira alegria, desejo e emoção.
              A presença de cada um vocês é o verdadeiro presente que poderiam nos dar, mas se mesmo assim vocês desejarem nos presentear com algo mais deixamos umas sugestões que seriam maravilhosas para a nossa lua de mel. A Itália foi o destino escolhido para curtimos alguns momentos de paixão e romance, 
              para tanto selecionamos presentes de forma que todos pudessem de alguma forma partilhar ainda mais este sonho.
              <span className="hero-main-text-p-final">Beijos e abraços!</span>
            </p>
          </div>
          <div className="hero-main-img z-depth-4 ">
            
          </div>
        
        </section>
    );
}

export default Hero;