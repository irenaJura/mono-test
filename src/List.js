import React from "react";
import { observer } from "mobx-react";

@observer
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  filter(e) {
    this.props.store.filter = e.target.value;
  }
  toggleSort() {
    return (this.props.store.isClicked = !this.props.store.isClicked);
  }

  handleClick(e) {
    this.setState({ currentPage: e.target.id });
  }

  render() {
    const { filter, filteredVehicle, isClicked } = this.props.store;
    const currentCarsList = filteredVehicle.map(vehicle => (
      <li key={vehicle.id}>
        <img src={require(`./${vehicle.src}`)} alt={vehicle.name} width={400} />
        <p>{vehicle.name}</p>
      </li>
    ));

    const carsPerPage = 2;
    const indexOfLastCar = this.state.currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentCars = currentCarsList.slice(indexOfFirstCar, indexOfLastCar);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredVehicle.length / carsPerPage); i++) {
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
        <ul>{currentCars}</ul>
        <ul>
          {pageNumbers.map(number => {
            return (
              <button key={number} id={number} onClick={this.handleClick}>
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
