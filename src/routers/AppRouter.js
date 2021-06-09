import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "../components/login/LoginScreen";
import TypeRutas from "../types/TypeRutas";
import { DashboardRoutes } from "./DashboardRoutes";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={TypeRutas.login} component={LoginScreen} />
          <Route  path={TypeRutas.home} component={DashboardRoutes} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
