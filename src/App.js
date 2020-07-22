import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./layouts/Layout";
import VehicleModel from "./components/VehicleModel";
import EditPage from "./pages/EditPage";
import NotFound from "./pages/NotFoundPage";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/edit" component={EditPage} />
        <Route path="/:id/:name" component={VehicleModel} />
        <Route exact path="/" component={Layout} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" component={NotFound} />
      </Switch>
    </>
  );
};

export default App;
