import React from 'react'
import '../index.css';
const Pizza = (props) => {

    const onClick = () => {
        props.removePizza(props.pizza.id)
    }
    return (
        <div className="row">
<div className="size"  id="pot">
    
<div className="sauce"  id="ingredients">
<img id="ingredients" alt="sauce" src={require(`../images/sauce/${props.pizza.sauce}.png`)}/>

<div className="cheese"  id="ingredients">
<img id="ingredients" alt="cheese" src={require(`../images/cheese/${props.pizza.cheese}.png`)}/>
{props.pizza.toppings.map((top) =>
<div className="toppings" id="ingredients">
<img  id="ingredients" alt="toppings" src={require(`../images/toppings/${top}.png`)} />
</div>)}
{props.pizza.gourmet_toppings.map((top) =>
<div className="gourmetToppings"   id="ingredients">
<img  id="ingredients" alt="gorumet_toppings" src={require(`../images/gourmet_toppings/${top}.png`)} />
</div>)}




</div>
</div>
</div>
      
            <button onClick={onClick}>Remove</button>
        </div>
    )
}
export default Pizza