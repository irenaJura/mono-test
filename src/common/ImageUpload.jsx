import React, { Component } from 'react';
import AlertMessage from "./AlertMessage";
import { inject, observer } from 'mobx-react';
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

@inject("store")
@observer
class ImageUpload extends Component {
    state = {
        selectedFile: null,
        message: ""
    }

    checkMimeType = (event) => {
        let files = event.target.files;
        let err = [];
        const types = ['image/png', 'image/jpeg', 'image/gif']
        for (let x = 0; x < files.length; x++) {
            if (types.every(type => files[x].type !== type)) {
                err[x] = files[x].type + ' is not a supported format\n';
            }
        };
        for (let z = 0; z < err.length; z++) {
            event.target.value = null
            toast.error(err[z])
        }
        return true;
    }

    onChangeHandler = (e) => {
        if (this.checkMimeType(e)) {
            this.setState({
                selectedFile: e.target.files[0]
            })
            this.props.store.initialFormState = { ...this.props.store.initialFormState, src: "images/" + e.target.files[0].name }
        }
    };

    onClickHandler = () => {
        const { selectedFile } = this.state;
        if (!selectedFile) {
            this.setState({
                message: "Please select image to upload.",
            });
            return false;
        }

        const data = new FormData()
        data.append('file', this.state.selectedFile)
        axios.post("http://localhost:8000/upload", data, {
        })
            .then(res => {
                toast.success('upload success')
            })
            .catch(err => {
                toast.error('upload fail')
            })

        this.setState({
            message: "File uploaded"
        })
    };

    render() {
        const { message } = this.state;
        const { src } = this.props.store.initialFormState;
        return (
            <>
                <div className="form-group">
                    <ToastContainer autoClose={2000} />
                </div>

                <Form.File>
                    <Form.File.Label>Upload an image</Form.File.Label>
                    <Form.File.Input
                        required={src ? false : true}
                        type="file"
                        name="file"
                        onChange={this.onChangeHandler} />
                </Form.File>
                {message ? <AlertMessage msg={message} /> : null}
                <Button
                    required
                    type="button"
                    className="btn btn-success mt-2 mr-2"
                    onClick={this.onClickHandler}
                >
                    Upload
                </Button >
            </>
        );
    }
}

export default ImageUpload;