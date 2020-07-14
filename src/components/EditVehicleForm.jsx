import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import { inject, observer } from 'mobx-react';

@inject("store")
@observer
class EditVehicleForm extends Component {
    handleInputChange = (e) => {
        const { name, value } = e.target

        this.props.store.currentVehicle = { ...this.props.store.currentVehicle, [name]: value }
    }
    setEditing = () => {
        this.props.store.editing = false;
    }
    render() {
        const { name } = this.props.store.currentVehicle;
        const { abrv } = this.props.store.currentVehicle;
        const { id } = this.props.store.currentVehicle;
        return (
            <Form onSubmit={(event) => {
                event.preventDefault()
                if (!name || !abrv) return;

                this.props.store.updateMake(id, this.props.store.currentVehicle)
                this.props.store.currentVehicle = { id: "", name: "", abrv: "", src: "" }
            }}>
                <Form.Group controlId="formBasic">
                    <Form.Label>Vehicle name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleInputChange} />
                </Form.Group>
                <Form.Group controlId="formBasic">
                    <Form.Label>Abbreviation</Form.Label>
                    <Form.Control
                        type="text"
                        name="abrv"
                        value={abrv}
                        onChange={this.handleInputChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>{' '}
                <Button
                    variant="primary" type="submit"
                    onClick={this.setEditing}
                >
                    Cancel
                </Button>
            </Form>
        )
    }
}

export default EditVehicleForm;