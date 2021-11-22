import { Route, Switch } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { Register } from "../pages/registration";
import { Home } from "../pages/home";
import { useEffect, useState } from "react";
import { Login } from "../pages/login";

export const Router = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Hud:token"));
    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);
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
          buttonPopup={buttonPopup}
          setButtonPopup={setButtonPopup}
          data={data}
        />
      </Route>
    </Switch>
  );
};
