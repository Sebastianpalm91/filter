import React, { Component } from 'react';
import { Container, Wrapper, Title, Paragraph, Tag, Published, LoadingArticle, ArticleInfoWrapper, InfoName, InfoWork, MagazineNumber, Highlighted, Preamble } from './styles';
import ScrollBar from '../scrollbar/';

class ReadingView extends Component {
    state = {
        isHide: false,
    }

    componentDidMount() {
        window.addEventListener('scroll', this.hasScrolled)
    }

    getEstimatedReadingTime(article) {
        const words = article.split(' ').length;
        const minutes = Math.round(words / 200);

        return minutes;
    }

    render() {

        if (this.props.dataHasloaded) {
            const { article, article: { name }, illustrations, magazine: { number }, preamble, published_at, tag, title } = this.props;
            return (
                <Container>
                    <ScrollBar />
                    <Wrapper>
                        <Title>{this.props.title}</Title>
                        <ArticleInfoWrapper>
                            <InfoWork>text: </InfoWork><InfoName>{name}</InfoName>
                            <InfoWork paddingLeft={true}>illustration: </InfoWork><InfoName>{illustrations}</InfoName>
                            <MagazineNumber>
                                <Highlighted>{tag}</Highlighted> publicerad i filter #{number} ( {published_at} )
                            </MagazineNumber>
                        </ArticleInfoWrapper>
                        <Preamble>
                            <Paragraph>{preamble}</Paragraph>
                        </Preamble>
                        <Paragraph dangerouslySetInnerHTML={{ __html: article }}>
                        </Paragraph>
                    </Wrapper>
                </Container>
            );
        } else {
            return <LoadingArticle />
        }
    }
}

export default ReadingView;
