import React, { Component } from 'react';
import { Container, ScrollBarStyles, ScrollContainer, Inner, IconContainer, Dot, SocialWrapper, BookMark, Share, Like, Fb, Insta, Twitter, } from './styles';
// import BookMark from '../bookmark/'

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
        if (this.state.bookMarkPosition === localStorage.getItem('key')) {
            this.scroll();
        };
        this.onScroll();
        this.showBar();
    }

    showBar = () => {
        if (this.state.scrollPercentage >= 35) {
            this.setState({ hideBar: true })
        } else (
            this.setState({ hideBar: false })
        )
    }

    onClick = ({ target }) => {
        if (target.classList.toggle('active')) {
            [...target.parentNode.children].forEach(x => x.classList.remove('active'));
            target.classList.add('active');
            console.log('2');
        }
    }

    showSocials = (e) => {
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
                        <IconContainer onClick={(e) => {this.showSocials(); this.onClick(e)}}>
                            <Share />
                                    <SocialWrapper toggleOpen={this.state.toggleOpen}>
                                            <Fb toggleOpen={this.state.toggleOpen}/>
                                            <Twitter toggleOpen={this.state.toggleOpen}/>
                                            <Insta toggleOpen={this.state.toggleOpen}/>
                                    </SocialWrapper>
                        </IconContainer>
                        <Like onClick={(e) => {this.onClick(e)}}/>
                        <ScrollBarStyles>
                            <Inner
                                style={{
                                    height: `${this.state.scrollPercentage}%`
                                }}>
                            </Inner>
                            <Dot />
                        </ScrollBarStyles>
                            <BookMark onClick={(e) => {this.onClick(e); this.localStorage()}}/>
                    </ScrollContainer>
            </Container>
        );
    }

}

export default ScrollBar;
