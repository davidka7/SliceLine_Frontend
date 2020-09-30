import React, { Component } from 'react'
import MainForm from '../components/MainForm'
import Cart from '../components/Cart'
import Button from 'react-bootstrap/Button'
export default class NewOrder extends Component {

  state = {
    id_count: 0,
    pizzas: []
  }

  addToOrder = (hash, id) => {
    const array = this.state.pizzas
    const pizza = hash
    pizza.id = id
    array.push(pizza)
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

  placeOrder = () => {
    fetch('https://intense-chamber-39011.herokuapp.com/api/v1/orders', {
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

  render() {
    return (
      <div>
        <MainForm addToOrder={this.addToOrder} id={this.state.id_count} />
        <Cart pizzas={this.state.pizzas} removePizza={this.removePizza} />
        <Button variant="dark" onClick={this.placeOrder}>Place Order</Button>

      </div>
    )
  }
}









