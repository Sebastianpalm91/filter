import React, { Component } from 'react';
import { Title, Paragraph, Container, Wrapper, Published, Tag } from './styles';

class Article extends Component {

    state = {
        article: {}
    }

    getEstimatedReadingTime(article) {
        const words = article.split(' ').length;
        const minutes = Math.round(words / 200);

        return minutes;
    }

    bookMark({ target }) {

    }

    render() {
        return (
            <Container>
                <Wrapper>
                    <Title>{this.props.title}</Title>
                    <Tag>{this.props.tag}<Published>{this.props.published_at}</Published></Tag>
                    <Paragraph>{this.props.article}</Paragraph>
                </Wrapper>
            </Container>
        );
    }

}

export default Article;
