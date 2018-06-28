import React, { Component, Fragment } from 'react';
import Navegation from './components/navbar/Navegation';
import Hero from './components/hero/Hero';
import Noivos from './components/noivos/Noivos';
import Festa from './components/festa/Festa';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navegation />
        <Hero />
        <Noivos />
        <Festa />
      </Fragment>
    );
  }
}

export default App;
