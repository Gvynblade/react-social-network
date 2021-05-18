import { connect } from 'react-redux';
import React from 'react';

import Settings from './settings';

import { getAuthProfile } from '../../redux/auth-selectors'

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


export default connect (mapStateToProps, null) (SettingsContainer);
