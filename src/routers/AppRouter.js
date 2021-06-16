import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthContext from "../auth/AuthContext";
import LoginScreen from "../components/login/LoginScreen";
import TypeRutas from "../types/TypeRutas";
import { DashboardRoutes } from "./DashboardRoutes";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={TypeRutas.login} component={LoginScreen} />
          <PrivateRouter
            isAuthenticated={user.logged}
            component={DashboardRoutes}
            path={TypeRutas.home}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
