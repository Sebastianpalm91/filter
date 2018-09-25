import React, { Component } from 'react';
import { Container } from './styles';
import { FaBookmark } from 'react-icons/fa';

class BookMark extends Component {
    state = {
        bookMarkPosition: '',
        id: '',
    }
    localStorage = () => {
        localStorage.setItem('key', this.props.bookMarkPosition)
        this.setState({bookMarkPosition: window.localStorage});
        console.log(localStorage.getItem('key'));
    }
    componentDidMount() {
        console.log(localStorage.getItem('key'));
    }
    // scroll = () => {
    //     window.scrollTo({
    //         top: 600,
    //         behavior: "instant"
    //     });
    //     console.log(this.props.bookMarkPosition);
    // }

    render() {
        return (
                <Container>
                    <FaBookmark onClick={this.localStorage}/>
                </Container>
        );
    }

}

export default BookMark;
