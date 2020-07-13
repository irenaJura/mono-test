import React, { Component } from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import EditForm from "./EditForm";

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
          <img
            src={require(`../${vehicle.src}`)}
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
        <input
          type="button"
          value="Edit"
          onClick={() => this.handleEdit(vehicle)}
        />
        {this.props.store.currentMake.editing && <EditForm vehicle={vehicle} />}
      </>
    );
  }
}

export default Car;
