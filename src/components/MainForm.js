import React, { Component } from 'react'
import SauceForm from './SauceForm'
import CheeseForm from './CheeseForm'
import ToppingForm from './ToppingForm'
import GourmetToppingForm from './GourmetToppingForm'
import SizeForm from './SizeForm'
import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import background from '../images/pixur.png'
import Badge from 'react-bootstrap/Badge'
import Carousel from 'react-bootstrap/Carousel'
import '../index.css';
import '../App.css';

class MainForm extends Component {

  state = {
    ...this.props.state,
  }

  sectionStyle = {
    backgroundImage: `url(${background})`,
    minHeight: '800px',
    backgroundSize: 'cover'
  };

  picture = () => {
    if (this.state.sizes !== '' && this.state.sizes !== undefined
      && this.state.sauces !== ''
      && this.state.cheeses !== '') {
      return (
        <div className="row">
          <div className="size" id="pot">
            <div className="sauce" id="ingredients">
              <img id="ingredients" alt="sauce" src={require(`../images/sauces/${this.state.sauces}.png`)} />
              <div className="cheese" id="ingredients">
                <img id="ingredients" alt="cheese" src={require(`../images/cheeses/${this.state.cheeses}.png`)} />
                {this.state.toppings.map((top) =>
                  <div className="toppings" id="ingredients">
                    <img id="ingredients" alt="toppings" src={require(`../images/toppings/${top}.png`)} />
                  </div>)}
                {this.state.gourmet_toppings.map((top) =>
                  <div className="gourmetToppings" id="ingredients">
                    <img id="ingredients" alt="gourmet_toppings" src={require(`../images/gourmet_toppings/${top}.png`)} />
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      )
    } else if (this.state.sizes === "") {
      return (<div className="size" id="pot1"></div>)
    }
    else if (this.state.sauces === "") {
      return (<div className="size" id="pot1"></div>)
    }
    else if (this.state.cheeses === "") {
      return (<div className="size" id="pot1"></div>)
    }
    else if (this.state.toppings === []) {
      return (<div className="size" id="pot1"></div>)
    }
    else if (this.state.gourmet_toppings === []) {
      return (<div className="size" id="pot1"></div>)
    }
    else { return (<div className="size" id="pot1"></div>) }
  }

  handleChange = (event) => {

    const itemType = event.target.name;
    const item = event.target.value;
    let value = this.state[`${itemType}`];

    if (value === item) {
      value = ''
    }
 else if (value.includes(item)) {
     value = value.filter(element => element !== item)
    }
    else {
      (Array.isArray(value) ? (
        value.push(item)
      ) : (
          value = item
        ))
    }
console.log(value)
console.log(this.state)
    this.setState({
      [`${itemType}`]: value,
    })

  }

  handleSubmit = (event) => {


    event.preventDefault()

 

    document.getElementById("order-form").reset()

   // document.getElementById("contain").reset()
console.log(this.state)
    this.props.addToOrder(this.state, this.props.id)
    console.log(this.state)
    this.setState({
      sizes: '',
      sauces: '',
      cheeses: '',
      toppings: [],
      gourmet_toppings: []
    })
    console.log(this.state)
  }

  canBeSubmitted = () => {
    const pizza = this.state;

    return (
      pizza['sizes'] !== ''
      && pizza['sauces'] !== ''
      && pizza['cheeses'] !== ''
    );
  }

  fillForm = (element, type, index) => {

    return (

      <div className="field" key={index}>
        <div className="ui checkbox">

          <div className="col-2 align-self-center">
            
            <input
              id={element}
              type="checkbox"
              value={element}
              name={type}
              checked={
                Array.isArray(this.state[type]) && this.state[type].length > 0 ? (
                  this.state[type].includes(element)
                ) : (
                    this.state[type] === element
                  )}
              onChange={(e) => this.handleChange(e)}
            />
            <img src={require(`../images/${type}/${element}.png`)} height="80px" width="80px" alt={element} />
            <br></br><Badge variant="secondary"><label htmlFor={element}>{element}</label></Badge>
          </div>
        </div>
      </div>
    )
  }

  render() {

    const isEnabled = this.canBeSubmitted();

    return (
      <div style={this.sectionStyle}>
        <div className="ui raised container segment">

          <div className="jumbotron text-center">
            <h1>Create a Pizza</h1>
          </div>

          <form className="ui form" id="order-form" onSubmit={this.handleSubmit}>
            <Carousel >
              <Carousel.Item align="center" >

                <SizeForm
                  
                  size={this.state.sizes}
                  fillForm={this.fillForm}
                  picture={this.picture}
                />

              </Carousel.Item>
              <Carousel.Item align="center" >


                <SauceForm
                  
                  sauce={this.state.sauces}
                  fillForm={this.fillForm}
                  picture={this.picture}
                />

              </Carousel.Item>
              <Carousel.Item align="center">
                <div className="container">

                  <CheeseForm
                    
                    cheese={this.state.cheeses}
                    fillForm={this.fillForm}
                    picture={this.picture}
                  />

                </div>
              </Carousel.Item>
              <Carousel.Item align="center">
                <div className="container" id="contain">


                  <ToppingForm
                    
                    toppings={this.state.toppings}
                   
                    fillForm={this.fillForm}
                    picture={this.picture}
                  />

                </div>
              </Carousel.Item>
              <Carousel.Item align="center">
                <div className="container" id="contain">

                  <GourmetToppingForm
                   
                    gourmet_toppings={this.state['gourmet_toppings']}
              
                    fillForm={this.fillForm}
                      picture={this.picture}
                  />

                </div>
              </Carousel.Item>
            </Carousel>

            <br />

            <Button disabled={!isEnabled} variant="dark" type="submit" >Add Pizza </Button>
          </form>

        </div></div>
    )

  }
}

export default MainForm