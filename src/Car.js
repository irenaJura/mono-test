import React, { Component } from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";

@inject("store")
@observer
class Car extends Component {
  handleDelete = (vehicle) => {
    this.props.store.deleteMake(vehicle.id);
  };
  render() {
    const { vehicle } = this.props;
    return (
      <>
        <Link to={vehicle.id + "/" + vehicle.name}>
          <img
            src={require(`./${vehicle.src}`)}
            alt={vehicle.name}
            width={400}
          />
          <p>{vehicle.name}</p>
        </Link>
        <input
          type="button"
          value="Delete"
          onClick={() => this.handleDelete(vehicle)}
        />
      </>
    );
  }
}

export default Car;
