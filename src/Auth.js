import React, { Component } from 'react';
import { checkAuth } from './Api.js';
import './Auth.css';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

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
    checkAuth(this.state.password).then(res => {
      this.setState({password: ''});
      if (!res) {
        alert('Wrong Password Scrub');
      }

      this.props.handler(res);
    });
  }

  render() {
    return (
      <div className="Auth">
        <form className="auth--parent" onSubmit={this.handleSubmit.bind(this)}>
          <div className="auth--child">
            <Input type="password" variant="contained" placeholder="" className="site-password" value={this.state.password} onChange={this.handleChange.bind(this)} />
          </div>
          <div className="auth--child">
            <Button variant="outlined" type="submit">Submit</Button>
          </div>
        </form>
      </div>
    )
  }
}

export default Auth;
