import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const gourmetToppingsArray = ['basil', 'jalapeno peppers', 'chives', 'sundried tomatoes', 'pepper', 'parsley', 'anchovies', 'shrimp', 'salmon']

const GourmetToppingForm = (props) => {
  return (

    <Fragment>
      <h1><label className="text-light" htmlFor="gourmetTopping">Gourmet Toppings</label></h1>
      {props.picture()}
      <br></br> <br></br> <br></br> <br></br>
      {/* <p> */}
      <div className="row">
        {gourmetToppingsArray.map((gourmetTopping, index) => {
          return props.fillForm(gourmetTopping, 'gourmet_toppings', index)
        })}
      </div>
      {/* </p> */}
      <br></br> <br></br> <br></br> <br></br>

    </Fragment>

  )
}

export default GourmetToppingForm