import React, { Component } from 'react';
import { Container, ScrollBarStyles, ScrollContainer, Inner, BookMarkShareIcons, IconContainer, FacebookIcon, TwitterIcon, SocialContainer, ShareButton, SocialButton, Dot, SocialWrapper } from './styles';
// import BookMark from '../bookmark/'
import { FaBookmark, FaHeart, FaShareSquare, FaFacebookSquare, FaTwitterSquare, FaInstagram } from 'react-icons/fa';


class ScrollBar extends Component {
    state = {
        scrollPercentage: 0,
        bookMarkPosition: localStorage.getItem('key'),
        toggleOpen: false,
        hideBar: false,
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
        window.addEventListener('scroll', this.showBar);
        if (this.state.bookMarkPosition == localStorage.getItem('key')) {
            this.scroll();
        };
        this.onScroll();
        this.showBar();
    }

    showBar = () => {
        if (this.state.scrollPercentage >= 4) {
            this.setState({ hideBar: true })
        } else (
            this.setState({ hideBar: false })
        )
    }

    shareButtonOpen = () => {
        this.setState({ toggleOpen: !this.state.toggleOpen })
    }

    scroll = () => {
        const p = Math.floor(document.documentElement.scrollTop * (this.state.bookMarkPosition/10))
        window.scrollTo({
            top: p,
            behavior: "instant",
        });
    }

    onScroll = () => {
        const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
        const n = scrollTop / (scrollHeight - clientHeight);
        this.setState({ scrollPercentage: Math.floor(n * 100)});
    }

    localStorage = () => {
        localStorage.setItem('key', this.state.scrollPercentage)
        this.setState({bookMarkPosition: this.state.scrollPercentage});
    }

    render() {
        return (
            <Container>
                    <ScrollContainer showBar={this.state.hideBar}>
                        <IconContainer  onClick={this.shareButtonOpen}>
                            <SocialContainer>
                            <ShareButton>
                                <FaShareSquare />
                            </ShareButton>
                                    <SocialWrapper toggleOpen={this.state.toggleOpen}>
                                        <SocialButton toggleOpen={this.state.toggleOpen}>
                                            <FaFacebookSquare />
                                        </SocialButton>

                                        <SocialButton toggleOpen={this.state.toggleOpen}>
                                            <FaTwitterSquare />
                                        </SocialButton>

                                        <SocialButton toggleOpen={this.state.toggleOpen}>
                                            <FaInstagram />
                                        </SocialButton>
                                    </SocialWrapper>
                            </SocialContainer>
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
                            <Dot />
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
