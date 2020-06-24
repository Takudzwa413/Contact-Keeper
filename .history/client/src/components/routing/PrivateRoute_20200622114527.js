import React, { useContext } from "react";
import AuthContext from "../../context/auth/authContext";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !loading ? (
          <React.Fragment>
            {console.log(isAuthenticated, loading)}
            <Redirect to='/login' />
          </React.Fragment>
        ) : (
          <React.Fragment>
            {console.log(isAuthenticated, loading)}
            <Component {...props} />
          </React.Fragment>
        )
      }
    />
  );
};
export default PrivateRoute;
