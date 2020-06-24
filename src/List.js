import React, { Component } from "react";
import PaginationComponent from "./PaginationComponent";
import Car from "./Car";
import { observer, inject } from "mobx-react";
import pagination from "./Pagination";

@inject("store", "pagination")
@observer
class List extends Component {
  updateSeachText = (e) => {
    this.props.store.searchTerm(e.target.value);
    pagination.currentPage = 1;
  };
  render() {
    const { filter, filteredVehicle, isSorted, toggleSort } = this.props.store;
    const { firstIndex, lastIndex } = this.props.pagination;

    const currentCars = filteredVehicle.slice(firstIndex, lastIndex);

    return (
      <>
        <input
          className="filter"
          value={filter}
          onChange={this.updateSeachText}
          placeholder="Search vehicles"
        />
        <input
          className="button"
          type="button"
          value={isSorted ? "Random order" : "Sort alphabetically"}
          onClick={toggleSort}
        />
        <ul>
          {currentCars.length > 0 ? (
            currentCars.map((vehicle) => (
              <li key={vehicle.id}>
                <Car vehicle={vehicle} />
              </li>
            ))
          ) : (
            <p>Sorry, no vehicles found. Please, try again...</p>
          )}
        </ul>
        <PaginationComponent currentCars={currentCars} />
      </>
    );
  }
}

export default List;
