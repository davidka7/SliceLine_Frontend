import React from 'react'
import Pizza from './Pizza'

const Order = (props) => {
  let pizzas;
  if (props.result.pizzas) {
    pizzas = props.result.pizzas.map((pizza, index) => <Pizza pizza={pizza} key={index} />)
  }

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