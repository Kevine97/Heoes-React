import React, { useContext, useState } from "react";
import AuthContext from "../../auth/AuthContext";
import Types from "../../types/Types";

const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const [name, setName] = useState("");
  console.log(name);
  const handleLogin = (e) => {
    e.preventDefault();
    // history.push("/");

    if (name === "") {
      return;
    }

    dispatch({
      type: Types.login,
      payload: {
        name: name,
      },
    });
    history.replace("/");
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <form onSubmit={handleLogin}>
        <input
          type="text"
          autoComplete="off"
          className="form-control mb-3"
          placeholder="Digite su nombre"
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          login
        </button>
      </form>
    </div>
  );
};

export default LoginScreen;
