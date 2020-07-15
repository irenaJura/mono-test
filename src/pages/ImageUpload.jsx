import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import axios from "axios";
// https://malcoded.com/posts/react-file-upload/
// https://github.com/udacity/reactnd-contacts-complete/blob/master/src/ImageInput.js

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
        console.log(e.target.files[0])
        // this.setState({
        //     selectedFile: e.target.files[0],
        // })
        this.props.store.initialFormState = { ...this.props.store.initialFormState, src: "images/" + e.target.files[0].name }
    };

    onClickHandler = () => {
        // const data = new FormData()
        // data.append('file', this.state.selectedFile)
        let data = new FormData();
        data.append("file", this.props.store.initialFormState);
        axios.post("http://localhost:8000/upload", data, {
            // receive two parameter endpoint url ,form data 
        })
            .then(res => { // then print response status
                console.log(res.statusText)
            })
    };
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group files">
                            <label>Upload Your File </label>
                            <input
                                type="file"
                                name="file"
                                onChange={this.onChangeHandler}
                            />
                            <button
                                type="button"
                                className="btn btn-success btn-block"
                                onClick={this.onClickHandler}
                            >
                                Upload
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageUpload;