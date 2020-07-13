import { computed, observable, action } from "mobx";

class Pagination {
  @observable currentPage = 1;
  @observable carsPerPage = 3;

  @computed get lastIndex() {
    return this.currentPage * this.carsPerPage;
  }

  @computed get firstIndex() {
    return this.lastIndex - this.carsPerPage;
  }

  @action
  setPage(num) {
    this.currentPage = num;
  }
}

const pagination = new Pagination();

export default pagination;
