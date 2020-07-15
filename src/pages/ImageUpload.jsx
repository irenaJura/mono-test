import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import axios from "axios";
import { Form } from "react-bootstrap";

@inject("store")
@observer
class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        }

    }
    onChangeHandler = (e) => {
        // console.log(e.target.files[0])
        this.setState({
            selectedFile: e.target.files[0],
        })
        this.props.store.initialFormState = { ...this.props.store.initialFormState, src: "images/" + e.target.files[0].name }
    };

    onClickHandler = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        axios.post("http://localhost:8000/upload", data, {
            // receive two parameter endpoint url ,form data 
        })
            .then(res => { // then print response status
                console.log(res.statusText)
            })
    };
    render() {
        return (
            <>
                <Form.File id="formcheck-api-regular">
                    <Form.File.Label>Upload an image</Form.File.Label>
                    <Form.File.Input type="file"
                        name="file"
                        onChange={this.onChangeHandler} />
                </Form.File>
                <button
                    type="button"
                    className="btn btn-success"
                    style={{ marginTop: 10, marginRight: 5 }}
                    onClick={this.onClickHandler}
                >
                    Upload
                </button >
            </>
        );
    }
}

export default ImageUpload;