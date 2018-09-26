import React, { Component } from 'react';
import axios from 'axios';
import { Container, BookVueButton, Wrapper } from './styles';
import Article from './article';
import endpoint from '../../../settings';
import ReadingView from './readingcomponents/readingview/readingview';

class ArticleContainer extends Component {

    state = {
        article: {},
        readingview: false
    }

    componentDidMount() {
        this.getData();

    }

    async getData() {

        const title = this.props.match.params.title.replace(' ', '-');

        const { data } = await axios.get(`${endpoint.uri}/articles/${title}`);

        console.log(data);

        this.setState({
            article: data
        })

    }

    async bookView() {
        this.setState({
            readingview: !this.state.readingview
        })
    }

    render() {

        const { article } = this.state;

        return (
            <Container>
                <Wrapper>
                 {this.state.readingview ? <ReadingView {...article}/>: <Article {...article}/>}
                </Wrapper>
                <BookVueButton onClick={this.bookView.bind(this)}>Reading View</BookVueButton>
            </Container>
        );
    }

}

export default ArticleContainer;
