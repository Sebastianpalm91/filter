import React from 'react';

import capitalize from '../../../../../../utility/capitalize';
import { InputWrapper, InputLabel, Input, Container, InputTitle, InputContainer, AuthorsWrapper } from './styles';

const TextInput = ({ isTitle, title, name, handleInputChange, label, amount }) => (
    <Container>
        <InputLabel>{label}</InputLabel>
        <InputWrapper>
            {
                amount > 1 &&
                <AuthorsWrapper>
                    {title.map((title, index) => {
                        return (
                            <InputContainer key={`${title}-${index}`}>
                                <InputTitle>{capitalize(title)}</InputTitle>
                                <Input placeholder={capitalize(`${title}...`)} type='text' name={name[index]} onChange={handleInputChange} />
                            </InputContainer>
                        )
                    })}
                </AuthorsWrapper>
            }
            {
                !amount &&
                    <React.Fragment>
                        <InputTitle>{capitalize(title)}</InputTitle>
                        <Input isTitle={isTitle} placeholder={capitalize(`${title}...`)} type='text' name={name} onChange={handleInputChange} />
                    </React.Fragment>
            }
        </InputWrapper>
    </Container>
);

export default TextInput;
