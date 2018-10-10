import React, { Component } from 'react';
import { Container, Wrapper, Logo, StyledLink, Back, LoginSearchWrapper, H3 } from './styles';

class Header extends Component {
    state = {
        loggedIn: false,
    }

    onClick = () => {
        this.setState({ loggedIn: !this.state.loggedIn})
    }
    
    render() {
        return (
            <Container>
                <StyledLink to='/'><Back alt="Back"></Back></StyledLink>
                <Wrapper>
                    <StyledLink to='/'><Logo  alt="Logo-Hem"></Logo></StyledLink>
                </Wrapper>
                <LoginSearchWrapper><H3>Logga in</H3></LoginSearchWrapper>
            </Container>
        );
    }
}

export default Header;
