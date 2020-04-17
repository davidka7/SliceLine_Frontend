import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import '../App.css';

let sauceArray = ['tomato', 'white', 'bbq', 'garlic olive oil', 'french white', 'lemon hill', 'satay']
sauceArray = sauceArray.sort()

const SauceForm = (props) => {
  return (


    <Fragment>
      
      <h1><label className="text-light" htmlFor="sauce">Sauce</label></h1>
      {props.picture()}
      <br></br> <br></br> <br></br> <br></br>
      <div className="row" >
        {sauceArray.map((sauce, index) => {
          return props.fillForm(sauce, 'sauces', index)
        })}
      </div>
      <br></br> <br></br> <br></br> <br></br>

    </Fragment>

  )
}

export default SauceForm