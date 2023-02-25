import React, { useRef } from "react";
import "./CreateProfile.css";
import logo from "../../assets/transparent-logo.png";
import { Button, TextField, Avatar } from "@mui/material";
import useAvatar from "../../hooks/useAvatar";
import { Link, useNavigate } from "react-router-dom";

import { Form } from "react-bootstrap";

export default function CreateProfile() {
  return (
    <div>
      <div className="auth-body">
        <div className="auth-main">
          <div className="login-header">
            <img className="login-logo" src={logo} alt="logo"></img>
            <h1>Audiophile</h1>
          </div>
          <div className="login-message">
            <p>Create your custom profile.</p>
          </div>

          <div className="input-container">
            <Form className="input-form">
              <div className="photo-container">
                <label>Add Profile photo:</label>
                <input
                  className="photo-input"
                  name="image"
                  type="file"
                  accept="*/"
                  // onChange={(e) => {
                  //   setImageFile(e.target.files[0]);
                  //   uploader(e);
                  // }}
                ></input>
                <Avatar
                  // src={result}
                  // ref={imageRef}
                  sx={{ width: 100, height: 100 }}
                />
              </div>
              <Form.Group className="name-inputs">
                <TextField
                  // id="outlined-basic"
                  label="First name"
                  variant="outlined"
                />
                <TextField
                  label="Last Name"
                  variant="outlined"
                  autoComplete="none"
                />
              </Form.Group>

              <Form.Group className="username-input">
                <TextField
                  label="Username"
                  variant="outlined"
                  autoComplete="none"
                />
              </Form.Group>
              <Form.Group className="bio-input">
                <TextField label="Bio (optional)" variant="outlined" />
              </Form.Group>
              <Button
                variant="contained"
                className="login-button"
                size="small"
                type="submit"
                style={{ height: "6vh", width: "10vw" }}
              >
                Create Profile
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
