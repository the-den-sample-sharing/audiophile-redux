import React from "react";
import { Button } from "@mui/material";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/transparent-logo.png";
import { signOut } from "../../services/auth";

export default function Navbar() {
  const handleLogoutOut = async () => {
    await signOut();
  };

  return (
    <header className="nav-bar">
      <div className="nav-left">
        <Link>
          <div className="the-den">
            <img className="logo" src={logo} alt="logo"></img>
            <h3>Audiophile</h3>
          </div>
        </Link>
      </div>

      <div className="sign-in-up">
        <Button onClick={() => handleLogoutOut()}>Logout</Button>
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
}
