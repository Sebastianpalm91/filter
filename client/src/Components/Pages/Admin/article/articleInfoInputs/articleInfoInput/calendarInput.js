import React from 'react';

import { InputLabel, InputWrapper, Container, InputTitle } from './styles';

import capitalize from '../../../../../../utility/capitalize';
import CalendarContainer from './calendarContainer';

const CalendarInput = (props) => (
    <Container>
        <InputLabel>{props.label}</InputLabel>
        <InputWrapper>
            <InputTitle>{capitalize(props.title)}</InputTitle>
            <CalendarContainer {...props} />
        </InputWrapper>
    </Container>
);

export default CalendarInput;
