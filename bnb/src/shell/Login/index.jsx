import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter, Link } from "react-router-dom";
import * as localActions from "./actions";
import { Header } from "../common";
//import Calendar from 'rc-calendar';
import "./login.scss";

class Login extends Component {
  navigate = (e) => {
    e.preventDefault()
    this.props.navigateToHome();
  };

  render() {
    return (
      <div className="loginContainer">
        <Header header="Login/Signup" />
        <form className="formContainer">
          <div className="numberContainer">
            <label>Enter your Phone number</label>
            <input
              className="phone_num"
              type="text"
              placeholder="9999999999"
              maxLength={10}
            />
          </div>
          <div className="numberContainer">
            <label>Enter your Phone Password</label>
            <input
              className="phone_num"
              type="text"
              placeholder="*******"
              maxLength={10}
            />
          </div>
        
          <button className='btn lgnBtn' onClick={this.navigate}>Login</button>
        </form>
        
       
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {} = state;
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...localActions }, dispatch);
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
