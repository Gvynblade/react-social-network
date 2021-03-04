import React, {useState, useEffect} from "react";
import Styles from "./profileStatus.module.css"

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode ] = useState(false)
    let [Status, setStatus ] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    const toggleEditMode = () => {
        if (editMode) {
            setEditMode(false)
            props.updateStatus(Status)
        } else {
            setEditMode(true)
        }
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }


    return (
        <div className={Styles.Status} >
            {editMode ?
                <input className={Styles.Status__edit} onChange={onStatusChange} autoFocus={true} value={Status} onBlur={ toggleEditMode}/>
                :
                <div className={Styles.Status__block} onDoubleClick={toggleEditMode}>{props.status ? props.status : "Ведите ваш статус"}</div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;
