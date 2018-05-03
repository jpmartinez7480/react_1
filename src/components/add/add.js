import React, { Component } from 'react';

import Header from "../header/header";
import Calendar from "../calendar/calendar";

import { Form, FormGroup, FormControl, Col, ControlLabel, Grid, Row, Button } from 'react-bootstrap';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import './add.css';

class Add extends Component{
	constructor(props,context){
		super(props,context);
		
		this.state = {
			name:'',
			category_id:0,
			price:0,
			date:''
		}
		this.handleSubmit = this.handleSubmit.bind(this);

		
	}
		
		getValidationStateName(){
			const length = this.state.name.length;
			if(length >= 5) return 'success';
			else if(length === 0) return null;
			else if (length >= 1 && length <= 4) return 'error';
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
			fetch('http://localhost:8081/demo/products/',{
				method: 'POST',
				headers:{
					Accept: "application/json",
					"Content-Type":"application/json"
				},
				body: JSON.stringify(json_obj_data)
			});
			
			
		}
	render(){
		return(
			<div className = "h">
				<Header />
				<div className = "container-fluid">
				<Grid>
					<Row className = "show-grid">
						<Col lg = {3} md =  {3}></Col>
						<Col lg = {6} md = {6}>
							<h2 id = "titulo_add">Añadir Producto</h2>
							<Form horizontal onSubmit = {this.handleSubmit}>
								<FormGroup controlId = "frm_cat">
									<Col componentClass = 	{ControlLabel} sm = {2}>Categoria</Col>
									<Col sm = {10}>
										<select name = "category_id">
											<option value = "1">Importado</option>
											<option value = "2">Nacional</option>
										</select>
									</Col>
								</FormGroup>
								<FormGroup controlId = "frm_date">
									<Col componentClass = {ControlLabel} sm = {2}>Fecha vencimiento</Col>
									<Col sm = {10}>
										<Calendar d = {this.state.date} name = "expiration_date"/>
									</Col>
								</FormGroup>
								<FormGroup controlId = "frm_price">
									<Col componentClass = 	{ControlLabel} sm = {2}>Precio ($)</Col>
									<Col sm = {10}>
										<FormControl type = "text" name = "price" placeholder = "250.000" />
									</Col>
								</FormGroup>
								<FormGroup 
									controlId = "frm_name"
									
								>
									<Col componentClass = 	{ControlLabel} sm = {2}>Nombre</Col>
									<Col sm = {10}>
										<FormControl 
										type = "text" 
										placeholder = "Notebook Lenovo g40" 
										name = "name"
										/>
									</Col>
								</FormGroup>
								
								
								<FormGroup>
									<Col sm = {10}>
										<Button id = "btn_annadir" bsStyle = "primary"  bsSize = "large" type = "submit">Añadir</Button>
									</Col>
								</FormGroup>
							</Form>;
						</Col>
						<Col lg = {3} md =  {3}></Col>
					</Row>
				</Grid>
			</div>

			</div>
			
		);
	}
}



export default Add;