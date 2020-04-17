import React from 'react'
import Pizza from './Pizza'
import '../index.css';
const Order = (props) => {

  const pizzas = props.pizzas.map((pizza, index) => <Pizza pizza={pizza} removePizza={props.removePizza} key={index} />)


  return (
    <div className="order">
      <div className="text-light"> <h1 className="order header">Pizzas in Order</h1> </div>
      <div className="pizzas">
        {pizzas}
      </div>
    </div>
  )
}

export default Order