import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import TypeRutas from "../types/TypeRutas";

const PrivateRouter = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        (isAuthenticated) ? (
          <Component {...props} />
        ) : (
          <Redirect to={TypeRutas.login} />
        )
      }
    />
  );
};

export default PrivateRouter;

PrivateRouter.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
