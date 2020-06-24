import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("store")
@observer
class VehicleModel extends Component {
  render() {
    const { vehicleMake } = this.props.store;
    const urlParams = this.props.match.params;
    return (
      <div className="models">
        <h2>{urlParams.name}</h2>
        <ul>
          {vehicleMake.map((make) =>
            make.vehicleModel
              .filter((model) => model.makeId === parseInt(urlParams.id))
              .map((m) => (
                <li key={m.id}>
                  <img src={require(`./${m.src}`)} alt={m.name} width={400} />
                  <p>{m.name}</p>
                </li>
              ))
          )}
        </ul>
      </div>
    );
  }
}

export default VehicleModel;
