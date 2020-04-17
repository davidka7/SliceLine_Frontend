import React, { Component } from 'react'
import '../index.css';
class Login extends Component {

  state = {
    name: ''
  }

  handleClick = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    this.props.onLogin(username);
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value })
  }

  canBeSubmitted = () => {
    return (
      this.state.name.length > 0
    );
  }

  render() {

    const isEnabled = this.canBeSubmitted();

    return (
      <div>
      <form onSubmit={this.handleClick}>
        <div>
          <label className="text-light">
            Username
            <input id="username" name="username" type="text" value={this.state.name} onChange={this.handleChange}/>
          </label>
        </div>

        <div>
          <button disabled={!isEnabled} type="submit">Log in</button>
        </div>
      </form>
      </div>
    );
  }
}

export default Login;









