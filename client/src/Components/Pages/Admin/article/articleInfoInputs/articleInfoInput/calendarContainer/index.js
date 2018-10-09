import React, { Component } from 'react';
import Calendar from 'react-calendar';

import { DateButton, CalendarButtonsContainer } from './styles';

class CalendarContainer extends Component {

    state = {
        showCalendar: false,
        dd: null,
        mm: null,
        yy: null,
    }

    toggleCalendar = () => this.setState({ showCalendar: !this.state.showCalendar });

    onChange = (date, context) => {
        const dd = date.getDate().toString().padStart(2, '0');
        const mm = (date.getMonth() + 1).toString().padStart(2, '0');

        const yy = date.getFullYear().toString().split('').slice(2, 4).join('');

        this.setState({
            dd,
            mm,
            yy,
        });
        context.setDate(date);
    }



    render() {

        const { dd, mm, yy } = this.state;

        return (
            <CalendarButtonsContainer>
                 <DateButton onClick={this.toggleCalendar}>{ dd || 'dag' }</DateButton>
                 <DateButton onClick={this.toggleCalendar}>{ mm || 'månad' }</DateButton>
                 <DateButton onClick={this.toggleCalendar}>{ yy || 'år' }</DateButton>
                 {
                     this.state.showCalendar && <Calendar locale="swe" onChange={(date) => {
                         this.onChange(date, this.props);
                     }} />
                 }
             </CalendarButtonsContainer>
            )
        }
    }


export default CalendarContainer;
