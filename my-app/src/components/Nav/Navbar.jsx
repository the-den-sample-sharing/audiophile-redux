import React, { useContext } from "react";
import { Button } from "@mui/material";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Logo from "./assets/turn.png";
import { UserContext } from "../../context/userContext";
import UserLogo from "./assets/user.png";

export default function Header() {
  const { user } = useContext(UserContext);

  console.log(user);

  if (!user) {
    return (
      <header className="nav-bar">
        <div className="nav-left">
          <div className="the-den">
            <img src={Logo} className="logo"></img>
            <h3>The Den</h3>
          </div>
          <div className="nav-links">
            <NavLink to="/browse" style={{ color: "rgb(178, 178, 178)" }}>
              <p className="browse">Browse</p>
            </NavLink>

            <NavLink to="/sell" style={{ color: "rgb(178, 178, 178)" }}>
              <p className="sell">Sell</p>
            </NavLink>

            <NavLink to="/lessons" style={{ color: "rgb(178, 178, 178)" }}>
              <p className="lessons">Lessons</p>
            </NavLink>
          </div>
        </div>

        <div className="sign-in-up">
          <NavLink to="/log-in">
            <Button size="small">Login</Button>
          </NavLink>
          <NavLink to="sign-up">
            <Button variant="contained" size="small">
              Sign up
            </Button>
          </NavLink>
        </div>
      </header>
    );
  } else {
    return (
      <header className="nav-bar">
        <div className="nav-left">
          <div className="the-den">
            <img src={Logo} className="logo"></img>
            <h3>The Den</h3>
          </div>
          <div className="nav-links">
            <NavLink to="/browse" style={{ color: "rgb(178, 178, 178)" }}>
              <p className="browse">Browse</p>
            </NavLink>

            <NavLink to="/sell" style={{ color: "rgb(178, 178, 178)" }}>
              <p className="sell">Sell</p>
            </NavLink>

            <NavLink to="/lessons" style={{ color: "rgb(178, 178, 178)" }}>
              <p className="lessons">Lessons</p>
            </NavLink>
          </div>
        </div>
        <button>Logout</button>
        <div className="profile-nav">
          <img className="user-logo" src={UserLogo} />
        </div>
      </header>
    );
  }
}
