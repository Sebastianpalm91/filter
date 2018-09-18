import React, { Component } from 'react';
import Svg from './Hamburger/svg';
import { Wrapper } from './Hamburger/styles';

class Navigation extends Component {
    render() {
        return (
            <Wrapper>
                <Svg></Svg>
            </Wrapper>
        );
    }
}

export default Navigation;
