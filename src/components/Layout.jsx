import React, { Component } from "react";
import Navigation from "./Navigation";
import Filter from "./Filter";
import Sort from "./Sort";
import CarList from "./CarList";
import Pagination from "./Pagination";
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
