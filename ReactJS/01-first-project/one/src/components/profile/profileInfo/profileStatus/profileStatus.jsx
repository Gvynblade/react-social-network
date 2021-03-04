import React from "react";
import Styles from "./profileStatus.module.css"

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status:this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate (prevProps, prevState) {

        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }

    }

    render () {
        return (
            <div className={Styles.Status} >
                {this.state.editMode ?
                <input className={Styles.Status__edit} onChange={this.onStatusChange} autoFocus={true} value={this.state.status} onBlur={ this.deactivateEditMode}/>
                :
                <div className={Styles.Status__block} onDoubleClick={ this.activateEditMode}>{this.props.status ? this.props.status : "Ведите ваш статус"}</div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
