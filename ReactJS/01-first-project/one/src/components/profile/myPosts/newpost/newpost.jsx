import { Field, reduxForm } from 'redux-form';
import React from 'react';

import { Textarea } from '../../../common/formsControls/formsControls';
import {
  maxLenghtCreator,
  minLenghtCreator,
  requiredField
} from '../../../../utils/validators/validaors';
import Styles from './newpost.module.css';

const minLenght3 = minLenghtCreator(3)
const maxLenght500 = maxLenghtCreator(500)

const NewPost = (props) => {

  let submit = (formData) => {
      props.addPost(formData.message)
  }

  return(
    <div className={Styles.newpost}>

      <img className={Styles.ava} src={props.ava} alt={props.name} />

      <ReduxAddPostForm onSubmit={submit} />

    </div>
  )
}

const NewPostForm = (props) => {
    const { handleSubmit } = props
    return <form onSubmit={handleSubmit} className={Styles.addPostForm}>

        <Field name={"message"} component={Textarea} placeholder={"What's happening?"} validate={[requiredField, minLenght3, maxLenght500]} className={Styles.messageField}/>
        <button type={"submit"} className={Styles.addPostBtn} >Add Post</button>

    </form>
}

const ReduxAddPostForm = reduxForm({
  // a unique name for the form
  form: 'PostAddForm'
})(NewPostForm)

export default NewPost;
