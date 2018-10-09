import React, { Component } from 'react';
import { Container, Wrapper, Logo, StyledLink, Back } from './styles';

class Header extends Component {
    render() {
        return (
            <Container>
                <StyledLink to='/'><Back alt="Back"></Back></StyledLink>
                <Wrapper>
                    <StyledLink to='/'><Logo  alt="Logo-Hem"></Logo></StyledLink>
                </Wrapper>
            </Container>
        );
    }
}

export default Header;
