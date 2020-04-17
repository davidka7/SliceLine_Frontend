import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

let gourmetToppingsArray = ['basil', 'jalapeno peppers', 'chives', 'sundried tomatoes', 'pepper', 'parsley', 'anchovies', 'shrimp', 'salmon']
gourmetToppingsArray = gourmetToppingsArray.sort()

const GourmetToppingForm = (props) => {
  return (

    <Fragment>
      <h1><label className="text-light" htmlFor="gourmetTopping">Gourmet Toppings</label></h1>
      {props.picture()}
      <br></br> <br></br> <br></br> <br></br>
      <div className="row">
        {gourmetToppingsArray.map((gourmetTopping, index) => {
          return props.fillForm(gourmetTopping, 'gourmet_toppings', index)
        })}
      </div>
      <br></br> <br></br> <br></br> <br></br>

    </Fragment>

  )
}

export default GourmetToppingForm