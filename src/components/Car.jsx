import React, { Component } from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";

@inject("store")
@observer
class Car extends Component {
  handleEdit = (vehicle) => {
    this.props.store.editName(vehicle);
  }
  handleDelete = (vehicle) => {
    this.props.store.deleteMake(vehicle.id);
  };
  render() {
    const { vehicle } = this.props;
    return (
      <div className="car-card">
        <Link to={vehicle.id + "/" + vehicle.name}>
          <img
            src={`/${vehicle.src}`}
            alt={vehicle.name}
            width={360}
          />
        </Link>
        <h4 className="name">{vehicle.name}</h4>
      </div>
    );
  }
}

export default Car;
