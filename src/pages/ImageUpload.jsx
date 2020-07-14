import React, { Component } from 'react';
import { Form } from "react-bootstrap";
import { inject, observer } from 'mobx-react';

@inject("store")
@observer
class ImageUpload extends Component {
    fileUplad = (e) => {
        const { name } = e.target

        this.props.store.initialFormState = { ...this.props.store.initialFormState, [name]: e.target.files[0].name }
        console.log(name, e.target.files[0].name)
    }
    render() {
        return (
            <Form.Group>
                <Form.File name="src" id="exampleFormControlFile1" label="Upload an image" onChange={this.fileUplad} />
            </Form.Group>
        );
    }
}

export default ImageUpload;