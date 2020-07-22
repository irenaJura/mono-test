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
            {vehicleMake.map(make => make.vehicleModel ?
              make.vehicleModel.filter((model) => model.makeId === parseInt(urlParams.id))
                .map(m => {
                  return (
                    <li key={m.id} >
                      <div className="car-card">
                        <img src={`/${m.src}`} alt={m.name} width={360} />
                        <h4 className="name">{m.name}</h4>
                      </div>
                    </li>
                  )
                })
              : (<p>Sorry, no models available yet</p>)
            )}
          </ul>
        </div>
      </>
    );
  }
}

export default VehicleModel;
