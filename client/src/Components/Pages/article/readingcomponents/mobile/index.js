import React, { Component } from 'react';
import { Container, Wrapper, Socials, } from './styles';
import { FaBookmark, FaHeart, FaShareSquare, FaFacebookSquare, FaTwitterSquare, FaInstagram } from 'react-icons/fa';


class MobileButton extends Component {

    render() {
        return (
            <Container>
                <Wrapper>
                    <Socials>
                        <FaShareSquare />
                    </Socials>
                    <Socials>
                        <FaHeart />
                    </Socials>
                    <Socials>
                        <FaBookmark />
                    </Socials>
                </Wrapper>
            </Container>
        );
    }

}

export default MobileButton;
