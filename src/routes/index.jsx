import { Route, Switch } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { Register } from "../pages/registration";
import { Home } from "../pages/home";
import { useEffect, useState } from "react";
import { Login } from "../pages/login";
import { api } from "../service";

export const Router = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [data, setData] = useState([]);
  const [works, setWorks] = useState([]);
  const [technology, setTechnology] = useState([]);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Hud:token"));
    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  function loadWorks() {
    api
      .get(`/users/${JSON.parse(localStorage.getItem("@Hud:user")).id}`)
      .then((response) => {
        localStorage.setItem("@Hud:user", JSON.stringify(response.data));
        setWorks(response.data.works);
      });
  }
  function loadTechs() {
    api
      .get(`/users/${JSON.parse(localStorage.getItem("@Hud:user")).id}`)
      .then((response) => {
        localStorage.setItem("@Hud:user", JSON.stringify(response.data));
        setTechnology(response.data.techs);
      });
  }
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
          loadTechs={loadTechs}
          loadWorks={loadWorks}
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
          works={works}
          setWorks={setWorks}
          loadWorks={loadWorks}
          technology={technology}
          setTechnology={setTechnology}
          loadTechs={loadTechs}
        />
      </Route>
    </Switch>
  );
};
