import React, { Component } from 'react'
import Order from '../components/Order'

export default class Orders extends Component {

  render() {

    const orders = this.props.orders.map((order, index) => <Order order={order} key={index} index={index} onDeleteOrder={this.props.onDeleteOrder} onEditOrder={this.props.onEditOrder}/>)

    return (
      <div className='orderHistory'><h1>{this.props.user_name}'s Orders</h1>
        {orders}
      </div>
    )
  }
}