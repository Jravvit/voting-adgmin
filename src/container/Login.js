import React, { Component } from 'react';
import "./Login.css" 

class Login extends Component {

  render() {
    return (
      <div className="login">
      	<div className="title m-b-50">
      		관리자 로그인
      	</div>
         <div className="ui grid centered">
         	<div className="eight wide computer column">
         		<form className="ui form">
         			<div className="field">
         				<input placeholder="admin id"/>
         			</div>
         			<div className="field">
         				<input placeholder="password"/>
         			</div>
	     			  <button type='submit' class='ui button' role='button'>
					    Submit
					  </button>
         		</form>
         	</div>
         </div>
      </div>
    );
  }
}

export default Login;
