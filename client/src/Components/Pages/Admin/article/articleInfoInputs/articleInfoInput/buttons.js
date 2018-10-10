import React, { Component } from 'react';
import axios from 'axios';

import capitalize from '../../../../../../utility/capitalize';
import endpoint from '../../../../../../settings.js';

import { ArticleButton, InputWrapper, Container, InputTitle, InputLabel, ButtonsContainer } from './styles';

class Buttons extends Component {

    state = {
        data: [],
    }

    async componentDidMount() {
        const { data } = await axios.get(`${endpoint.uri}/admin/articles/${this.props.type}`);
        this.setState({
            data
        });
    }

    onClick = ({ target }) => {
        if (target.classList.toggle('active')) {
            [...target.parentNode.children].forEach(x => x.classList.remove('active'));
            target.classList.add('active');
        }
    }

    render() {

        const { label, title, handleClick, name } = this.props;

        return (
            <Container>
                <InputLabel>{capitalize(label)}</InputLabel>
                <InputWrapper>
                    <InputTitle>{capitalize(title)}</InputTitle>
                    <ButtonsContainer>
                    {
                        this.state.data.map(({ _id, label }) => {
                            return <ArticleButton onClick={ (e) => { this.onClick(e); handleClick(e) ; }} name={name} data-value={label} key={_id} >{label}</ArticleButton>
                        })
                    }
                    </ButtonsContainer>
                </InputWrapper>
            </Container>
        );
    }

}

export default Buttons;
