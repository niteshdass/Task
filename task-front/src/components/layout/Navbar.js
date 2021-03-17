import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
      

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
        
        
          </ul>
        </div>
        <Link className="btn btn-outline-light mr-2" to="/subject">Add Subject</Link>
        <Link className="btn btn-outline-light" to="/student">Add Student</Link>
      </div>
    </nav>
  );
};

export default Navbar;
