import React, { Component } from 'react';
// import {Container} from './Components/GeneralStyles/styles';
import Footer from './Components/Footer/footer';
import MenuNavigation from './Components/Menu/navigation';
import Header from './Components/Header/header';
import './App.css'

import Routing from './Components/Routing/routing';

// <Footer></Footer>
class App extends Component {
  render() {
    return (
        <div className="Container">
            <Header />
            <MenuNavigation />
            <Routing />
            <Footer />
        </div>
    );
  }
}

export default App;
