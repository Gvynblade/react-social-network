import React from "react"
import { connect } from 'react-redux';
import {setAppError} from '../../../redux/app-reducer'

class ErrorBoundary extends React.PureComponent {
    constructor (props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
          error,
          errorInfo
        })
        this.props.setAppError(error, errorInfo)
    }

    render() {
        if (this.state.errorInfo || this.state.error) {
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }

        return this.props.children
    }


}

export default connect (null, {setAppError}) (ErrorBoundary)
