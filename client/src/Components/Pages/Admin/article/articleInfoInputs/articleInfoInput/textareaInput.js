import React from 'react';

import capitalize from '../../../../../../utility/capitalize';
import { TextArea, InputLabel, InputWrapper, Container, InputTitle } from './styles';

const TextAreaInput = ({ title, name, handleInputChange, label }) => (
    <Container>
        <InputLabel>{label}</InputLabel>
        <InputWrapper>
            <InputTitle>{capitalize(title)}</InputTitle>
            <TextArea placeholder={capitalize(`${title}...`)} name={name} onChange={handleInputChange} />
        </InputWrapper>
    </Container>
);

export default TextAreaInput;
