import React, { Component } from 'react';
// import {Container} from './Components/GeneralStyles/styles';
import './assets/fonts/Fonts.css';
import Footer from './Components/Footer/footer';
import MenuNavigation from './Components/Menu/navigation';
import Header from './Components/Header/header';
import './App.css'
import Routing from './Components/Routing/routing';
import HamburgerMenu from './Components/Menu/Hamburger/menuWrapper';
import { Container } from './Components/GeneralStyles/styles.js'
class App extends Component {
  render() {
    return (
        <div>
            <HamburgerMenu />
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
