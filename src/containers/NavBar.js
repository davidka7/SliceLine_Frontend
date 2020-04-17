import React from 'react';
import { NavLink } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge'
import '../index.css';
const NavBar = (props) => {
  return (

    <div className="navbar">
      <Badge className="lope">
        <NavLink className="donty" to={`/${props.user_name}/neworder`} onClick={props.onClick}>New Order</NavLink>
        <NavLink className="donty" to={`/${props.user_name}/orders`} onClick={props.onClick}>Order History</NavLink>
      </Badge>

    </div>

  );
};

export default NavBar;
