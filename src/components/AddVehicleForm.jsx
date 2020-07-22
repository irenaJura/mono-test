import React, { Component } from 'react';
import ImageUpload from "../common/ImageUpload";
import { Form, Button } from "react-bootstrap";
import { inject, observer } from 'mobx-react';
import { ToastContainer, toast } from 'react-toastify';

@inject("store")
@observer
class AddVehicleForm extends Component {
    handleInputChange = (e) => {
        const { name, value } = e.target

        this.props.store.initialFormState = { ...this.props.store.initialFormState, [name]: value }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        toast.success('successfully submitted')

        this.props.store.addVehicle(this.props.store.initialFormState);
        this.props.store.initialFormState = { id: "", name: "", abrv: "", src: "" }
    }
    render() {
        const { name } = this.props.store.initialFormState;
        const { abrv } = this.props.store.initialFormState;
        const { src } = this.props.store.initialFormState;
        return (
            <>
                <div className="form-group">
                    <ToastContainer autoClose={2000} />
                </div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasic">
                        <Form.Label>Vehicle name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasic">
                        <Form.Label>Abbreviation</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="abrv"
                            value={abrv}
                            onChange={this.handleInputChange}
                        />
                    </Form.Group>
                    <ImageUpload />
                    <Button
                        variant="btn btn-primary mt-2"
                        type="submit"
                        className="btn mt-2"
                        disabled={(name === "" || abrv === "" || src === "") ? true : false}
                    >
                        Submit
                </Button>
                </Form>
            </>
        )
    }
}

export default AddVehicleForm;