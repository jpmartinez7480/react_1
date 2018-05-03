import React, { Component } from 'react';

import { Form, FormGroup, FormControl, Col, ControlLabel, Grid, Button,Table, Row,  Modal} from 'react-bootstrap';

import 'font-awesome/css/font-awesome.min.css';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import Header from "../header/header";
import Item from "../item/item";
import Calendar from "../calendar/calendar";

import './products.css';

class Product extends Component{

	constructor(props){
		super(props)
		
		this.state = {
			prod: [],
			cnt:1
		};
	}

	componentDidMount(){
		fetch('http://localhost:8081/demo/products/all')
			.then(res => res.json())
			.then(prod => this.setState({ prod: prod }));
			console.log(this.state.prod);
	}
	
	buildList(){
		return this.state.prod.map(p => {
			return (
				<Item  key = {p.id} it = {this.state.cnt++} code = {p.id} name = {p.name} cost = {p.cost} expirationDate = {p.expirationDate} category = {p.category}/>
			);
		})
	}

	render(){
		return (
			<div className = "productos">
				<Header />
				<div className = "container-fluid">
					<Grid>
						<Row className = "show-grid">
							<Col lg = {1} md = {1}></Col>
							<Col lg = {10} md = {10}>
								<h2 style = {{marginBottom: 20 + 'px'}}>Listado de productos</h2>
								<Table striped bordered condensed hover>
									<thead>
										<tr>
											<th className = "datos" >#</th>
											<th className = "datos" >Codigo</th>
											<th className = "datos" >Nombre</th>
											<th className = "datos" >Vence</th>
											<th className = "datos" >Categoria</th>
											<th className = "datos" >Precio</th>
											<th className = "datos" >Accion</th>
										</tr>
									</thead>
									<tbody className = "datos">
											{this.buildList()}
									</tbody>
								</Table>;
							</Col>
							<Col lg = {1} md = {1}></Col>
						</Row>
					</Grid>	
				</div>
			</div>
		);
	}
}

export default Product;