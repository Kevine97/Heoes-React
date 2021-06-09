import React, { useContext } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import AuthContext from "../../auth/AuthContext";
import Types from "../../types/Types";

const Navbar = ({ history }) => {
  const {
    user: { name },
    dispatch,
  } = useContext(AuthContext);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({
      type: Types.logout,
    });
    history.replace("/login");
  };
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
          <span className="nav-item nav-link mr-5 text-white">{name}</span>
          <button
            className="btn btn-primary nav-item nav-link text-white"
            onClick={handleLogout}
          >
            Logout
          </button>
        </ul>
      </div>
      <div className="animation start-home"></div>
    </nav>
  );
};

export default withRouter(Navbar);
