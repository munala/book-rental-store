import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import ProtectedRoute from "../wrappers/ProtectedRoute";
import BooksPage from "../pages/Books";
import RegisterPage from "../pages/Register";
import LoginPage from "../pages/Login";
import PageNotFoundPage from "../pages/PageNotFound";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={RegisterPage} exact />
        <Route path="/login" component={LoginPage} exact />

        <ProtectedRoute path="/books" Component={BooksPage} exact />
        <Route path="/" render={() => <Redirect to="/books" />} exact />
        <Route component={PageNotFoundPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
