import { connect } from 'react-redux';
import React from 'react';
import { compose } from 'redux';

import Settings from './settings';

import { getAuthProfile } from '../../redux/auth-selectors'
import { withErrorBoundary } from "../hoc/errorBoundary/withErrorBoundary"

class SettingsContainer extends React.Component {

    componentDidMount () {

    }

    render () {
        return <Settings  initialValues={this.props.initialValues}/>
    }

}

const mapStateToProps = (state) => ({
    initialValues: getAuthProfile(state)
})


export default compose (
    withErrorBoundary,
    connect (mapStateToProps, null)
) (SettingsContainer);
