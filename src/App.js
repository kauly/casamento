import React, { Component, Fragment } from 'react';
import Navegation from './components/navbar/Navegation';
import Hero from './components/hero/Hero';
import LuaDeMel from './components/luademel/LuaDeMel';
import Festa from './components/festa/Festa';
import './App.css'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navegation />
        <Hero />
        <Festa />
        <LuaDeMel />
      </Fragment>
    );
  }
}

export default App;
