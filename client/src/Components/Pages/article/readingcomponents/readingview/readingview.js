import React, { Component } from 'react';
import { Container, Wrapper, Title, Paragraph, Tag, Published } from '../../article/styles';
import ScrollBar from '../scrollbar/';

class ReadingView extends Component {

    render() {
        return (
                <Container>
                    <ScrollBar>
                    </ScrollBar>
                    <Wrapper isReadingView={true}>
                        <Title isReadingView={true}>{this.props.title}</Title>
                        <Tag isReadingView={true}>{this.props.tag}<Published isReadingView={true}>{this.props.published_at}</Published></Tag>
                        <Paragraph isReadingView={true}>{this.props.article}</Paragraph>
                    </Wrapper>
                </Container>
        );
    }

}

export default ReadingView;
