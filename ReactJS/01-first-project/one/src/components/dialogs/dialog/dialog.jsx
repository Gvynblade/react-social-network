import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withErrorBoundary } from '../../hoc/errorBoundary/withErrorBoundary'

import Styles from './dialog.module.css'
import { Textarea } from '../../common/formsControls/formsControls';
import { Field, reduxForm } from 'redux-form';
import {NavLink} from 'react-router-dom';
import {
  maxLenghtCreator,
  minLenghtCreator,
  requiredField
} from '../../../utils/validators/validaors';
import { getDialogsData } from '../../../redux/dialogs-selectors'
import { getAuthProfile } from '../../../redux/auth-selectors'
import Message from './message/message'

const minLenght3 = minLenghtCreator(3)
const maxLenght500 = maxLenghtCreator(500)

const Dialog = (props) => {

    let submit = (formData) => {
        console.log(formData)
        props.addMessage(formData.message)
    }

    let interlocutorID = props.match.params.interlocutorID;
    let dialogPositionInArr = props.match.params.dialogPosition

    let messagesElements = props.dialogsData[dialogPositionInArr].messages.map( (d) => {
      return (
        <Message
          key={'message - ' + d.messageId}
          id={d.messageId}
          ava={d.messageAuthorAva}
          name={d.dialogWithUserName}
          profileUrl={d.messageAuthorPage}
          message={d.message}
          date={d.messageDate}
          isOwner={d.messageAuthorId === props.authUserProfile.userId}
        />
      );
    })

    return <main className={Styles.dialog}>

        <div className={Styles.dialog__header}>
            <NavLink to={'/messages/'}>Back</NavLink>
            <div className={Styles.dialog__interlocutor}>
                <div className={Styles.dialog__interlocutorInfo}>
                    <span className={Styles.dialog__interlocutorName}>{props.dialogsData[dialogPositionInArr].dialogInfo.dialogWithUserName}</span>
                    <span className={Styles.dialog__interlocutorStatus}>Online</span>
                </div>
                <img src={props.dialogsData[dialogPositionInArr].dialogInfo.dialogWithUserAva} alt={props.dialogsData[dialogPositionInArr].dialogInfo.dialogWithUserName} />
            </div>
        </div>

        <div className={Styles.dialog__messagesContainer}>
            {messagesElements}
        </div>

        <ReduxAddNewMessageForm onSubmit={submit} />
    </main>
}


const AddNewMessageForm = (props) => {
    const { handleSubmit } = props
    return <form onSubmit={handleSubmit} className={Styles.addMessageForm}>

        <Field name={"message"} component={Textarea} placeholder={"Что у вас нового?"} validate={[requiredField, minLenght3, maxLenght500]}/>
        <button type={"submit"} >Опубликовать</button>

    </form>
}

const ReduxAddNewMessageForm = reduxForm({
  // a unique name for the form
  form: 'DialogsAddForm'
})(AddNewMessageForm)

let mapStateToProps = (state) => ({
    dialogsData: getDialogsData(state),
    authUserProfile: getAuthProfile(state)
})

export default compose (
    withErrorBoundary,
    connect(mapStateToProps, {})
) (Dialog)
