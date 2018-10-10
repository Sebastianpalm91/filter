import React, { Component } from 'react';
import { Container, Wrapper, Title, Paragraph, LoadingArticle, ArticleInfoWrapper, InfoName, InfoWork, MagazineNumber, Highlighted, Preamble, Thumbnail,ReadingTime } from './styles';
import ScrollBar from '../scrollbar/';
import { FaHeadphones, } from 'react-icons/fa';
import './removeScroll.css';
import Modes from '../modes/';
import MobileIcons from '../mobile';

import './styles.css';

class ReadingView extends Component {
    state = {
        isHide: false,
        largeFont: true,
        NightMode: true,
        ImgPreviewSrc: ''
    }

    componentWillMount() {
        console.log(this.props.thumbnail);
        this.previewImage();

    }

    getEstimatedReadingTime(article) {
        const words = article.split(' ').length;
        const minutes = Math.round(words / 200);

        return `${minutes} min`;
    }

    previewImage = () => {
         const reader = new FileReader();
         reader.onload = e => {
             this.setState({
                 ImgPreviewSrc: e.target.result,
             })
         };
         reader.readAsDataURL(this.props.thumbnail);
     }

    toggleFont = () => {
        this.setState({ largeFont: !this.state.largeFont})
    }

    toggleNightMode = () => {
        this.setState({ NightMode: !this.state.NightMode })
    }

    render() {
        if (this.props.dataHasloaded) {
            console.log(this.props);
            const { article, author: { name }, illustrations, thumbnail, magazine: { number }, preamble, published_at, tag, title, isPreview } = this.props;
            return (
                <Container nightmode={this.state.NightMode} data-name='article'>
                    <Modes nightmode={this.toggleNightMode.bind(this)} font={this.toggleFont.bind(this)}/>
                    <Thumbnail src={ !isPreview ? `http://localhost:1337/public/imgs/${thumbnail}` : this.props.ImgPreviewSrc }></Thumbnail>
                    <ScrollBar />
                    <Wrapper>
                        <Title nightmode={this.state.NightMode} isLarge={this.state.largeFont}>{title}</Title>
                        <ArticleInfoWrapper nightmode={this.state.NightMode} isLarge={this.state.largeFont}>
                            <InfoWork nightmode={this.state.NightMode} isLarge={this.state.largeFont}>text: </InfoWork><InfoName nightmode={this.state.NightMode}>{name}</InfoName>
                            <InfoWork nightmode={this.state.NightMode} paddingLeft={true}>illustration: </InfoWork><InfoName nightmode={this.state.NightMode}>{illustrations}</InfoName>
                            <MagazineNumber nightmode={this.state.NightMode}>
                                <Highlighted>{tag}</Highlighted> publicerad i filter #{number} ( {published_at} )
                                    <br />
                                    <ReadingTime isLarge={this.state.largeFont}>ESTIMERAT LÄSTID: {this.getEstimatedReadingTime(article)}</ReadingTime>
                                <Highlighted style={{ display: 'flex', alignItems: 'center', marginTop: '5px', cursor: 'pointer' }}><FaHeadphones style={{ fill: '#E1AB99', height: '20px', width: '20px', marginRight: '5px'}} />LYSSNA</Highlighted>
                            </MagazineNumber>
                        </ArticleInfoWrapper>
                        <Preamble>
                            <Paragraph nightmode={this.state.NightMode} isLarge={this.state.largeFont}>{preamble}</Paragraph>
                        </Preamble>
                        <Paragraph nightmode={this.state.NightMode} isLarge={this.state.largeFont} dangerouslySetInnerHTML={{ __html: article }}></Paragraph>
                    </Wrapper>
                    <MobileIcons nightmode={this.toggleNightMode.bind(this)}/>
                </Container>
            );
        } else {
            return <LoadingArticle />
        }
    }
}

export default ReadingView;
