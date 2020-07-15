import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import axios from "axios";
import { Form } from "react-bootstrap";
import { Progress } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
@inject("store")
@observer
class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            loaded: 0
        }
    }
    checkMimeType = (event) => {
        let files = event.target.files
        let err = [] // create empty array
        const types = ['image/png', 'image/jpeg', 'image/gif']
        for (let x = 0; x < files.length; x++) {
            if (types.every(type => files[x].type !== type)) {
                err[x] = files[x].type + ' is not a supported format\n';
                // assign message to array
            }
        };
        for (var z = 0; z < err.length; z++) { // loop create toast massage
            event.target.value = null
            toast.error(err[z])
        }
        return true;
    }
    onChangeHandler = (e) => {
        // console.log(e.target.files[0])

        if (this.checkMimeType(e)) {
            // if return true allow to setState
            this.setState({
                selectedFile: e.target.files[0]
            })
            this.props.store.initialFormState = { ...this.props.store.initialFormState, src: "images/" + e.target.files[0].name }
        }
    };
    onClickHandler = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        axios.post("http://localhost:8000/upload", data, {
            onUploadProgress: ProgressEvent => {
                this.setState({
                    loaded: (ProgressEvent.loaded / ProgressEvent.total * 100),
                })
            },
        })
            .then(res => {
                console.log(res.statusText)
                toast.success('upload success')
            })
            .catch(err => {
                toast.error('upload fail')
            })
    };

    render() {
        return (
            <>
                <div className="form-group">
                    <ToastContainer />
                </div>
                <div className="form-group">
                    <Progress max="100" color="success" value={this.state.loaded} >{Math.round(this.state.loaded, 2)}%</Progress>
                </div>
                <Form.File id="formcheck-api-regular">
                    <Form.File.Label>Upload an image</Form.File.Label>
                    <Form.File.Input type="file"
                        name="file"
                        onChange={this.onChangeHandler} />
                </Form.File>
                <button
                    type="button"
                    className="btn btn-success"
                    style={{ marginTop: 20, marginRight: 5 }}
                    onClick={this.onClickHandler}
                >
                    Upload
                </button >
            </>
        );
    }
}

export default ImageUpload;