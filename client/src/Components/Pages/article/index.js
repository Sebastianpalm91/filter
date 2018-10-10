import React, { Component } from 'react';
import axios from 'axios';
import { Container, Wrapper } from './styles';
import endpoint from '../../../settings';
import ReadingView from './readingcomponents/readingview/readingview';

class ArticleContainer extends Component {
    state = {
        article: {},
        dataHasloaded: false,
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        const title = this.props.match.params.title.replace('-', ' ');
        const { data } = await axios.get(`${endpoint.uri}/articles/${title}`);
        this.setState({
            article: data,
            dataHasloaded: true,
        })
    }

    render() {
        const { article, dataHasloaded } = this.state;
        return (
            <Container>
                <Wrapper>
                    <ReadingView dataHasloaded={dataHasloaded} {...article}/>
                </Wrapper>
            </Container>
        );
    }
}

export default ArticleContainer;
