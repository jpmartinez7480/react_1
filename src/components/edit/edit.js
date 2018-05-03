import React, { Component } from 'react';

import Header from "../header/header";
import Calendar from "../calendar/calendar";

import { Form, FormGroup, FormControl, Col, ControlLabel, Grid, Row, Button, Modal } from 'react-bootstrap';
import { Connect } from 'react-redux';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';


class Edit extends Component{
	constructor(props,context){
		super(props,context);
		
		this.state = {
			name:this.props.name_1,
			category:this.props.category_1,
			price:this.props.cost_1,
			date:this.props.expirationdate_1
		};
		
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		
	}	
		
		handleChange(event){
			this.setState({category: event.target.value});
		}

		handleChangePrice(event){
			this.setState({price: event.target.value});
		}

		getValidationStateName(){
			const length = this.state.name.length;
			if(length >= 5) return 'success';
			else if(length === 0) return null;
			else if (length >= 1 && length <= 4) return 'error';
		}


		castDate(){
			const date1= this.state.date;
			var date_final = '';
			for(var i = 0; date1[i] != 'T'; i++)
				date_final+=date1[i];
			console.log(date_final);
			return date_final;
		}

		handleSubmit(event){
			event.preventDefault();
			const data = new FormData(event.target);
			const [month, day, year] = data.get('expiration_date').split('/');
			const date_final = `${year}-${month}-${day}`;
			data.set('expiration_date',date_final);
			var json_obj_data = {
				name: data.get('name'),
				cost: parseInt(data.get('price')),
				expirationDate:data.get('expiration_date'),
				category: parseInt(data.get('category_id'))
			};
			console.log(json_obj_data); 
			const url = 'http://localhost:8081/demo/products/' + this.props.code_1; 
			fetch(url,{
				method: 'PUT',
				headers:{
					Accept: "application/json",
					"Content-Type":"application/json"
				},
				body: JSON.stringify(json_obj_data)
			});
			window.location.reload();
			
		}
	render(){
		return(
			
				<Modal {...this.props}>
					<Modal.Header closeButton>
						<Modal.Title>Edite el producto {this.props.name_1}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form horizontal onSubmit = {this.handleSubmit}>
							<FormGroup controlId = "frm_cat">
								<Col componentClass = 	{ControlLabel} sm = {2}>Categoria</Col>
								<Col sm = {10}>
									<select name = "category_id" value = {this.state.category} onChange = {this.handleChange}>
										<option value = "1">Importado</option>
										<option value = "2">Nacional</option>
									</select>
								</Col>
							</FormGroup>
							<FormGroup controlId = "frm_date">
								<Col componentClass = {ControlLabel} sm = {2}>Fecha vencimiento</Col>
								<Col sm = {10}>
									<Calendar d = {this.castDate()} name = "expiration_date"/>
								</Col>
							</FormGroup>
							<FormGroup controlId = "frm_price">
								<Col componentClass = 	{ControlLabel} sm = {2}>Precio ($)</Col>
								<Col sm = {10}>
									<FormControl type = "text" name = "price" value = {this.state.price} onChange={(e) => {this.setState({price:e.target.value})}}/>
								</Col>
							</FormGroup>
							<FormGroup controlId = "frm_name">
								<Col componentClass = 	{ControlLabel} sm = {2}>Nombre</Col>
								<Col sm = {10}>
									<FormControl type = "text" value = {this.state.name} name = "name" 
									onChange={(e) => {this.setState({name:e.target.value})}}
									style = {{width:200 + 'px'}}
									/>
								</Col>
							</FormGroup>	
							<FormGroup>
								<Col sm = {10}>
									<Button id = "btn_annadir" bsStyle = "primary"  bsSize = "large" type = "submit">Editar</Button>
								</Col>
							</FormGroup>
						</Form>;
					</Modal.Body>
				</Modal>
			
		);
	}
}

export default Edit;