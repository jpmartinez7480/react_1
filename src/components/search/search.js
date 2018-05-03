import React, { Component } from 'react';
import { Grid, Row, Col, ControlLabel, FormControl, FormGroup, Button} from 'react-bootstrap';

import Header from "../header/header";

import './search.css';

class Search extends Component{
	render(){
		return(
			<div class = "s">
				<Header />
				<div class = "container-fluid">
					<Grid>
						<Row className = "show-grid">
							<Col lg = {3} md = {3}></Col>
							<Col lg = {6} md = {3}>
								<h2>Busqueda de productos</h2>
								<form>
									<FormGroup
										controlId = "nombreCod"
									>
									<ControlLabel>Ingrese código producto</ControlLabel>
									<FormControl
										type = "text"
										placeholder = "111"
									/>
									<Button id = "btn_style" bsStyle = "primary">Buscar</Button>
									</FormGroup>
									<FormGroup
										controlId = "nombreNom"
									>
									<ControlLabel>Ingrese código producto</ControlLabel>
									<FormControl
										type = "text"
										placeholder = "Notebook Lenovo g40"
									/>
									<Button id = "btn_style" bsStyle = "primary">Buscar</Button>
									</FormGroup>
									
								</form>

							</Col>
							<Col lg = {3} md = {3}></Col>
						</Row>
					</Grid>
				</div>
			</div>
		);
	}
}

export default Search;