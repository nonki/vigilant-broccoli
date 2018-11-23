import React, { Component } from 'react';
import { checkAuth } from './Api.js';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = { password: '' };
  }

  handleChange(e) {
    this.setState({password: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const auth = checkAuth(this.state.password);
    this.setState({password: ''});
    this.props.handler(auth);
  }

  render() {
    return (
      <div className="Auth">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label for className="site-password">Password</label>
          <input type="password" name="password" className="site-password" value={this.state.password} onChange={this.handleChange.bind(this)} />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Auth;
