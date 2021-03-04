import { Field, reduxForm } from 'redux-form'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import React from 'react';

import { Input } from '../common/formsControls/formsControls';
import { UserLogin } from '../../redux/auth-reducer';
import { requiredField } from '../../utils/validators/validaors';
import Styles from "./login.module.css"


const Login = ({UserLogin, isAuth}) => {

    let submit = (formData) => {
        UserLogin(formData.email, formData.password, formData.rememberMe)
    }

    if (isAuth === true) {

        return <Redirect to={"/profile"} />

    } else {

        return <div className={Styles.login}>
            <h1>Login page</h1>
            <ReduxLoginForm onSubmit={submit} />
        </div>

    }
}

const LoginForm = (props) => {
    const { handleSubmit } = props
    return <form onSubmit={handleSubmit} className={Styles.loginForm}>

        <Field name={"email"} component={Input} type={"email"} placeholder={"E-mail"} className={Styles.loginForm__input} validate={[requiredField]}/>
        <Field name={"password"} component={Input} type={"password"} placeholder={"Пароль"} className={[Styles.loginForm__input]} validate={[requiredField]} />
        <div><Field name={'rememberMe'} component={'input'} type={"checkbox"} /> Запомнить меня</div>
        {props.error && <div>{props.error}</div>}
        <button type={"submit"} className={Styles.loginForm__button} >Войти</button>

    </form>
}

const ReduxLoginForm = reduxForm({
  // a unique name for the form
  form: 'loginForm'
})(LoginForm)

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {UserLogin}) (Login)
