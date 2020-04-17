import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
const sauceArray = ['tomato', 'white', 'bbq', 'garlic olive oil', 'french white', 'lemon hill', 'satay']

const SauceForm = (props) => {
  return (


    <Fragment>
      
      <h1><label className="text-light" htmlFor="sauce">Sauce</label></h1>
      {props.picture()}
      <br></br> <br></br> <br></br> <br></br>
      {/* <p>  */}
      <div className="row" >
        {sauceArray.map((sauce, index) => {
          return props.fillForm(sauce, 'sauce', index)
        })}
      </div>
      {/* </p> */}
      <br></br> <br></br> <br></br> <br></br>

    </Fragment>

  )
}

export default SauceForm