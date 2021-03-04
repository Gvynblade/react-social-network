import React from "react";
import Styles from "./formsControls.module.css"

export const Textarea = (props) => {

    const hasError = props.meta.touched && props.meta.error;

    return <div className={Styles.formControl + ' ' + (hasError ? Styles.error : null)}>
        <textarea {...props.input} {...props} />
        {hasError && <span>{props.meta.error}</span>}
    </div>
}


export const Input = (props) => {

    const hasError = props.meta.touched && props.meta.error;

    return <div className={Styles.formControl + ' ' + (hasError ? Styles.error : null)}>
        <input {...props.input} {...props} />
        {hasError && <span>{props.meta.error}</span>}
    </div>
}
