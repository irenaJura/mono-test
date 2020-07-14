import React, { Component } from "react";
import Navigation from "./Navigation";
import { observer, inject } from "mobx-react";

@inject("store")
@observer
class VehicleModel extends Component {
  handleDelete = (m) => {
    this.props.store.deleteModel(m.id);
  };
  render() {
    const { vehicleMake } = this.props.store;
    const urlParams = this.props.match.params;
    return (
      <>
        <Navigation />
        <div className="models">
          <h2>{urlParams.name}</h2>
          <ul>
            {vehicleMake.map(make => make.vehicleModel
              .filter((model) => model.makeId === parseInt(urlParams.id))
              .map(m => (
                <li key={m.id}>
                  <img src={require(`../${m.src}`)} alt={m.name} width={400} />
                  <h4>{m.name}</h4>
                </li>
              ))
            )}
          </ul>
        </div>
      </>
    );
  }
}

export default VehicleModel;
