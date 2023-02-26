import React, { useEffect } from "react";
import "./UserProfile.css";
import loader from "../../assets/loading-gif.gif";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  getLoadStatus,
  getUserProfile,
} from "../../features/profile/profileSlice";

export default function UserProfile() {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.profile.profileData);
  const status = useSelector(getLoadStatus);
  console.log(status);

  console.log("profileeee", userProfile);
  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  if (status === "idle") {
    return (
      <div className="user-profile-body">
        <div className="loader-container">
          <img src={loader} alt="loader" />
        </div>
      </div>
    );
  }
  if (status === "succeeded")
    return (
      <div className="user-profile-body">
        <div className="user-profile-main">
          <div className="user-profile-top-grid">
            <div className="avatar-name-container">
              <div className="avatar">
                <Avatar sx={{ width: 80, height: 80 }} />
              </div>
              <div className="name-container">
                <div className="full-name">
                  {userProfile.firstName} {userProfile.lastName}
                </div>
                <div className="user-name">{userProfile.username}</div>
              </div>
            </div>
          </div>
          <div className="user-profile-bottom-grid">
            <div className="bio-container">
              <p className="bio">{userProfile.bio}</p>
            </div>
          </div>
        </div>
      </div>
    );
}
