import React, { Component } from 'react';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.css';
import rino from './rino2.png';


class Header extends Component {
  render(){
    return (
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to = "/">HOME</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Grid>
              <Row className="show-grid">
                <Col lg = {5} md = {5}></Col>
                <Col lg = {5} md = {5}>
                  <img src = {rino}  height= "80px" alt = "rino"/>
                </Col>
              </Row>
            </Grid>
            
          </Navbar.Collapse>
        </Navbar>
      );
  }
}

export default Header;