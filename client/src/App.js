import React, { Component } from 'react';
import {Container} from './Components/GeneralStyles/styles';
import Footer from './Components/Footer/footer';
import Hamburger from './Components/Menu/navigation';
import './App.css'

class App extends Component {
  render() {
    return (
        <div className="Container">
            <Hamburger></Hamburger>
            <Footer></Footer>
        </div>
    );
  }
}

export default App;
