import React, { Component } from 'react';
import { Container, Wrapper, Mode} from './styles';


class MobileButton extends Component {

    state = {
        toggleOpen: false,
    }

    onClick = ({ target }) => {
        if (target.classList.toggle('active')) {
            [...target.parentNode.children].forEach(x => x.classList.remove('active'));
            target.classList.add('active');
            console.log('2');
        }
    }

    showSocials = (e) => {
        this.setState({ toggleOpen: !this.state.toggleOpen })
    }

    render() {
        return (
            <Container>
                <Wrapper>
                    <Mode onClick={(e) => {this.onClick(e)}}/>
                </Wrapper>
            </Container>
        );
    }

}

export default MobileButton;
