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
      <>
        <Link to={vehicle.id + "/" + vehicle.name}>
          {vehicle.src && <img
            src={require(`../${vehicle.src}`)}
            alt={vehicle.name}
            width={400}
          />}
        </Link>
        <h4 className="link">{vehicle.name}</h4>
      </>
    );
  }
}

export default Car;
