import React, { Component } from 'react';
import {Grid, Row, Col } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';


import './footer.css';

class Footer extends Component {
	render(){
		return (
			<footer>
				<Grid>
          <Row className="show-grid">
            <Col lg = {5} md = {5}>
            </Col>
            <Col lg = {6} md = {6}>
              <p>TINGESO 1-2018</p>
            </Col>
          </Row>
        </Grid>
			</footer>
		);
	}

}

export default Footer;
