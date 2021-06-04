import { Field, reduxForm } from 'redux-form';
import React from 'react';
import {NavLink} from 'react-router-dom';

import { Textarea } from '../../common/formsControls/formsControls';
import {
  maxLenghtCreator,
  minLenghtCreator,
  requiredField
} from '../../../utils/validators/validaors';
import Styles from './dialogs-item.module.css';

const minLenght3 = minLenghtCreator(3)
const maxLenght500 = maxLenghtCreator(500)

const DialogsItem = (props) => {

  let path = "/messages/id-" + props.id;

  let dialogElements = props.dialogarr.map( (m) => {
    return (
      <div key={props.id + "-message-" + m.messageId}>{m.message}</div>
    );
  });

  let submit = (formData) => {
      console.log(formData)
      props.addMessage(formData.message)
  }

  return (
    <NavLink className={Styles.dialogsItem} to={path}>

      <div><img src={props.ava} alt={props.name}/></div>
      <div>{props.name}</div>
      <div>{props.date}</div>
      <div>{props.lastMsg}</div>
      <div style={{marginTop: '20px'}}>{dialogElements}</div>

      <ReduxAddNewMessageForm onSubmit={submit} />

    </NavLink>
  )
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

export default DialogsItem;
