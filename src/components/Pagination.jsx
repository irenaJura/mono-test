import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("store", "pagination")
@observer
class Pagination extends Component {

  handleClick = (number) => {
    this.props.pagination.setPage(number);
  };

  render() {
    const { filteredVehicle } = this.props.store;
    const { carsPerPage, currentPage } = this.props.pagination;

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredVehicle.length / carsPerPage); ++i) {
      pageNumbers.push(i);
    }

    const numbers = pageNumbers.map((number, i) => (
      <button
        key={i}
        id={number}
        onClick={() => this.handleClick(number)}
        className={number === currentPage ? "page-item active" : "page-item"}
      >
        {number}
      </button>
    ));

    return <p>{filteredVehicle.length < carsPerPage + 1 ? null : numbers}</p>;
  }
}

export default Pagination;
