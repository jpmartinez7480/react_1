import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Header from "../header/header";
import Footer from "../footer/footer";

import all from "../img/online-shop.png";
import db from "../img/database.png";
import search from "../img/eye.png"; 

import './home.css';

class Home extends Component {
	render(){
		return(
			<div>
				<Header />
				<div className = "container-fluid options">
					<Grid>
						<Row className="show-grid">
							<Col lg = {2} md = {2}></Col>
							<Col lg = {3} md = {3}>
								<Link to = "/products">
									<div id = "ver_todos">
										<img src = {all} width = "128px;" height= "128px;" alt = "ver todos"/>
										<p>Ver todos </p>
									</div>
								</Link>
							</Col>
							<Col lg = {3} md = {3}>
								<Link to = "/add">
									<div id = "ingresar">
										<img src = {db} width = "128px;" height= "128px;" alt = "ingresar"/>
										<p>Ingresar producto</p>
									</div>
								</Link>
							</Col>
							<Col lg = {3} md = {3}>
								<Link to = "/search">
									<div id = "buscar">
										<img src = {search} width = "128px;" height= "128px;" alt= "buscar"/>
										<p>Buscar producto </p>
									</div>
								</Link>
							</Col>
						</Row>
					</Grid>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Home;