import React from "react";
import './Hero.scss'
import fotoDois from '../../img/foto_dois.png';
import fotoUm from '../../img/foto_um.png';
import fotoTres from '../../img/foto_tres.png';
import fotoQuatro from '../../img/foto_quatro.png';
import fotoCinco from '../../img/foto_cinco.png';
import fotoSeis from '../../img/foto_seis.png';
import fotoSete from '../../img/foto_sete.png';
import fotoOito from '../../img/foto_oito.png';

const Hero = ({ classes }) => {
    return (
        <main className="hero-main">
            <section className="hero-main-info1">
                <h2>Title</h2>
                <p>Asda fdfdfda okfpmsdá,fs </p>
                <a href="#festa" className="hero-main-info1-link">Vai</a>
            </section>
            <figure className="hero-main-figure1">
                <img src={fotoUm} alt="foto" className="hero-main-figure"/>
            </figure>
            <figure className="hero-main-figure2">
                <img src={fotoDois} alt="foto" className="hero-main-figure"/>
            </figure>
            <figure className="hero-main-figure3">
                <img src={fotoTres} alt="foto" className="hero-main-figure"/>
            </figure>
            <figure className="hero-main-figure4">
                <img src={fotoQuatro} alt="foto" className="hero-main-figure"/>
            </figure>
            <figure className="hero-main-figure5">
                <img src={fotoCinco} alt="foto" className="hero-main-figure"/>
            </figure>
            <figure className="hero-main-figure6">
                <img src={fotoSeis} alt="foto" className="hero-main-figure"/>
            </figure>
            <section className="hero-main-info2">
                <h2>Title</h2>
                <p>Asda fdfdfda okfpmsdá,fs </p>
                <a href="#festa" className="hero-main-info2-link">Vai</a>
            </section>
     
        </main>
    );
}

export default Hero;