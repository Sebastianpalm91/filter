import React from 'react';

import { InputLabel, InputWrapper, Container, InputTitle } from './styles';

import capitalize from '../../../../../../utility/capitalize';
import CalendarContainer from './calendarContainer';

const CalendarInput = ({label, title, setDate}) => (
    <Container>
        <InputLabel>{label}</InputLabel>
        <InputWrapper>
            <InputTitle>{capitalize(title)}</InputTitle>
            <CalendarContainer setDate={setDate} />
        </InputWrapper>
    </Container>
);

export default CalendarInput;
