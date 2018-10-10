import React, { Component } from 'react';
import { Container, Wrapper, Title, Paragraph, LoadingArticle, ArticleInfoWrapper, InfoName, InfoWork, MagazineNumber, Highlighted, Preamble, Thumbnail,ReadingTime } from './styles';
import ScrollBar from '../scrollbar/';
import { FaHeadphones, } from 'react-icons/fa';
import './removeScroll.css';
import Modes from '../modes/';

class ReadingView extends Component {
    state = {
        isHide: false,
        largeFont: true,
    }

    getEstimatedReadingTime(article) {
        const words = article.split(' ').length;
        const minutes = Math.round(words / 200);

        return `${minutes} min`;
    }

    toggleFont = () => {
        this.setState({ largeFont: !this.state.largeFont})
    }

    render() {

        if (this.props.dataHasloaded) {
            const { article, author: { name }, illustrations, thumbnail, magazine: { number }, preamble, published_at, tag, title } = this.props;
            return (
                <Container data-name='article'>
                    <Modes font={this.toggleFont.bind(this)}/>
                    <Thumbnail src={`http://localhost:1337/public/imgs/${thumbnail}`}></Thumbnail>
                    <ScrollBar />
                    <Wrapper>
                        <Title isLarge={this.state.largeFont}>{title}</Title>
                        <ArticleInfoWrapper isLarge={this.state.largeFont}>
                            <InfoWork isLarge={this.state.largeFont}>text: </InfoWork><InfoName>{name}</InfoName>
                            <InfoWork paddingLeft={true}>illustration: </InfoWork><InfoName>{illustrations}</InfoName>
                            <MagazineNumber>
                                <Highlighted>{tag}</Highlighted> publicerad i filter #{number} ( {published_at} )
                                    <br />
                                    <ReadingTime isLarge={this.state.largeFont}>ESTIMERAT LÄSTID: {this.getEstimatedReadingTime(article)}</ReadingTime>
                                <Highlighted style={{ display: 'flex', alignItems: 'center', marginTop: '5px', cursor: 'pointer' }}><FaHeadphones style={{ fill: '#E1AB99', height: '20px', width: '20px', marginRight: '5px'}} />LYSSNA</Highlighted>
                            </MagazineNumber>
                        </ArticleInfoWrapper>
                        <Preamble>
                            <Paragraph isLarge={this.state.largeFont}>{preamble}</Paragraph>
                        </Preamble>
                        <Paragraph isLarge={this.state.largeFont} dangerouslySetInnerHTML={{ __html: article }}></Paragraph>
                    </Wrapper>
                </Container>
            );
        } else {
            return <LoadingArticle />
        }
    }
}

export default ReadingView;
