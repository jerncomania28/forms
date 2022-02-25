import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./Form.css";
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

  const passwordRef = useRef(null);

  // end of state declaration

  // states methods

  let handleName = (event) => {
    setName(event.target.value);
  };
  let handleEmail = (event) => {
    setEmail(event.target.value);
  };
  let handleCountry = (event) => {
    setCountry(event.target.value);
  };
  let handlePhone = (event) => {
    setPhone(event.target.value);
  };

  let handlePassword = (event) => {
    setPassword(event.target.value);
  };

  let handleCheckbox = (event) => {
    setCheck(!check);
  };

  //  handle submit function

  let handleSubmit = (event) => {
    console.log(name, email, country, phone, password);
    if(!passwordRef.current.value.includes(Number)){
       console.log("does not include number")
    }

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
            onChange={handleName}
            name="Name"
            className="input-design"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={handleEmail}
            name="Email"
            className="input-design"
          />
          <input
            type="text"
            placeholder="Country"
            value={country}
            onChange={handleCountry}
            name="Country"
            className="input-design"
          />
          <input
            type="Number"
            placeholder="Phone"
            value={phone}
            onChange={handlePhone}
            name="Phone"
            className="input-design"
          />
          <div className="password-section">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
              className="pass"
              name="Password"
              ref={passwordRef}
            />
            <FontAwesomeIcon
              icon={showPasswrd ? "fa-eye" : "fa-eye-slash"}
              id="visibility"
              onClick={(event) => {

    

                (!showPasswrd)
                ? (passwordRef.current.type = "text")
                : (passwordRef.current.type = "password")

                setShowPasswrd(!showPasswrd);

             ;

                //   console.log(passwordRef.current.type="text")
              }}
            />
          </div>
          <div className="checkbox">
            <input type="checkbox" onChange={handleCheckbox} /> <span>I accept terms &
            conditions</span>
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
