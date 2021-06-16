import React, { useContext, useState } from "react";

import AuthContext from "../../auth/AuthContext";
import useForm from "../../hooks/useForm";
import Types from "../../types/Types";

const userRecordar = JSON.parse(localStorage.getItem("recordar")) || [];

const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);
  const [{ username, password }, handleInputChange] = useForm({
    username: userRecordar.username !== undefined ? userRecordar.username : "",
    password: userRecordar.password !== undefined ? userRecordar.password : "",
  });
  const [recordar, setRecordar] = useState(
    userRecordar.recordar !== undefined ? userRecordar.recordar : false
  );
  const handleLogin = (e) => {
    e.preventDefault();
    // history.push("/");

    if (username.trim() === "" || password.trim() === "") {
      return;
    }

    dispatch({
      type: Types.login,
      payload: {
        name: username,
      },
    });
    history.replace("/");
    if (recordar) {
      localStorage.removeItem("recordar");
      localStorage.setItem(
        "recordar",
        JSON.stringify({ username, password, recordar })
      );
    } else {
      localStorage.removeItem("recordar");
    }
  };

  const backgroundLogin =
    "https://www.dccomics.com/sites/all/themes/dc_comics_bp/images/footer-bg.jpg";

  return (
    // <div style={{backgroundImage: `url(${backgroundLogin})`}}>
      <div className="container mt-5">
        <div className="row ">
          <div className="col-lg-8 col-md-8 mx-auto">
            <div className="login-div" style={{ backgroundColor: "#fff" }}>
              <h1
                className="text-center"
                style={{ fontSize: 55, letterSpacing: 7 }}
              >
                Login
              </h1>
              <hr />
              <h3 className="mb-5 mt-4 text-center logo">
                Her
                <img
                  src="./assets/heroes/icons8_hulk_5.ico"
                  className="logoImagen"
                  alt="Logo"
                />
                es
              </h3>
              <form onSubmit={handleLogin}>
                <input
                  type="text"
                  autoComplete="off"
                  className="form-control mb-3"
                  name="username"
                  placeholder="Digite su nombre"
                  onChange={handleInputChange}
                  value={username}
                />
                <input
                  type="password"
                  autoComplete="off"
                  className="form-control mb-3"
                  name="password"
                  placeholder="Ingese su contraseña"
                  value={password}
                  onChange={handleInputChange}
                />
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    checked={recordar}
                    onChange={(e) => setRecordar(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Recordar este usuario
                  </label>
                </div>
                <button className="btn btn-primary btn-block" type="submit">
                  login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default LoginScreen;
