import { connect } from 'react-redux';
import React from 'react';

import Settings from './settings';

class SettingsContainer extends React.Component {

    componentDidMount () {

    }

    render () {
        return <Settings  initialValues={this.props.initialValues}/>
    }

}

const mapStateToProps = (state) => ({
    initialValues: state.auth.profile
})


export default connect (mapStateToProps, null) (SettingsContainer);
