import React from "react";
import './Hero.scss'

const Hero = ({ classes }) => {
    return (
        <section className="hero-main ">
          <div className="hero-main-text z-depth-4 ">
            <p className="hero-main-text-p flow-text">
            <span className="hero-main-text-p-begin">Queridos amigos,</span>
            Estamos muito felizes em comemorar nossa união. Sempre tivemos vontade de reunir amigos e familiares, compartilhando nossa história e nossa sorte de ter encontrado um ao outro, temos 
            certeza que será um dia muito especial para todos nós!
            Definimos que nossa Lua de Mel, será na Itália, passando por Roma, Florenca, Siena, Verona, Veneza, Pisa e Milão. 
            O presente que gostaríamos de ganhar de vocês, além da presença em nossa festa, são as cotas de viagem. Separamos formas diversificadas e divertidas para que todos possam participar desta viagem conosco! Desde já agradecemos a sua contribuição!
            <span className="hero-main-text-p-final">Beijos e abraços!</span>
           
            </p>
          </div>
          <div className="hero-main-img z-depth-4 ">
      
          </div>
        </section>
    );
}

export default Hero;