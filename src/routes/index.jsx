import { Route, Switch } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { Register } from "../pages/registration";
import { Home } from "../pages/home";
import { useEffect, useState } from "react";
import { Login } from "../pages/login";

export const Router = ({ data, setData, authenticated, setAuthenticated }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home
          setAuthenticated={setAuthenticated}
          authenticated={authenticated}
        />
      </Route>
      <Route path="/login">
        <Login
          setAuthenticated={setAuthenticated}
          authenticated={authenticated}
          setData={setData}
        />
      </Route>
      <Route path="/register">
        <Register
          setAuthenticated={setAuthenticated}
          authenticated={authenticated}
        />
      </Route>
      <Route path="/dashboard">
        <Dashboard
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          data={data}
        />
      </Route>
    </Switch>
  );
};
