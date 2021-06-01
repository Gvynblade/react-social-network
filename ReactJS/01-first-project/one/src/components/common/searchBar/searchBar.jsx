import React from 'react';
import { useHistory } from "react-router-dom";
import Styles from './searchBar.module.css'
import { Field, reduxForm } from 'redux-form';
import { requiredField } from '../../../utils/validators/validaors';
import { minLenghtCreator } from '../../../utils/validators/validaors'


let minLenght2 = minLenghtCreator(2);

const SearchBar = ({requestSearchResults}) => {

    const history = useHistory();

    const getSearchResults = (formData) => {
        let path = `search/` + formData.searchPhraze;
        history.push(path);
    }

    return <ReduxSearchForm onSubmit={getSearchResults}/>
}

const SearchForm = (props) => {
    const { handleSubmit } = props
    return <form onSubmit={handleSubmit} className={Styles.searchForm}>

        <Field name={"searchPhraze"} component="input" className={Styles.searchForm__input} placeholder={"Search..."} validate={[requiredField, minLenght2]}/>
        <button type={"submit"} className={Styles.searchForm__btn} >go</button>

    </form>
}

const ReduxSearchForm = reduxForm({
  // a unique name for the form
  form: 'SearchForm'
})(SearchForm)

export default SearchBar;
