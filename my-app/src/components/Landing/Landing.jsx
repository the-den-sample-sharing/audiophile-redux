import React from "react";
import "./Landing.css";
import About from "../About/About";
import { useDispatch } from "react-redux";
import { getUser } from "../../features/user/userSlice";

export default function Landing() {
  const dispatch = useDispatch();

  const handleGet = () => {
    dispatch(getUser());
  };

  return (
    <div className="hero-body">
      {/* <Permission user={user} permissions={['signedin']}>
        <TopPicks></TopPicks>
      </Permission>
      <Navbar />
      <Permission user={user} permissions={['signedin']}></Permission> */}
      <div className="hero-main">
        <div className="hero-text-container">
          <h1 className="hero-text">Welcome to Audiophile</h1>

          <button
            className="learn-more-btn"
            onClick={() => {
              handleGet();
            }}
          >
            Learn more
          </button>
        </div>
      </div>
      <div className="about-landing">
        <About />
      </div>
    </div>
  );
}
