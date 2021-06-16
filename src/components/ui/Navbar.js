import React, { useContext } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import AuthContext from "../../auth/AuthContext";
import TypeRutas from "../../types/TypeRutas";
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
    history.replace(TypeRutas.login);
  };
  return (
<nav className="navbar navbar-expand-lg navbar-dark activate">
    <Link className="navbar-brand logo ml-5" to={TypeRutas.home}>
        Her<img src="./assets/heroes/icons8_hulk_5.ico" className="logoImagen"/>es
        </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink
        activeClassName="active"
        className="nav-item nav-link"
        exact
        to={TypeRutas.marvel}
      >
        Marvel
      </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
        activeClassName="active"
        className="nav-item nav-link "
        exact
        to={TypeRutas.dc}
      >
        DC
      </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
        activeClassName="active"
        className="nav-item nav-link "
        exact
        to={TypeRutas.search}
      >
        Search
      </NavLink>
      </li>
    </ul>
    <div className="form-inline my-2 my-lg-0">
        <span className="nav-item nav-link mr-5 text-white d-flex justify-content-center align-items-center userBienvenido">
            <img src="./assets/heroes/faviconJocker.ico"/>{" "}
            Super Heroe: <b className="ml-2">{name}</b>
          </span>
          <button
            className="btn btn-primary nav-item nav-link text-white"
            onClick={handleLogout}
          >
            Logout
          </button>
    </div>
  </div>
</nav>
  );
};

export default withRouter(Navbar);
