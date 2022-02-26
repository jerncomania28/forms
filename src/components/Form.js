import React, { useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "../style/Form.css";
// import "./App.css";
// import {BrowserRouter , Routes , Route, Link} from 'react-router-dom'

function Form() {
  // states declaration

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(true);
  const [showPasswrd, setShowPasswrd] = useState(false);

  // end of state declaration

  //  handle submit function

  let handleSubmit = (event) => {
    console.log(name, email, country, phone, password);

    event.preventDefault();
  };

  // end of handle submit function

  // end of state methods

  return (
    <>
      <div className="form-container">
        <div className="cancelButton"></div>
        <div className="form-header"> Registration Form</div>

        <form>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            name="Name"
            className="input-design"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            name="Email"
            className="input-design"
          />
          <input
            type="text"
            placeholder="Country"
            value={country}
            onChange={(event) => {
              setCountry(event.target.value);
            }}
            name="Country"
            className="input-design"
          />
          <input
            type="Number"
            placeholder="Phone"
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value);
            }}
            name="Phone"
            className="input-design"
          />
          <div className="password-section">
            <input
              type={showPasswrd ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              className="pass"
              name="Password"
            />
            <FontAwesomeIcon
              icon={showPasswrd ? "fa-eye" : "fa-eye-slash"}
              id="visibility"
              onClick={(event) => {
                setShowPasswrd(!showPasswrd);
              }}
            />
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              onChange={() => {
                setCheck(!check);
              }}
            />{" "}
            <span>I accept terms & conditions</span>
          </div>

          <button
            disabled={check}
            type="submit"
            onClick={handleSubmit}
            className={check ? "light" : "dark"}
          >
            Create Account
          </button>

          {/* <p>Are you ready to sign  in ? <Link to='/sign-in'> Sign in</Link></p>  */}
        </form>
      </div>
    </>
  );
}

export default Form;
