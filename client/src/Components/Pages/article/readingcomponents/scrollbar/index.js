import React, { Component } from 'react';
import { Container, ScrollBarStyles, ScrollContainer, Inner, IconContainer, Dot, SocialWrapper, BookMark, Share, Like, Fb, Insta, Twitter, } from './styles';
// import BookMark from '../bookmark/'

class ScrollBar extends Component {

    storage = window.localStorage;

    state = {
        scrollPercentage: 0,
        toggleOpen: false,
        hideBar: true,
        }

    componentDidMount() {
        let bookMarkPosition = parseFloat(localStorage.getItem('position'));

        if (bookMarkPosition) {
            bookMarkPosition = bookMarkPosition * 1.38;
            const position = document.documentElement.scrollHeight * bookMarkPosition;
            setTimeout(() => {
               window.scrollTo({
                   top: position,
                   behavior: 'smooth'
               });
           },500);

        }

        window.addEventListener('scroll', this.setScrollPos);
        window.addEventListener('scroll', this.showBar);
    }


    savePosition = e => {

        const { scrollTop, scrollHeight } = document.documentElement;

        const position = scrollTop / scrollHeight;

        this.storage.setItem('position', position);

    }

    setScrollPos = e => {
        const { scrollTop } = document.documentElement;

        const tmp = document.querySelector('section').offsetHeight;
        const offset = document.querySelector('section h1').offsetTop;

        const position = (scrollTop - offset) / tmp;

        this.setState({
            scrollPercentage: position,
        });
    }

    showBar = () => {
        if (document.documentElement.scrollTop >= document.querySelector('section h1').offsetTop) {
            this.setState({ hideBar: false })
        } else (
            this.setState({ hideBar: true })
        )
    }

    onClick = ({ target }) => {
        if (target.classList.toggle('active')) {
            [...target.parentNode.children].forEach(x => x.classList.remove('active'));
            target.classList.add('active');
        }
    }

    showSocials = (e) => {
        this.setState({ toggleOpen: !this.state.toggleOpen })
    }


    render() {
        const pos = (this.state.scrollPercentage)  * 200;
        return (
            <Container>
                    <ScrollContainer hideBar={this.state.hideBar}>
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
                                    height: `${pos}%`
                                }}>
                            </Inner>
                            <Dot />
                        </ScrollBarStyles>
                            <BookMark onClick={(e) => {this.onClick(e); this.savePosition()}}/>
                    </ScrollContainer>
            </Container>
        );
    }

}

export default ScrollBar;
