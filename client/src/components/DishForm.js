import React from "react";
import { Form, Button,  } from "semantic-ui-react";

class DishForm extends React.Component {
	state = { 
		name: "", 
		description: "",
		price: 0.0,
		dish_category: "",
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value, });
	}

	handleSubmit = (e) => {
		// debugger
		e.preventDefault();
		// TODO call a function that will make a post request
		// console.log(this.state)
		this.props.addDish(this.state);
		// this.setState({ 		
		// 	name: "", 
		// 	description: "",
		// 	price: 0,
		// 	dishCategory: "",
		// });
	}
	
	render() {
		return (
			<Form>
				<Form.Input
					label="Name"
					placeholder="Dish Name"
					required
					name="name"
					value={this.state.name}
					onChange={this.handleChange}
				/>
				<Form.Input
					label="Description"
					placeholder="Description"
					required
					name="description"
					value={this.state.description}
					onChange={this.handleChange}
				/>
				{/* <Form.Input
					label="Price"
					placeholder="Price"
					// required
					name="price"
					value={this.state.price}
					onChange={this.handleChange}
				/> */}
				<Form.Input
					label="Dish Category"
					placeholder="Appetizer, Salad, Dessert, Entree, etc."
					// required
					name="dish_category"
					value={this.state.dishCategory}
					onChange={this.handleChange}
				/>
				<Button onClick={this.handleSubmit} type='submit'>Submit</Button>
			</Form>
		)
	}
}

export default DishForm;