import React, { Component } from 'react';
import { Container, Wrapper, Title, Paragraph, LoadingArticle, ArticleInfoWrapper, InfoName, InfoWork, MagazineNumber, Highlighted, Preamble, Thumbnail, ReadingTime, MobileContainer, MobileWrapper, IconContainer, SocialsWrapper, Margins, Share, Like, BookMark, Fb, Twitter, Insta, InfoText } from './styles';
import ScrollBar from '../scrollbar/';
import { FaHeadphones, } from 'react-icons/fa';
import './removeScroll.css';
import Modes from '../modes/';
import endpoint from '../../../../../settings';

import './styles.css';

class ReadingView extends Component {
    state = {
        isHide: false,
        largeFont: true,
        NightMode: true,
        ImgPreviewSrc: '',
        toggleOpen: false,
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
     }

    onClick = ({ target }) => {
        if (target.classList.toggle('active')) {
            [...target.parentNode.children].forEach(x => x.classList.remove('active'));
            target.classList.add('active');
            console.log('2');
        }
    }

    toggleFont = () => {
        this.setState({ largeFont: !this.state.largeFont})
    }

    toggleNightMode = () => {
        this.setState({ NightMode: !this.state.NightMode })
    }

    showSocials = (e) => {
        this.setState({ toggleOpen: !this.state.toggleOpen })
    }

    render() {
        if (this.props.dataHasloaded) {
            console.log(this.props);
            const { article, author: { name }, illustrations, thumbnail, magazine: { number }, preamble, published_at, tag, title } = this.props;
            return (
                <Container nightmode={this.state.NightMode} data-name='article'>
                    <Modes nightmode={this.toggleNightMode.bind(this)} font={this.toggleFont.bind(this)}/>
                    <Thumbnail src={`${endpoint.imgPath}/imgs/${thumbnail}`}></Thumbnail>
                    <ScrollBar />
                    <Wrapper>
                        <Title nightmode={this.state.NightMode} isLarge={this.state.largeFont}>{title}</Title>
                        <ArticleInfoWrapper nightmode={this.state.NightMode} isLarge={this.state.largeFont}>
                            <InfoText>
                                <InfoWork nightmode={this.state.NightMode} isLarge={this.state.largeFont}>text: </InfoWork><InfoName nightmode={this.state.NightMode}>{name}</InfoName>
                            </InfoText>
                            <InfoText>
                                <InfoWork nightmode={this.state.NightMode} paddingLeft={true}>illustration: </InfoWork><InfoName nightmode={this.state.NightMode}>{illustrations}</InfoName>
                            </InfoText>
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
                    <Margins>
                        <MobileContainer nightmode={this.state.NightMode}>
                            <MobileWrapper>
                                <IconContainer onClick={(e) => {this.showSocials(); this.onClick(e)}}>
                                    <Share />
                                        <SocialsWrapper toggleOpen={this.state.toggleOpen}>
                                            <Fb nightmode={this.state.NightMode} toggleOpen={this.state.toggleOpen}/>
                                            <Twitter nightmode={this.state.NightMode} toggleOpen={this.state.toggleOpen}/>
                                            <Insta nightmode={this.state.NightMode} toggleOpen={this.state.toggleOpen}/>
                                        </SocialsWrapper>
                                </IconContainer>
                                <BookMark onClick={(e) => {this.onClick(e)}}/>
                                <Like onClick={(e) => {this.onClick(e)}}/>
                            </MobileWrapper>
                        </MobileContainer>
                    </Margins>
                </Container>
            );
        } else {
            return <LoadingArticle />
        }
    }
}

export default ReadingView;
