import React, { Component } from 'react';
import PaginationStore from "../stores/PaginationStore";
import { inject, observer } from 'mobx-react';
import { Form, FormControl, Button } from "react-bootstrap";

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
            <Form inline className="searchBar">
                <FormControl
                    type="text"
                    value={filter}
                    onChange={this.updateSeachText}
                    placeholder="Search vehicles"
                    className="mr-sm-2"
                />
                <Button variant="outline-primary">Search</Button>
            </Form>
        );
    }
}

export default Filter;