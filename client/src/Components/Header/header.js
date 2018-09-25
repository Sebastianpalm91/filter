import React, { Component } from 'react';
import { Container, Wrapper, Logo } from './styles';



class Header extends Component {
    render() {
        return (
            <Container>
                <Wrapper>
                    <Logo />
                </Wrapper>
            </Container>
        );
    }
}

export default Header;
