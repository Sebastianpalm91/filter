import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {Container, Wrapper, Ul, Li, StyledLink, Logo, FacebookLogo, TwitterLogo, InstaLogo, SocialIconContainer} from './styles';

class Footer extends Component {
    render () {
        return (
            <Container>
                <Wrapper>
                    <Ul>
                        <Li><StyledLink to='/latestnumber'>Vill du skriva för Filter?</StyledLink></Li>
                        <Li><StyledLink to='/categories'>Annons och marknad</StyledLink></Li>
                        <Li><StyledLink to='/arcive'>Hjälpcenter</StyledLink></Li>
                        <Logo />
                        <Li><StyledLink to='/blog'>Allmänna villkor</StyledLink></Li>
                        <Li><StyledLink to='/about'>Sekretesspolicy</StyledLink></Li>
                        <Li><StyledLink to='/subscription'>Cookiepolicy</StyledLink></Li>
                    </Ul>
                    <SocialIconContainer>
                        <FacebookLogo />
                        <TwitterLogo />
                        <InstaLogo />
                    </SocialIconContainer>
                </Wrapper>
            </Container>
        )
    }
}

export default Footer;
