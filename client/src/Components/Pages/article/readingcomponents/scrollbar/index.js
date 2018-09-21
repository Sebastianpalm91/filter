import React, { Component } from 'react';
import { Container, Wrapper, Scrollbar, ScrollbarTrack } from './styles';
import './styles.css';
import ScrollWrapper from 'react-customized-scrollbar'
import './scrollSpy';

class ScrollBar extends Component {

    render() {
        return (
            <Container>
                <div className="scrollContainer">
                    <div className="scrollBar">
                        <div className="inner"></div>
                    </div>
                </div>
            </Container>
        );
    }

}

export default ScrollBar;
