import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

let toppingsArray = ['kidney beans', 'asparagus', 'celery', 'garlic', 'red pepper', 'capers', 'cherkin', 'broccoli', 'lime', 'green peppers', 'mushrooms', 'onions', 'olives', 'spinach', 'pineapples', 'bacon', 'ham', 'pepperoni', 'salami', 'lamb', 'chicken', 'beef', 'pork']
toppingsArray = toppingsArray.sort()

const ToppingForm = (props) => {
  return (

    <Fragment>
      <h1><label className="text-light" htmlFor="topping" align="center">Toppings</label></h1>
      {props.picture()}
      <br></br> <br></br> <br></br> <br></br>
        <div className="row">
          {toppingsArray.map((topping, index) => {
            return props.fillForm(topping, 'toppings', index)
          })}
        </div>
      <br></br> <br></br> <br></br> <br></br>

    </Fragment>

  )
}

export default ToppingForm