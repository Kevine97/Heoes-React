import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark py-3">
      <Link className="navbar-brand" to="/">
        Heroes app
      </Link>

      {/* <div className="navbar-collapse "> */}
        <ul className="navbar-nav ml-auto">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link "
            exact
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link "
            exact
            to="/search"
          >
            Search
          </NavLink>

        </ul>
      {/* </div> */}

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <NavLink
            activeClassName="active"
            className="btn btn-primary nav-item nav-link text-white"
            exact
            to="/login"
          >
            Logout
          </NavLink>
        </ul>
      </div>
      <div className="animation start-home"></div>
    </nav>
  );
};

export default Navbar;
