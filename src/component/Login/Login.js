import React, { useState } from "react";
import classes from "./Login.module.css";

function Login(props) {
  const [emailIsValid, setEmailIsValid] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState("");

  const emailChangeHandler = (event) => {
    setEmailIsValid(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPasswordIsValid(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // check the email and password
  };

  return (
    <form className={classes.Login} onSubmit={submitHandler}>
      <input
        type="email"
        placeholder="Email..."
        onChange={emailChangeHandler}
        value={emailIsValid}
      ></input>
      <input
        type="password"
        placeholder="Password..."
        onChange={passwordChangeHandler}
        value={passwordIsValid}
      ></input>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
