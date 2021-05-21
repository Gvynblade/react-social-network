import { connect } from 'react-redux';
import React from 'react';

import Settings from './settings';

import { getAuthProfile } from '../../redux/auth-selectors'
import ErrorBoundary from '../common/errorBoundary/errorBoundary'

class SettingsContainer extends React.Component {

    componentDidMount () {

    }

    render () {
        return <ErrorBoundary>
            <Settings  initialValues={this.props.initialValues}/>
        </ErrorBoundary>
    }

}

const mapStateToProps = (state) => ({
    initialValues: getAuthProfile(state)
})


export default connect (mapStateToProps, null) (SettingsContainer);
