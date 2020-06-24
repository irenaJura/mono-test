import React from "react";
import { Route, Switch } from "react-router-dom";
import List from "./List";
import VehicleModel from "./VehicleModel";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/:id/:name" component={VehicleModel} />
        <Route exact path="/" component={List} />
      </Switch>
    </>
  );
};

export default App;
