import React, { useContext } from "react";
import { Button } from "@mui/material";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="nav-bar">
      <div className="nav-left">
        <div className="the-den">
          <img className="logo" alt="logo"></img>
          <h3>The Den</h3>
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
