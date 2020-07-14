import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import VehicleModel from "./components/VehicleModel";
import EditPage from "./pages/EditPage";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/edit" component={EditPage} />
        <Route path="/:id/:name" component={VehicleModel} />
        <Route exact path="/" component={Layout} />
      </Switch>
    </>
  );
};

export default App;
