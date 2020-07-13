import React, { Component } from 'react';
import Car from "./Car";
import { inject, observer } from "mobx-react";

@inject("store", "pagination")
@observer
class CarList extends Component {
    render() {
        const { currentCars } = this.props;
        return (
            <ul>
                {currentCars.length > 0 ?
                    currentCars.map(vehicle => (
                        <li key={vehicle.id}>
                            <Car vehicle={vehicle} />
                        </li>
                    ))
                    :
                    <p>Sorry, no vehicles found. Please, try again...</p>
                }
            </ul>
        );
    }
}

export default CarList;