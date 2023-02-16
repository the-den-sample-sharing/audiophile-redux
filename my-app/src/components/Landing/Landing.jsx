import React from "react";
import "./Landing.css";
import Header from "../Header/Header";
import About from "../About/About";
import { NavLink } from "react-router-dom";

export default function Landing() {
  return (
    <div className="hero-body">
      <Header />
      <div className="hero-main">
        <div className="hero-text-container">
          <h1 className="hero-text">Welcome to The Den</h1>
          <NavLink to={<About />}>
            <button className="learn-more-btn">Learn more</button>
          </NavLink>
        </div>
      </div>
      <div className="about-landing">
        <About />
      </div>
    </div>
  );
}
