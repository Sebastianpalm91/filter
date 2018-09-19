import React, { Component } from 'react';

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
        const title = this.props.match.params.title;
        console.log(title);
        return (
            <div>
            </div>
        );
    }

}

export default Article;
