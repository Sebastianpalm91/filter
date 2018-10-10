import React, { Component } from 'react';
import Calendar from 'react-calendar';

import { DateButton, CalendarButtonsContainer, MagazineNumber } from './styles';

class CalendarContainer extends Component {

    state = {
        showCalendar: false,
        dd: null,
        mm: null,
        yy: null,
        magazineNumber: '',
    }

    toggleCalendar = () => this.setState({ showCalendar: !this.state.showCalendar });

    handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(value);
        if (isNaN(value) && isNaN(parseInt(value, 10)))
            return;

        this.setState({
            [name]: `#${value}`
        });

        this.props.handleInputChange(e);

    }

    onChange = (date, context) => {
        const dd = date.getDate().toString().padStart(2, '0');
        const mm = (date.getMonth() + 1).toString().padStart(2, '0');

        const yy = date.getFullYear().toString().split('').slice(2, 4).join('');

        this.setState({
            dd,
            mm,
            yy,
        });
    }



    render() {

        const { dd, mm, yy, magazineNumber } = this.state;

        const { isArticle, setDate } = this.props;

        return (
            <CalendarButtonsContainer>
                 { isArticle && <MagazineNumber placeholder='nr#' name="magazineNumber" type="text" value={magazineNumber} onChange={this.handleInputChange} /> }
                 <DateButton onClick={this.toggleCalendar}>{ dd || 'dag' }</DateButton>
                 <DateButton onClick={this.toggleCalendar}>{ mm || 'månad' }</DateButton>
                 <DateButton onClick={this.toggleCalendar}>{ yy || 'år' }</DateButton>
                 {
                     this.state.showCalendar && <Calendar locale="swe" onChange={(date) => {
                         this.onChange(date);
                         setDate(date)
                     }} />
                 }
             </CalendarButtonsContainer>
            )
        }
    }


export default CalendarContainer;
