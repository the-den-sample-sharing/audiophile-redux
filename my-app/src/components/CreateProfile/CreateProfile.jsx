import React, { useRef } from "react";
import "./CreateProfile.css";
import logo from "../../assets/transparent-logo.png";
import { Button, TextField, Avatar } from "@mui/material";
import useAvatar from "../../hooks/useAvatar";
import { Link, useNavigate } from "react-router-dom";
import {
  setFirstName,
  setBio,
  setLastName,
  setUsername,
  getFirstName,
  getLastName,
  getUsername,
  getBio,
  getProfileData,
  createProfile,
} from "../../features/profile/profileSlice";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

export default function CreateProfile() {
  const dispatch = useDispatch();
  const lastName = useSelector(getLastName);
  const firstName = useSelector(getFirstName);
  const username = useSelector(getUsername);
  const bio = useSelector(getBio);

  const handleSubmitProfile = (e, firstName, lastName, username, bio) => {
    e.preventDefault();
    dispatch(
      createProfile({
        firstName: firstName,
        lastName: lastName,
        username: username,
        bio: bio,
      })
    );
  };

  return (
    <div>
      <div className="create-profile-body">
        <div className="create-profile-main">
          <div className="create-profile-header">
            <img className="login-logo" src={logo} alt="logo"></img>
            <h1>Audiophile</h1>
          </div>
          <div className="create-profile-message">
            <p>Create your custom profile.</p>
          </div>

          <div className="profile-input-container">
            <Form
              className="input-form"
              onSubmit={(e) => {
                handleSubmitProfile(e, firstName, lastName, username, bio);
              }}
            >
              <div className="photo-container">
                <label>Add Profile photo:</label>
                <input
                  className="photo-input"
                  name="image"
                  type="file"
                  accept="*/"
                ></input>
                <Avatar sx={{ width: 100, height: 100 }} />
              </div>
              <Form.Group className="first-name-input">
                <TextField
                  label="First Name"
                  variant="outlined"
                  autoComplete="none"
                  onChange={(e) => {
                    dispatch(setFirstName(e.target.value));
                  }}
                />
              </Form.Group>
              <Form.Group className="last-name-input">
                <TextField
                  label="Last Name"
                  variant="outlined"
                  autoComplete="none"
                  onChange={(e) => {
                    dispatch(setLastName(e.target.value));
                  }}
                />
              </Form.Group>

              <Form.Group className="username-input">
                <TextField
                  label="Username"
                  variant="outlined"
                  autoComplete="none"
                  onChange={(e) => {
                    dispatch(setUsername(e.target.value));
                  }}
                />
              </Form.Group>
              <Form.Group className="bio-input">
                <TextField
                  label="Bio (optional)"
                  variant="outlined"
                  onChange={(e) => {
                    dispatch(setBio(e.target.value));
                  }}
                />
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
