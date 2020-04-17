import React from 'react'
import '../index.css'

const Pizza = (props) => {

    const onRemovePizza = (props.removePizza ? (() => {
        props.removePizza(props.pizza.id)
    }) : (''))

    const onEditPizza = (props.onEditPizza ? (
        () => {
            props.onEditPizza(props.pizza)
        }) : (''))

    // return (
    //     <div>

    //         }
    //     </div>
    // )

    return (
        <div>
            <div className="row">
                <div className="size" id="pot">
                    <div className="sauce" id="ingredients">
                        <img id="ingredients" alt="sauce" src={require(`../images/sauces/${props.pizza.sauces}.png`)} />
                        <div className="cheese" id="ingredients">
                            <img id="ingredients" alt="cheese" src={require(`../images/cheeses/${props.pizza.cheeses}.png`)} />
                            {props.pizza.toppings.map((top) =>
                                <div className="toppings" id="ingredients">
                                    <img id="ingredients" alt="toppings" src={require(`../images/toppings/${top}.png`)} />
                                </div>)}
                            {props.pizza.gourmet_toppings.map((top) =>
                                <div className="gourmetToppings" id="ingredients">
                                    <img id="ingredients" alt="gorumet_toppings" src={require(`../images/gourmet_toppings/${top}.png`)} />
                                </div>)}
                        </div>
                    </div>
                </div>
                {(props.removePizza ? (<button onClick={onRemovePizza}>Remove</button>) : (''))}
                {//(props.onEditPizza ? (<button onClick={onEditPizza}>Edit</button>) : (''))}
                }
            </div>
            {props.pizza.sizes} pizza with {props.pizza.sauces} sauce,
            {
                ' ' + props.pizza.cheeses} cheese
            {(props.pizza.toppings[0] ? (' and ' + props.pizza.toppings.join(', ')) : (''))}
            {(props.pizza.gourmet_toppings[0] ? (' and ' + props.pizza.gourmet_toppings.join(', ')) : (''))}
    </div>
    )
}
export default Pizza