import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import AddVehicleForm from './AddVehicleForm';
import VehicleTable from './VehicleTable';
import EditVehicleForm from '../components/EditVehicleForm';
import { Container, Row, Col } from "react-bootstrap";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class EditPage extends Component {
    render() {
        return (
            <>
                <Navigation />
                <Container style={{ marginTop: 20 }}>
                    <Row>
                        <Col md={4}>
                            {this.props.store.editing ?
                                (<>
                                    <h3>Edit vehicle</h3>
                                    <EditVehicleForm />
                                </>)
                                : (<>
                                    <h3>Add vehicle</h3>
                                    <AddVehicleForm />
                                </>)}
                        </Col>
                        <Col md={8}>
                            <h2>View vehicles</h2>
                            <VehicleTable />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default EditPage;