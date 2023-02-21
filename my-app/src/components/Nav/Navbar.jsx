import React from "react";
import { Button } from "@mui/material";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/transparent-logo.png";
import { Store } from "@reduxjs/toolkit";
import { store } from "../../app/store";
import { getUser } from "../../features/user/userSlice";

export default function Navbar() {
  return (
    <header className="nav-bar">
      <div className="nav-left">
        <div className="the-den">
          <img className="logo" src={logo} alt="logo"></img>
          <h3>Audiophile</h3>
        </div>
        {/* <div className="nav-links">
          <NavLink to="/browse" style={{ color: "rgb(178, 178, 178)" }}>
            <p className="browse">Browse</p>
          </NavLink>

          <NavLink to="/sell" style={{ color: "rgb(178, 178, 178)" }}>
            <p className="sell">Sell</p>
          </NavLink>

          <NavLink to="/lessons" style={{ color: "rgb(178, 178, 178)" }}>
            <p className="lessons">Lessons</p>
          </NavLink>
        </div> */}
      </div>

      <div className="sign-in-up">
        <Link to="/login" replace>
          <Button size="small">Login</Button>
        </Link>
        <Link to="/sign-up" replace>
          <Button variant="contained" size="small">
            Sign up
          </Button>
        </Link>
      </div>
    </header>
  );
  //  else {
  //   return (
  //     <header className="nav-bar">
  //       <div className="nav-left">
  //         <div className="the-den">
  //           <img className="logo" alt="logo"></img>
  //           <h3>The Den</h3>
  //         </div>
  //         <div className="nav-links">
  //           <NavLink to="/browse" style={{ color: "rgb(178, 178, 178)" }}>
  //             <p className="browse">Browse</p>
  //           </NavLink>

  //           <NavLink to="/sell" style={{ color: "rgb(178, 178, 178)" }}>
  //             <p className="sell">Sell</p>
  //           </NavLink>

  //           <NavLink to="/lessons" style={{ color: "rgb(178, 178, 178)" }}>
  //             <p className="lessons">Lessons</p>
  //           </NavLink>
  //         </div>
  //       </div>
  //       <button>Logout</button>
  //       <div className="profile-nav">
  //         <img className="user-logo" alt="avatar" />
  //       </div>
  //     </header>
  //   );
  // }
}
