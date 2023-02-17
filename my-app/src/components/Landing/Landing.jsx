import React from "react";
import "./Landing.css";
import Navbar from "../Nav/Navbar";
import About from "../About/About";
import { NavLink } from "react-router-dom";

export default function Landing() {
  return (
    <div className="hero-body">
      <Navbar />
      <div className="hero-main">
        <div className="hero-text-container">
          <h1 className="hero-text">Welcome to The Den</h1>

          <button className="learn-more-btn">Learn more</button>
        </div>
      </div>
      <div className="about-landing">
        <About />
      </div>
    </div>
  );
}
