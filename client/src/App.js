import React, { Component } from 'react';
// import {Container} from './Components/GeneralStyles/styles';
import Footer from './Components/Footer/footer';
import MenuNavigation from './Components/Menu/navigation';
import Header from './Components/Header/header';
import './App.css'
import Routing from './Components/Routing/routing';
import { Container } from './Components/GeneralStyles/styles.js'

class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <MenuNavigation />
                <Container>
                    <Routing />
                </Container>
            <Footer />
        </div>
    );
  }
}

export default App;
