import React, { useState } from 'react';
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = event => {
    event.preventDefault(); // this stops the refresh !!!
    // do the login logic...
    
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // logged in, redirect to home page
        history.push("/");
      })
      .catch((e) => alert(e.message));
  }

  const register = event => {
    event.preventDefault(); // this stops the refresh !!!
    // do the register logic...

    auth
      .createUserWithEmailAndPassword(email,password)
      .then(auth => {
        // created a user and logged in, redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
          <h5>Password</h5>
          <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
          <button type="submit" onClick={login} className="login__signInButton">
            Sign In
          </button>
          </form>

          <p>
            By signing-in you agree to Amazon's Conditions of Use and Sale.
            Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
          </p>
          <h5 className="login__NewToAmazon">New to Amazon?</h5>
          <button onClick={register} className="login__registerButton">Create your Amazon account</button>
      </div>
    </div>
  )
}

export default Login;
