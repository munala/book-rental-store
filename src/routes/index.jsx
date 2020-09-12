import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import ProtectedRoute from "../hoc/ProtectedRoute";
import BooksPage from "../pages/Books";
import RegisterPage from "../pages/Register";
import LoginPage from "../pages/Login";
import RentPage from "../pages/Rent";
import PageNotFoundPage from "../pages/PageNotFound";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={RegisterPage} exact />
        <Route path="/login" component={LoginPage} exact />

        <ProtectedRoute path="/books" Component={BooksPage} exact />
        <ProtectedRoute path="/rent" Component={RentPage} exact />
        <Route path="/" render={() => <Redirect to="/books" />} exact />
        <Route component={PageNotFoundPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
