import React, { Component, Fragment } from 'react';
import Hero from '../hero/Hero';
import LuaDeMel from '../luademel/LuaDeMel';
import Festa from '../festa/Festa';
import './App.scss'
import Roteiros from '../../utils/roteiros';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roteiros: Roteiros
    }
    console.log(this.state.roteiros)
  }


  
  
  render() {
    return (
      <Fragment>
        <Hero />
        <Festa />
        <LuaDeMel roteiros={this.state.roteiros}/>
      </Fragment>
    );
  }
}

export default App;
