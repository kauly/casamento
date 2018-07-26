import React from "react";
import './Navbar.scss';
import logo from '../../img/heart-shaped-balloon.svg';

const Navbar = () => {
  return (
    <nav className="navbar-main">
      <span className="navbar-main-img">
        <img src={logo} alt="logo"/>
      </span>
      <p className="navbar-main-nome">Mariana e Eduardo  <span className="navbar-main-data">29 de setembro de 2018</span></p>
    </nav>
  );
}

export default Navbar;