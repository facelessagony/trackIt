import React, { useState } from "react";
import "../styles/Signup.css";
import { Outlet, Link } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = () => {
    console.log("here");
    document.getElementById("errorMsg").innerHTML = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      document.getElementById("errorMsg").innerHTML =
        "Passwords must be the same.";
      return;
    }

    const ops = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        passwordConfirmation,
      }),
    };

    console.log("Options", ops);

    fetch("http://localhost:8080/user/new", ops)
      .then((res) => res.json())
      .catch((err) => alert(err, "Server Error"))
      .then((res) => console.log(res));
  };

  return (
    <div className="main-container">
      <h1>Sign Up</h1>
      <div className="signup-container">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="signup-form"
        >
          <div className="form-group">
            <label htmlFor="email">First Name</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <label htmlFor="passwordConfirmation">Password Confirmation</label>
            <input
              type="password"
              className="form-control"
              id="passwordConfirmation"
              placeholder="Password Confirmation"
              value={passwordConfirmation}
              required
              onChange={(e) => {
                setPasswordConfirmation(e.target.value);
                onChange();
              }}
            />
          </div>
          <p style={{ color: "red" }} id="errorMsg"></p>
          <div className="button-container">
            <button className="submit-button btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
        <div className="right-panel">
          <h1>Track It</h1>
          <p>Already have an account?</p>
          <Link to="/signin">
            <button className="btn btn-primary">Sign in</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
