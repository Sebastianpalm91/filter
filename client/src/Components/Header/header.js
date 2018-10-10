import React, { Component } from 'react';
import { Container, Wrapper, Logo, StyledLink, Back, LoginSearchWrapper, H3, SearchIcon, LoggedInWrapper, H4, Border, Liked } from './styles';
import Modes from '../Pages/article/readingcomponents/modes/';
class Header extends Component {
    state = {
        loggedIn: false,
    }

    toggle = () => {
        this.setState(state => ({ loggedIn: !this.state.loggedIn}));
    }

    render() {
        return (
            <Container>
                <StyledLink to='/'><Back alt="Back"></Back></StyledLink>
                <Wrapper>
                    <StyledLink to='/'><Logo  alt="Logo-Hem"></Logo></StyledLink>
                </Wrapper>
                <Modes />
                {
                    !this.state.loggedIn ?
                    <LoginSearchWrapper>
                        <SearchIcon />
                        <H3 onClick={() => {this.toggle(this)}}>Logga in</H3>
                    </LoginSearchWrapper>
                    :
                        <LoggedInWrapper displaythis={this.state.loggedIn}>
                            <H4 onClick={() => {this.toggle()}}>Gillade artiklar </H4><Liked />
                            <Border />
                            <H4>Läshistorik</H4>
                            <Border />
                            <H4>Mina sidor</H4>
                            <Border />
                            <SearchIcon />
                            <H4>Joakim Jakobsson</H4>
                        </LoggedInWrapper>
                }
            </Container>
        );
    }
}

export default Header;
