import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const cheeseArray = ['feta', 'parmesan', 'mozzarella', 'ricota']

const CheeseForm = (props) => {
  
  

  return (

    <Fragment>
      
      <h1><label className="text-light" htmlFor="cheese" align="center">Cheese</label></h1>
      {props.picture()}
      
        <br></br> <br></br> <br></br> <br></br>

        {/* <p> */}
        <div className="row">
          {cheeseArray.map((cheese, index) => {
            return props.fillForm(cheese, 'cheese', index)
          })}
        </div>
        {/* </p> */}
        <br></br> <br></br> <br></br> <br></br>


    </Fragment>

      )
    }
    
export default CheeseForm