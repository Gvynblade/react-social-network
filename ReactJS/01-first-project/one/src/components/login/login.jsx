import { Field, reduxForm } from 'redux-form'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import React from 'react';
import { compose } from 'redux';
import { withErrorBoundary } from "../hoc/errorBoundary/withErrorBoundary"

import { Input } from '../common/formsControls/formsControls';
import { UserLogin } from '../../redux/auth-reducer';
import { requiredField } from '../../utils/validators/validaors';
import Styles from "./login.module.css"
import { getIsAuth, getAuthCaptchaUrl } from '../../redux/auth-selectors'


const Login = ({UserLogin, isAuth, captchaUrl}) => {

    let submit = (formData) => {
        UserLogin(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (isAuth === true) {

        return <Redirect to={"/profile"} />

    } else {

        return <div className={Styles.login}>
            <h1>Login page</h1>
            <ReduxLoginForm onSubmit={submit} captchaUrl={captchaUrl} />
        </div>

    }
}

const LoginForm = (props) => {
    const { handleSubmit } = props
    return <form onSubmit={handleSubmit} className={Styles.loginForm}>

        <Field name={"email"} component={Input} type={"email"} placeholder={"E-mail"} className={Styles.loginForm__input} validate={[requiredField]}/>
        <Field name={"password"} component={Input} type={"password"} placeholder={"Пароль"} className={[Styles.loginForm__input]} validate={[requiredField]} />
        <div><Field name={'rememberMe'} component={'input'} type={"checkbox"} /> Запомнить меня</div>
        {props.captchaUrl &&
            <div>
                <img src={props.captchaUrl} alt="captcha" />
                <Field name={"captcha"} component={Input} type={"text"} placeholder={"Введите символы, указанные на изображении"} className={[Styles.loginForm__input]} validate={[requiredField]} />
            </div>
        }
        {props.error && <div>{props.error}</div>}
        <button type={"submit"} className={Styles.loginForm__button} >Войти</button>

    </form>
}

const ReduxLoginForm = reduxForm({
  // a unique name for the form
  form: 'loginForm'
})(LoginForm)

let mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    captchaUrl: getAuthCaptchaUrl(state)
})

export default compose (
    withErrorBoundary,
    connect (mapStateToProps, {UserLogin})
) (Login)
