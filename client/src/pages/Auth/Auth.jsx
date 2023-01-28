import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="A-left">
        <img src={Logo} alt="" />
        <div className="webName">
          <h1>Jamie Media</h1>
          <h6>Jump outside the box</h6>
        </div>
      </div>

      <LogIn />
      {/* <Signup /> */}

    </div>
  );
};

function LogIn() {
  return (
    <div className="A-right">
      <form action="" className="infoForm authForm wide">
        <h3>Log In</h3>
        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="firstname"
          />
          
        </div>
        
        <div>
          <input
            type="text"
            placeholder="Password"
            className="infoInput"
            name="password"
          />
          
        </div>

        <div>
          <span style={{fontSize: "12px"}}>Don't have an account? Sign Up!</span>
        </div>
        <button className="button infoButton" type="submit">
        LogIn
        </button>
      </form>
    </div>
  );
}

function Signup() {
  return (
    <div className="A-right">
      <form action="" className="infoForm authForm">
        <h3>Sign up</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>
        <div>
        <input
            type="text"
            placeholder="User Name"
            className="infoInput"
            name="username"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            className="infoInput"
            name="password"
          />
          <input
            type="text"
            placeholder="Confirm Password"
            className="infoInput"
            name="confirmpassword"
          />
        </div>

        <div>
          <span style={{fontSize: "12px"}}>Already have an account. Login!</span>
        </div>
        <button className="button infoButton" type="submit">
          SignUp
        </button>
      </form>
    </div>
  );
}

export default Auth;
