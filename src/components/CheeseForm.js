import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

let cheeseArray = ['feta', 'parmesan', 'mozzarella', 'ricota']
cheeseArray = cheeseArray.sort();

const CheeseForm = (props) => {
  
  

  return (

    <Fragment>
      
      <h1><label className="text-light" htmlFor="cheese" align="center">Cheese</label></h1>
      {props.picture()}
      <br></br> <br></br> <br></br> <br></br>

        <div className="row">
          {cheeseArray.map((cheese, index) => {
            return props.fillForm(cheese, 'cheeses', index)
          })}
        </div>
      <br></br> <br></br> <br></br> <br></br>


    </Fragment>

      )
    }
    
export default CheeseForm