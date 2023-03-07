import React from "react";
import { Button, TextField } from "@mui/material";
import { Form } from "react-bootstrap";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmail,
  setPassword,
  createUser,
  getUserEmail,
  getUserPassword,
  logIn,
} from "../../../features/user/userSlice";
import logo from "../../../assets/transparent-logo.png";
import loadingGif from "../../../assets/loading-gif.gif";

export default function SignUp() {
  const dispatch = useDispatch();

  const email = useSelector(getUserEmail);
  const password = useSelector(getUserPassword);

  const handleSignup = (e, email, password) => {
    e.preventDefault();
    dispatch(createUser({ email: email, password: password }));
  };

  return (
    <div className="auth-body">
      <div className="auth-main">
        <div className="login-header">
          <img className="login-logo" src={logo} alt="logo"></img>
          <h1>Audiophile</h1>
        </div>
        <div className="login-message">
          <p className="create-account">Create your free account</p>
          <p className="unlock">Unlock new skills and sounds.</p>
        </div>
        <div className="input-container">
          <Form
            className="input-form"
            onSubmit={(e) => handleSignup(e, email, password)}
          >
            <Form.Group className="email-container">
              <TextField
                label="Email"
                variant="outlined"
                id="email"
                onChange={(e) => dispatch(setEmail(e.target.value))}
              />
            </Form.Group>

            <Form.Group className="password-container">
              <TextField
                name="Password"
                label="Password"
                variant="outlined"
                id="password"
                type="password"
                autoComplete="none"
                onChange={(e) => dispatch(setPassword(e.target.value))}
              />
            </Form.Group>
            <Button
              variant="contained"
              className="auth-button"
              size="small"
              type="submit"
              style={{ height: "6vh", width: "10vw" }}
            >
              Create Account
            </Button>
            <p>
              Already have an account? <Link to="/sign-in">Sign in</Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
  // }
  // if (status === "loading") {
  //   return (
  //     <div className="auth-body">
  //       <div className="auth-main">
  //         <div className="login-header">
  //           <img className="login-logo" src={logo} alt="logo"></img>
  //           <h1>Audiophile</h1>
  //         </div>
  //         <div className="login-message">
  //           <p className="create-account">Create your free account</p>
  //           <p className="unlock">Unlock new skills and sounds.</p>
  //         </div>
  //         <div className="loading-container">
  //           <div>
  //             <img src={loadingGif} alt="loader" />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
}
