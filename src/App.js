import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/home';
import Add from './components/add/add';
import Products from './components/products/products';
import Search from './components/search/search';
class App extends Component {
  render() {
    return (
      <Router>
      	<div>
		  	<Route exact path="/" component={Home} />
		  	<Route path="/products" component={Products} />
		  	<Route path="/add" component={Add} />
		  	<Route path="/search" component={Search} />
      	</div>
      </Router>
    );
  }
}


export default App;
