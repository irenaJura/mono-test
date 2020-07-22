import React, { Component } from 'react';
import { Table, Button } from "react-bootstrap";
import { inject, observer } from 'mobx-react';

@inject("store")
@observer
class VehicleTable extends Component {
    handleDelete = (vehicle) => {
        this.props.store.deleteMake(vehicle.id);
    };
    render() {
        const { vehicleMake } = this.props.store;
        return (
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Abrv</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicleMake.length > 0 ?
                        vehicleMake.map(vehicle => (
                            <tr key={vehicle.id}>
                                <td>{vehicle.id}</td>
                                <td>{vehicle.name}</td>
                                <td>{vehicle.abrv}</td>
                                <td>
                                    <Button
                                        variant="primary"
                                        style={{ marginRight: 5 }}
                                        onClick={() => this.props.store.editRow(vehicle)}>Edit</Button>
                                    <Button
                                        variant="danger"
                                        onClick={() => { if (window.confirm(`Are you sure you want to permanently delete ${vehicle.name}?`)) { this.handleDelete(vehicle) }; }}>Delete</Button>
                                </td>
                            </tr>
                        ))
                        :
                        <tr>
                            <td colSpan={4}>No vehicles found at the moment. Please, refresh the page...</td>
                        </tr>
                    }
                </tbody>
            </Table>
        )

    }
}
export default VehicleTable;