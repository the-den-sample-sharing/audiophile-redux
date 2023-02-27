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
  setAvatarFile,
  getFirstName,
  getLastName,
  getUsername,
  getBio,
  getProfileData,
  createProfile,
  getAvatarFile,
} from "../../features/profile/profileSlice";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

export default function CreateProfile() {
  const dispatch = useDispatch();
  const lastName = useSelector(getLastName);
  const firstName = useSelector(getFirstName);
  const username = useSelector(getUsername);
  const bio = useSelector(getBio);
  const avatarFile = useSelector(getAvatarFile);

  // const uploader = (e, dispatch) => {
  //   const imageFile = e.target.files[0];
  //   const reader = new FileReader();
  //   reader.addEventListener("load", (e) => {
  //     dispatch(setAvatarFile(e.target.result));
  //   });
  //   reader.readAsDataURL(imageFile);
  // };

  const handleSubmitProfile = (
    e,
    firstName,
    lastName,
    username,
    bio,
    avatarFile,
    dispatch
  ) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("username", username);
    formData.append("bio", bio);
    if (avatarFile) {
      formData.append("avatar", avatarFile);
    }
    dispatch(createProfile(formData));
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
                handleSubmitProfile(
                  e,
                  firstName,
                  lastName,
                  username,
                  bio,
                  avatarFile,
                  dispatch
                );
              }}
            >
              <Form.Group className="photo-container">
                <label>Add Profile photo:</label>
                <Form.Control
                  className="photo-input"
                  name="avatar"
                  type="file"
                  accept="/*"
                  onChange={(e) => {
                    dispatch(setAvatarFile(e.target.files[0]));
                  }}
                ></Form.Control>
                <Avatar sx={{ width: 100, height: 100 }} />
              </Form.Group>
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
