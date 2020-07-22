import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import CarList from "../components/CarList";
import Pagination from "../components/Pagination";
import { observer, inject } from "mobx-react";

@inject("store", "pagination")
@observer
class Layout extends Component {
  render() {
    const { filteredVehicle } = this.props.store;
    const { firstIndex, lastIndex } = this.props.pagination;

    const currentCars = filteredVehicle.slice(firstIndex, lastIndex);

    return (
      <>
        <Navigation />
        <Filter />
        <Sort />
        <CarList currentCars={currentCars} />
        <Pagination currentCars={currentCars} />
      </>
    );
  }
}

export default Layout;
