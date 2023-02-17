import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-main">
      <div className="catchy-container">
        <div className="attention-grabber">
          <h3 className="catchy-title">Catchy title</h3>
          <p>
            brief description of said catchy title. Do you not already want to
            use this wonderful application?
          </p>
        </div>
        <div className="synth-container">
          <img className="synth-img" alt="synth" />
        </div>
      </div>
    </div>
  );
}
