import React from 'react'
import Pizza from './Pizza'
import '../index.css';
const Order = (props) => {

  const pizzas = props.order.pizzas.map((pizza, index) => <Pizza pizza={pizza} key={index} />)

  const handleDeleteButton = () => {
    props.onDeleteOrder(props.order.id)
  }

  const handleEditButton = () => {
    props.onEditOrder(props.order)
  }

  return (
    <div className="order">
      <div className="text-light"> <h1 className="order header">Pizzas in Order</h1> </div>
      <div className="pizzas">
        {pizzas}
      </div>
      <button onClick={handleEditButton}> Edit </button>
      <button onClick={handleDeleteButton}> Delete </button>
      
    </div>
  )
}

export default Order