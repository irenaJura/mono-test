import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import { inject, observer } from 'mobx-react';
import ImageUpload from '../pages/ImageUpload';

@inject("store")
@observer
class EditVehicleForm extends Component {
    handleInputChange = (e) => {
        const { name, value } = e.target

        this.props.store.initialFormState = { ...this.props.store.initialFormState, [name]: value }
    }
    setEditing = () => {
        this.props.store.editing = false;
    }
    render() {
        const { name } = this.props.store.initialFormState;
        const { abrv } = this.props.store.initialFormState;
        const { id } = this.props.store.initialFormState;
        return (
            <Form onSubmit={(event) => {
                event.preventDefault()
                if (!name || !abrv) return;

                this.props.store.updateMake(id, this.props.store.initialFormState)
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
                <Button
                    variant="primary"
                    type="submit"
                    style={{ marginTop: 20 }}>
                    Submit
                </Button>{' '}
                <Button
                    variant="primary" type="submit"
                    onClick={this.setEditing}
                    style={{ marginTop: 20 }}
                >
                    Cancel
                </Button>
            </Form>
        )
    }
}

export default EditVehicleForm;