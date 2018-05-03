import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Router } from 'react-router-dom';
import Edit from '../edit/edit';


class Item extends Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			code_1: this.props.code,
			name_1:this.props.name,
			expirationdate_1:this.props.expirationDate,
			category_1:this.props.category,
			cost_1:this.props.cost,
			show: false
		}
		this.deleteProduct = this.deleteProduct.bind(this);
		
	}

	deleteProduct(id){
		console.log(id);
		const url = 'http://localhost:8081/demo/products/'+id; 
		fetch(url,{
			method: 'DELETE',
		}).then(response => response.json())
		window.location.reload();
	}

	editProduct(id){
		const url = 'http://localhost:8081/demo/products/'+id;
		fetch(url,{
			method:'GET'
		})
	}

	castDate(){
			const date1= this.props.expirationDate;
			var date_final = '';
			for(var i = 0; date1[i] != 'T'; i++)
				date_final+=date1[i];
			return date_final;
		}


	render(){
		let handleClose = () => this.setState({show:false});
		return(
			<tr>
				<td>{this.props.it}</td>
				<td>{this.props.code}</td>
				<td>{this.props.name}</td>
				<td>{this.castDate()}</td>
				{this.props.category === 1 ?
					<td>{"Importado"}</td> : <td>{"Nacional"}</td>
				}
				
				<td>{this.props.cost}</td>
				<td>
					<Button bsStyle = "primary" bsSize = "xsmall" style = {{marginRight: 5 + 'px'}} onClick = {() => this.setState({show:true})}><i className = "fa fa-edit"></i> editar</Button> 
					<Button bsStyle = "danger" bsSize = "xsmall" type = "submit" onClick = {() => this.deleteProduct(this.props.code)}><i className = "fa fa-trash"></i> borrar</Button>
				</td>
			<Edit show = {this.state.show} code_1 = {this.props.code} name_1 = {this.props.name} cost_1 = {this.props.cost} expirationdate_1 = {this.props.expirationDate} category_1 = {this.props.category} onHide={handleClose}/>
			</tr>
			
			
		);
	}
}

export default Item;