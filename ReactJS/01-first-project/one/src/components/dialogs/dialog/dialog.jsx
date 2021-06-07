import React from 'react';
import Styles from './dialog.module.css'
import { Textarea } from '../../common/formsControls/formsControls';
import { Field, reduxForm } from 'redux-form';
import {
  maxLenghtCreator,
  minLenghtCreator,
  requiredField
} from '../../../utils/validators/validaors';

const minLenght3 = minLenghtCreator(3)
const maxLenght500 = maxLenghtCreator(500)

const Dialog = (props) => {

    let submit = (formData) => {
        console.log(formData)
        props.addMessage(formData.message)
    }

    return <ReduxAddNewMessageForm onSubmit={submit} />
}


const AddNewMessageForm = (props) => {
    const { handleSubmit } = props
    return <form onSubmit={handleSubmit} className={Styles.addPostForm}>

        <Field name={"message"} component={Textarea} placeholder={"Что у вас нового?"} validate={[requiredField, minLenght3, maxLenght500]}/>
        <button type={"submit"} >Опубликовать</button>

    </form>
}

const ReduxAddNewMessageForm = reduxForm({
  // a unique name for the form
  form: 'DialogsAddForm'
})(AddNewMessageForm)

export default Dialog
