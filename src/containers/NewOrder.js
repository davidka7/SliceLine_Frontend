import React, { Component } from 'react'
import MainForm from '../components/MainForm'
import Cart from '../components/Cart'
import Button from 'react-bootstrap/Button'

const DEFAULT_STATE = {
  sizes: '',
  sauces: '',
  cheeses: '',
  toppings: [],
  gourmet_toppings: []
}

export default class NewOrder extends Component {

  state = {
    id_count: 0,
    pizzas: [],
    main_form_state: DEFAULT_STATE
  }

  addToOrder = (hash, id) => {
    
      const array = this.state.pizzas;
      const pizza = hash;
      pizza.id = id;
      array.push(pizza);
      this.setState({
        id_count: id + 1,
        pizzas: array
      });
    
  }

  removePizza = (id) => {
    const pizzas = this.state.pizzas.filter(pizza => pizza.id !== id)
    this.setState({
      pizzas
    });
  }

  editpizza = (pizza) => {
    this.setState({
      main_form_state: pizza
    })
  }

  placeOrder = () => {
    
    fetch(`https://intense-chamber-39011.herokuapp.com/api/v1/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        order: {
          pizzas: this.state.pizzas,
          user_id: this.props.user_id
        }
      })
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.props.confirmOrder(result);
          this.setState({
            id_count: 0,
            pizzas: []
          })
        },
        (error) => {
          console.log(error.message)
        }
      )
  }

  canBeSubmitted = () => {
    return (
      this.state.pizzas.length > 0
    );
  }

  render() {

    const isEnabled = this.canBeSubmitted();

    return (
      <div>

        <MainForm addToOrder={this.addToOrder} id={this.state.id_count} state={this.state.main_form_state}/>

        <Cart pizzas={this.state.pizzas} removePizza={this.removePizza} onEditPizza={this.editpizza}/>

        <Button disabled={!isEnabled} variant="dark" onClick={this.placeOrder}>Place Order</Button>

      </div>
    )
  }
}