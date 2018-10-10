import React, { Component } from 'react';
import { Container, Wrapper, Title, Paragraph, LoadingArticle, ArticleInfoWrapper, InfoName, InfoWork, MagazineNumber, Highlighted, Preamble, Thumbnail,ReadingTime } from './styles';
import ScrollBar from '../scrollbar/';
import { FaHeadphones, } from 'react-icons/fa';
import './removeScroll.css';

class ReadingView extends Component {
    state = {
        isHide: false,
    }

    getEstimatedReadingTime(article) {
        const words = article.split(' ').length;
        const minutes = Math.round(words / 200);

        return `${minutes} min`;
    }

    render() {

        if (this.props.dataHasloaded) {
            const { article, author: { name }, illustrations, thumbnail, magazine: { number }, preamble, published_at, tag, title } = this.props;
            return (
                <Container data-name='article'>
                    <Thumbnail src={`http://localhost:1337/public/imgs/${thumbnail}`}></Thumbnail>
                    <ScrollBar />
                    <Wrapper>
                        <Title>{title}</Title>
                        <ArticleInfoWrapper>
                            <InfoWork>text: </InfoWork><InfoName>{name}</InfoName>
                            <InfoWork paddingLeft={true}>illustration: </InfoWork><InfoName>{illustrations}</InfoName>
                            <MagazineNumber>
                                <Highlighted>{tag}</Highlighted> publicerad i filter #{number} ( {published_at} )
                                    <br />
                                    <ReadingTime>ESTIMERAT LÄSTID: {this.getEstimatedReadingTime(article)}</ReadingTime>
                                <Highlighted style={{ display: 'flex', alignItems: 'center', marginTop: '5px', cursor: 'pointer' }}><FaHeadphones style={{ fill: '#E1AB99', height: '20px', width: '20px', marginRight: '5px'}} />LYSSNA</Highlighted>
                            </MagazineNumber>
                        </ArticleInfoWrapper>
                        <Preamble>
                            <Paragraph>{preamble}</Paragraph>
                        </Preamble>
                        <Paragraph dangerouslySetInnerHTML={{ __html: article }}></Paragraph>
                    </Wrapper>
                </Container>
            );
        } else {
            return <LoadingArticle />
        }
    }
}

export default ReadingView;
