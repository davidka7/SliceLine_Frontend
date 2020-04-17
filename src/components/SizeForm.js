import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const sizeArray = ['small', 'medium', 'large']

const SizeForm = (props) => {
  return (


    <Fragment>
      <h1><label className="text-light" htmlFor="size">Size</label></h1>
      {props.picture()}
      <br></br> <br></br> <br></br> <br></br>
      <div className="row">
        {sizeArray.map((size, index) => {
          return props.fillForm(size, 'sizes', index)
        })}
      </div>
      <br></br> <br></br> <br></br> <br></br>
    </Fragment>

  )
}

export default SizeForm