import React, { Component } from 'react';
import { Container, Wrapper, Logo, StyledLink } from './styles';
import HamburgerMenu from '../Menu/Hamburger/menuWrapper';


class Header extends Component {
    render() {
        return (
            <Container>
                <Wrapper>
                    <StyledLink to='/'><Logo  alt="Logo-Hem"></Logo></StyledLink>
                </Wrapper>
            </Container>
        );
    }
}

export default Header;
