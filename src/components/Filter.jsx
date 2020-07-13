import React, { Component } from 'react';
import PaginationStore from "../stores/PaginationStore";
import { inject, observer } from 'mobx-react';

@inject("store", "pagination")
@observer
class Filter extends Component {
    updateSeachText = (e) => {
        this.props.store.searchTerm(e.target.value);
        PaginationStore.currentPage = 1;
    };
    render() {
        const { filter } = this.props.store;
        return (
            <input
                className="filter"
                value={filter}
                onChange={this.updateSeachText}
                placeholder="Search vehicles"
            />
        );
    }
}

export default Filter;