import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import VehicleModel from "./components/VehicleModel";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/:id/:name" component={VehicleModel} />
        <Route exact path="/" component={Layout} />
      </Switch>
    </>
  );
};

export default App;
