import React, { Component } from 'react';

class Auth extends Component {
  render() {
    return (
      <div className="Auth">
        <form>
          <label for className="site-password">Password</label>
          <input type="password" name="password" value className="site-password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Auth;
