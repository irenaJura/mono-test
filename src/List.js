import React from "react";
import { observer } from "mobx-react";

@observer
class List extends React.Component {
  filter(e) {
    this.props.store.filter = e.target.value;
  }
  toggleSort() {
    return (this.props.store.isClicked = !this.props.store.isClicked);
  }
  handleClick(number) {
    return (this.props.store.currentPage = number);
  }

  render() {
    const { filter, currentCars, isClicked } = this.props.store;
    const currentCarsList = currentCars.map(vehicle => (
      <li key={vehicle.id}>
        <img src={require(`./${vehicle.src}`)} alt={vehicle.name} width={400} />
        <p>{vehicle.name}</p>
      </li>
    ));

    const pageNumbers = [];
    for (
      let i = 1;
      i <=
      Math.ceil(
        this.props.store.vehicleMake.length / this.props.store.carsPerPage
      );
      i++
    ) {
      pageNumbers.push(i);
    }
    return (
      <>
        <input
          className="filter"
          value={filter}
          onChange={this.filter.bind(this)}
          placeholder="Search car brand"
        />
        <input
          className="button"
          type="button"
          value={isClicked ? "Random order" : "Sort alphabetically"}
          onClick={this.toggleSort.bind(this)}
        />
        <ul>{currentCarsList}</ul>
        <ul>
          {pageNumbers.map(number => {
            return (
              <button
                key={number}
                id={number}
                onClick={() => this.handleClick(number)}
              >
                {number}
              </button>
            );
          })}
        </ul>
      </>
    );
  }
}

export default List;
