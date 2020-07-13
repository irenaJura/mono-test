import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("store")
@observer
class EditForm extends Component {
    handleSave = (vehicle) => {
        this.props.store.updateMake(this.props.vehicle.id)
    }
    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.props.store.currentMake = { ...this.props.store.currentMake, [name]: value }
    }
    cancelEdit = () => {
        this.props.store.currentMake.editing = false;
    }
    render() {
        return (
            <form onSubmit={(event) => {
                event.preventDefault()
                this.props.store.updateMake(this.props.vehicle.id)
            }}>
                <label>Update Name</label>
                <input
                    type="text"
                    name="name"
                    defaultValue={this.props.vehicle.name}
                    onChange={this.handleInputChange}
                />
                <input
                    type="button"
                    value="Save"
                    onClick={() => this.handleSave(this.props.vehicle)}
                />
                <input
                    type="button"
                    value="Cancel"
                    onClick={this.cancelEdit}
                />
            </form>
        )
    }
}

export default EditForm;