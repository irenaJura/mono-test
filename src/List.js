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

  handleClick(e) {
    this.props.pagination.setPage(e.target.id);
  }

  render() {
    const { filter, isClicked } = this.props.store;

    const list = this.props.pagination.currentCars.map(vehicle => (
      <li key={vehicle.id}>
        <img src={require(`./${vehicle.src}`)} alt={vehicle.name} width={400} />
        <p>{vehicle.name}</p>
      </li>
    ));

    const pageNum = this.props.pagination.pageNumbers.map((num, i) => {
      return (
        <button key={i} id={num} onClick={this.handleClick.bind(this)}>
          {num}
        </button>
      );
    });

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
        <ul>{list}</ul>
        <p>{pageNum}</p>
      </>
    );
  }
}

export default List;
