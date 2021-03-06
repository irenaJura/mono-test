import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import { inject, observer } from 'mobx-react';
import ImageUpload from '../common/ImageUpload';
import { ToastContainer, toast } from 'react-toastify';
@inject("store")
@observer
class EditVehicleForm extends Component {
    handleInputChange = (e) => {
        const { name, value } = e.target

        this.props.store.initialFormState = { ...this.props.store.initialFormState, [name]: value }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let { initialFormState } = this.props.store;

        this.props.store.updateMake(initialFormState.id, initialFormState)
        initialFormState = { id: "", name: "", abrv: "", src: "" }

        toast.success('successfully submitted')
    }
    reset = () => {
        this.props.store.editing = false;
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
                    {this.props.store.initialFormState.src === ""
                        ? null :
                        <img src={src} alt={src} width="200" />}
                    <ImageUpload src={src} />
                    <Button
                        variant="primary"
                        type="submit"
                        className="mt-2 mr-2">
                        Submit
                    </Button>{' '}
                    <Button
                        variant="primary" type="submit"
                        onClick={this.reset}
                        className="mt-2"
                    >
                        Cancel
                   </Button>
                </Form>
            </>
        )
    }
}

export default EditVehicleForm;