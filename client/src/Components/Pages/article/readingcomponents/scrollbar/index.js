import React, { Component } from 'react';
import { Container, ScrollBarStyles, ScrollContainer, Inner, BookMarkShareIcons, IconContainer } from './styles';
// import BookMark from '../bookmark/'
import { FaBookmark, FaHeart, FaShareSquare } from 'react-icons/fa';


class ScrollBar extends Component {
    state = {
        scrollPercentage: 0,
        bookMarkPosition: Math.floor(localStorage.getItem('key')),
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
        console.log(this.state.bookMarkPosition);
    }

    onScroll = () => {
        const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
        const n = scrollTop / (scrollHeight - clientHeight);
        this.setState({ scrollPercentage: Math.floor(n * 100)});
    }

    localStorage = () => {
        localStorage.setItem('key', this.state.scrollPercentage)
        this.setState({bookMarkPosition: this.state.scrollPercentage});
        console.log(this.state.scrollPercentage);
    }

    scroll = () => {
        const p = Math.floor(document.documentElement.scrollTop * (this.state.bookMarkPosition/100))
        window.scrollTo({
            top: p,
            behavior: "instant",
        });
    }

    // componentDidMount() {
    //     window.addEventListener('scroll', this.onScroll);
    // }

    // <BookMark bookMarkPosition={this.state.scrollPercentage} />
    render() {
        return (
            <Container>
                <ScrollContainer>
                    <IconContainer>
                        <FaShareSquare />
                    </IconContainer>
                    <BookMarkShareIcons>
                        <FaHeart />
                    </BookMarkShareIcons>
                    <ScrollBarStyles>
                        <Inner
                            style={{
                                height: `${this.state.scrollPercentage}%`
                            }}>
                        </Inner>
                        {
                            !this.state.scrollPercentage
                            &&
                            this.scroll()
                        }
                    </ScrollBarStyles>
                    <BookMarkShareIcons onClick={this.localStorage}>
                        <FaBookmark />
                    </BookMarkShareIcons>
                </ScrollContainer>
            </Container>
        );
    }

}

export default ScrollBar;
