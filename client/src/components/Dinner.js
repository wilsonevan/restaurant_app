import React from "react";
import {Container, } from "semantic-ui-react";
import DinnerList from "./DinnerList";
import DishForm from "./DishForm"
import axios from "axios";

class Dinner extends React.Component {
	state = { 
    menus: [],
    dishes: [], 
  };

  componentDidMount() {
    // Display all of the dishes for the first menu
    axios.get('/api/menus/1/dishes')
      .then( res => { 
        console.log(res);
        this.setState({ dishes: res.data })
      })
      .catch( err => {
        console.log(err);
      })
  }

  addDish = (dishData) => {
    // TODO make api call to rails server to add dish
    // TODO update state
    // console.log(dishData)
    // console.log({...dishData})
    axios.post('/api/menus/1/dishes', {dish: {...dishData} })
    .then( res => {
      const { dishes, } = this.state;
      this.setState({ menus: this.state.menus,
        dishes: [...dishes, res.data], });
    })
  }

  updateDish = (id) => {
    // TODO make api call to update dish
    // TODO update state
  }

  deleteDish = (id) => {
    // TODO make api call to delete dish
    // TODO remove it from state
  }
	
	render() {
		return (
			<Container>
        <DishForm addDish={this.addDish}/>
        <DinnerList 
          dishes={this.state.dishes}
				/>
			</Container>
		)
	}
}

export default Dinner;
