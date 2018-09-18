import React, { Component } from 'react';
import Svg from './Hamburger/svg';
import { Li, StyledLink, Ul, Wrapper } from './styles';


class Navigation extends Component {
    render() {
        return (
            <Wrapper>
                <Svg>
                </Svg>
                <Ul>
                    <Li><StyledLink to='/tema'>Theme</StyledLink></Li>
                    <Li><StyledLink to='/arkiv'>Arkiv</StyledLink></Li>
                    <Li><StyledLink to='/skribenter'>Skribenter</StyledLink></Li>
                </Ul>
            </Wrapper>
        );
    }
}

export default Navigation;
