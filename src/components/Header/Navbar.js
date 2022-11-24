import React from "react";
import { NavbarStyle} from "./NavbarStyles";
import { Link } from "react-router-dom";

const Navbar = () => {


  return (
    <div className="navbar-wrapper">
      <NavbarStyle>
        <Link to="/" >
          HOME
        </Link>
        <Link to="/about" >
          ABOUT
        </Link>
        <Link to="/map" >
          SERVICE
        </Link>
        <Link to="/test" >
          TEST
        </Link>
      </NavbarStyle>

    </div>
  );
};

export { Navbar };
