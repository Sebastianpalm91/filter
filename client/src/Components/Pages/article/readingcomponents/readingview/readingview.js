import React, { Component } from 'react';
import { Container, Wrapper, Title, Paragraph } from '../../article/styles';


class ReadingView extends Component {

    render() {
        return (
            <Container>
                <Wrapper>
                    <Title isReadingView={true}>{this.props.title}</Title>
                    <Paragraph isReadingView={true}>{this.props.article}</Paragraph>
                </Wrapper>
            </Container>
        );
    }

}

export default ReadingView;
