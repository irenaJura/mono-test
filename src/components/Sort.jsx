import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject("store")
@observer
class Sort extends Component {
    render() {
        const { toggleSort } = this.props.store;
        return (
            <label className="dropdown-container">Sort by: {" "}
                <select className="dropdown" onChange={toggleSort}>
                    <option className="dropdown-option" value="asc">A-Z</option>
                    <option className="dropdown-option" value="desc">Z-A</option>
                </select>
            </label>
        );
    }
}

export default Sort;