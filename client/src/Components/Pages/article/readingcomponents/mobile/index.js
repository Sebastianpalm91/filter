import React, { Component } from 'react';
import { Container, Wrapper, IconContainer, SocialsWrapper, Share, Like, BookMark, Fb, Twitter, Insta } from './styles';
class MobileButton extends Component {

    state = {
        toggleOpen: false,
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

    render() {
        return (
            <Container>
                <Wrapper>
                    <IconContainer onClick={(e) => {this.showSocials(); this.onClick(e)}}>
                        <Share />
                            <SocialsWrapper toggleOpen={this.state.toggleOpen}>
                                <Fb toggleOpen={this.state.toggleOpen}/>
                                <Twitter toggleOpen={this.state.toggleOpen}/>
                                <Insta toggleOpen={this.state.toggleOpen}/>
                            </SocialsWrapper>
                    </IconContainer>
                    <BookMark onClick={(e) => {this.onClick(e)}}/>
                    <Like onClick={(e) => {this.onClick(e)}}/>
                </Wrapper>
            </Container>
        );
    }

}

export default MobileButton;
