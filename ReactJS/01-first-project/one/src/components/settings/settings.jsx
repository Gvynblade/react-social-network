import { Field, reduxForm } from 'redux-form'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import React from 'react';

import { Input, Textarea } from '../common/formsControls/formsControls';
import { updateSettings } from '../../redux/profile-reducer';
import Styles from './settings.module.css'



const Settings = (props) => {

    let submit = (formData) => {
        // if (!formData.LookingForAJobDescription) {
        //     formData.LookingForAJobDescription = "Не ищу работу";
        // }
        props.updateSettings(formData)
    }

    if (props.isAuth === false) {

        return <Redirect to={"/profile"} />

    } else {
        return <main className={Styles.settings}>
            <h1>Страница с настройками</h1>
            <ReduxSettingsForm onSubmit={submit} initialValues={props.initialValues}/>
        </main>
    }

}

const SettingsForm = (props) => {
    const { handleSubmit } = props
    return <form onSubmit={handleSubmit} className={Styles.settingsForm}>

        <Field name={"fullName"} component={Input} type={"text"} placeholder={"Сменить никнейм"} className={[Styles.settingsForm__input]} />
        <Field name={"aboutMe"} component={Textarea} type={"text"} placeholder={"Напишите немного о себе"} className={[Styles.settingsForm__input]} />
        <h2>Информация о поиске работы</h2>
        <label>Поиск работы</label>
        <Field name={"lookingForAJob"} component="input" type={"checkbox"} />
        <Field name={"lookingForAJobDescription"} component={Textarea} type={"text"} placeholder={"Опишите, какую работу вы ищете"} className={Styles.settingsForm__input} />
        <h2>Укажите ваши контакты</h2>
        <Field name={"contacts.github"} component={Input} type={"url"} placeholder={"Ссылка на страницу github"} className={[Styles.settingsForm__input]} />
        <Field name={"contacts.vk"} component={Input} type={"url"} placeholder={"Ссылка на страницу vk"} className={[Styles.settingsForm__input]} />
        <Field name={"contacts.facebook"} component={Input} type={"url"} placeholder={"Ссылка на страницу facebook"} className={[Styles.settingsForm__input]} />
        <Field name={"contacts.instagram"} component={Input} type={"url"} placeholder={"Ссылка на страницу instagram"} className={[Styles.settingsForm__input]} />
        <Field name={"contacts.twitter"} component={Input} type={"url"} placeholder={"Ссылка на страницу twitter"} className={[Styles.settingsForm__input]} />
        <Field name={"contacts.website"} component={Input} type={"url"} placeholder={"Ссылка на website"} className={[Styles.settingsForm__input]} />
        <Field name={"contacts.youtube"} component={Input} type={"url"} placeholder={"Ссылка на страницу youtube"} className={[Styles.settingsForm__input]} />
        <Field name={"contacts.mainLink"} component={Input} type={"url"} placeholder={"Ссылка на mainLink"} className={[Styles.settingsForm__input]} />
        {props.error && <div>{props.error}</div>}
        <button type={"submit"} className={Styles.settingsForm__button} >Сохранить изменения</button>

    </form>
}

const ReduxSettingsForm = reduxForm({
  // a unique name for the form
  form: 'settingsForm'
})(SettingsForm)

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    profile : state.auth.profile
})

export default connect (mapStateToProps, {updateSettings}) (Settings)
