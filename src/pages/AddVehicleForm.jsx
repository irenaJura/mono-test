import React, { Component } from 'react';
import ImageUpload from "./ImageUpload";
import { Form, Button } from "react-bootstrap";
import { inject, observer } from 'mobx-react';

@inject("store")
@observer
class AddVehicleForm extends Component {
    handleInputChange = (e) => {
        const { name, value } = e.target

        this.props.store.initialFormState = { ...this.props.store.initialFormState, [name]: value }
    }
    render() {
        const { name } = this.props.store.initialFormState;
        const { abrv } = this.props.store.initialFormState;
        return (
            <Form onSubmit={(event) => {
                event.preventDefault()
                if (!name || !abrv) return
                this.props.store.addVehicle(this.props.store.initialFormState);
                this.props.store.initialFormState = { id: "", name: "", abrv: "", src: "" }
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
                <ImageUpload />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

export default AddVehicleForm;