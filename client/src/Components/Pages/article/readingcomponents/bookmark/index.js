import React, { Component } from 'react';
import { Container } from './styles';
import { FaBookmark } from 'react-icons/fa';

class BookMark extends Component {
    state = {
        bookMarkPosition: Math.floor(localStorage.getItem('key')),
        id: '',
    }
    componentDidMount() {
        // localStorage.setItem('key', this.props.bookMarkPosition)
        // this.setState({bookMarkPosition: localStorage.getItem('key')})
        console.log(this.props.bookMarkPosition);
    }

    localStorage = () => {
        localStorage.setItem('key', this.props.bookMarkPosition)
        this.setState({bookMarkPosition: this.props.bookMarkPosition});
        console.log(this.props.bookMarkPosition);
    }

    scroll = () => {
        const p = Math.floor(document.documentElement.scrollTop * (this.props.bookMarkPosition/100))
        window.scrollTo({
            top: p,
            behavior: "instant",
        });
    }


    render() {
        return (
                <Container>
                    <FaBookmark onClick={this.localStorage}/>
                        {
                            !this.props.bookMarkPosition
                            &&
                            this.scroll()
                        }
                </Container>
        );
    }

}

export default BookMark;
