import React, { Component } from 'react';
import { Container, ScrollBarStyles, ScrollContainer, Inner } from './styles';
import BookMark from '../bookmark/'


class ScrollBar extends Component {
    state = {
        scrollPercentage: 0
    }

    onScroll = () => {
        const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
        const n = scrollTop / (scrollHeight - clientHeight);
        this.setState({ scrollPercentage: n * 100 });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
    }

    render() {
        return (
            <Container>
                <ScrollContainer>
                    <BookMark bookMarkPosition={this.state.scrollPercentage}></BookMark>
                    <ScrollBarStyles>
                        <Inner
                            style={{
                                height: `${this.state.scrollPercentage}%`
                            }}>
                        </Inner>
                    </ScrollBarStyles>
                </ScrollContainer>
            </Container>
        );
    }

}

export default ScrollBar;
