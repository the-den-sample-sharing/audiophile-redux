import React from "react";
import "./UserProfile.css";
import { Avatar } from "@mui/material";

export default function UserProfile() {
  return (
    <div className="user-profile-body">
      <div className="user-profile-main">
        <div className="user-profile-top-grid">
          <div className="avatar-name-container">
            <div className="avatar">
              <Avatar sx={{ width: 80, height: 80 }} />
            </div>
            <div className="name-container">
              <div className="full-name">Kyle McCall</div>
              <div className="user-name">username</div>
            </div>
          </div>
        </div>
        <div className="user-profile-bottom-grid">
          <div className="bio-container">
            <p className="bio">niolshdf ljsjhflkasdlfk ljshldfhladshf</p>
          </div>
        </div>
      </div>
    </div>
  );
}
