import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="navBarDiv">
      <ul className="ulDivNavBar">
        <li className="liNavBar">
          <Link to="/" className="linkItem">
            Home
          </Link>
        </li>
        <div className="loginInfo">
          <li className="liNavBar">
            <Link to="/Registro" className="linkItem">
              Registro
            </Link>
          </li>
          <li className="liNavBar">
            <Link to="/Login" className="linkItem">
              Login
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default NavBar;
