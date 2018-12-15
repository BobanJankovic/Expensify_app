import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';


export const SignUp = (props) => (
  <div className="loginPage">
  <h3>Login page</h3>
    <button onClick={props.startLogin}>Sign Up</button>
  </div>
);
  

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(SignUp);




