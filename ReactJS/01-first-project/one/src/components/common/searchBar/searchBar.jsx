import React from 'react';
import Styles from './searchBar.module.css'
import { Field, reduxForm } from 'redux-form';
import { requiredField } from '../../../utils/validators/validaors';

const SearchBar = ({onSubmit}) => {
    return   <ReduxSearchForm onSubmit={onSubmit}/>
}

const SearchForm = (props) => {
    const { handleSubmit } = props
    return <form onSubmit={handleSubmit} className={Styles.searchForm}>

        <Field name={"searchPhraze"} component="input" className={Styles.searchForm__input} placeholder={"Search..."} validate={[requiredField]}/>
        <button type={"submit"} className={Styles.searchForm__btn} >go</button>

    </form>
}

const ReduxSearchForm = reduxForm({
  // a unique name for the form
  form: 'SearchForm'
})(SearchForm)

export default SearchBar;
