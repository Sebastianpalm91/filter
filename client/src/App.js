import React, { Component } from 'react';
// import {Container} from './Components/GeneralStyles/styles';
import Footer from './Components/Footer/footer';
import Hamburger from './Components/Menu/navigation';
import './App.css'

import Routing from './Components/Routing/routing';


class App extends Component {
  render() {
    return (
        <div className="Container">
            <Hamburger></Hamburger>
            <Routing />
            <Footer></Footer>
        </div>
    );
  }
}

export default App;
