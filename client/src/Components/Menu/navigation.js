import React, { Component } from 'react';
import Svg from './Hamburger/svg';
import { Li, StyledLink, Ul, Wrapper } from './styles';

// <Svg>
// </Svg>

class Navigation extends Component {
    render() {
        return (
            <Wrapper>
                <Ul>
                    <Li><StyledLink to='/latestnumber'>SENASTE NUMRET</StyledLink></Li>
                    <Li><StyledLink to='/categories'>KATEGORIER</StyledLink></Li>
                    <Li><StyledLink to='/arcive'>ARKIVET</StyledLink></Li>
                    <Li><StyledLink to='/blog'>BLOGGEN</StyledLink></Li>
                    <Li><StyledLink to='/about'>OM FILTER</StyledLink></Li>
                    <Li><StyledLink to='/subscription'>BLI PRENUMERANT</StyledLink></Li>
                </Ul>
            </Wrapper>
        );
    }
}

export default Navigation;
