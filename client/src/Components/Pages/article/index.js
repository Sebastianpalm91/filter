import React, { Component } from 'react';
import axios from 'axios';

import Article from './article';
import endpoint from '../../../settings';


class ArticleContainer extends Component {

    state = {
        article: {}
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

    render() {

        const { article } = this.state;

        return (
            <div>
                {
                    Object.keys(article).length > 0 ? <Article { ...article } /> : 'Nope'
                }

            </div>
        );
    }

}

export default ArticleContainer;
