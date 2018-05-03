import React, { Component } from 'react';

import DatePicker from 'react-datepicker';

import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';


class Calendar extends Component{
	constructor(props){
		super(props);
		{this.props.d === '' ? this.state={startDate: moment()}: this.state=({startDate:moment(this.props.d,"YYYY-MM-DD")})}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(date){
		this.setState({
			startDate: date,
			d: date.format()
		});
	}

	render(){
		return (
		<DatePicker name = "expiration_date"
			selected = {this.state.startDate}
			onChange={this.handleChange}
		{...this.props}/>);
	}
}

export default Calendar;
