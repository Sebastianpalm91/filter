import React, { Component } from 'react';
import { Container, Wrapper, Socials, } from './styles';
import { FaBookmark, FaHeart, FaShareSquare, FaFacebookSquare, FaTwitterSquare, FaInstagram } from 'react-icons/fa';


class MobileButton extends Component {

    render() {
        return (
            <Container>
                <Wrapper>
                    <Socials>
                        <FaShareSquare style={{height: '20px', width: '20px'}}/>
                    </Socials>
                    <Socials>
                        <FaHeart style={{height: '20px', width: '20px'}}/>
                    </Socials>
                    <Socials>
                        <FaBookmark style={{height: '20px', width: '20px'}}/>
                    </Socials>
                </Wrapper>
            </Container>
        );
    }

}

export default MobileButton;
