import { action, computed, observable } from "mobx";
import store from "./Store";

class Pagination {
  @observable currentPage = 1;
  @observable carsPerPage = 2;
  @observable IndexOfLast = this.currentPage * this.carsPerPage;
  @observable IndexOfFirst = this.IndexOfLast - this.carsPerPage;

  @computed get currentCars() {
    return store.filteredVehicle.slice(this.IndexOfFirst, this.IndexOfLast);
  }

  @action setPage(x) {
    return (this.currentPage = x);
  }

  @computed get pageNumbers() {
    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(store.filteredVehicle.length / this.carsPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }
}

const pagination = new Pagination();

export default pagination;
