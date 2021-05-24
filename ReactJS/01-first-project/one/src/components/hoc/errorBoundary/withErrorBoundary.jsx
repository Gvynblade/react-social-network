import React from 'react'
import { connect } from 'react-redux';
import {setAppError} from '../../../redux/app-reducer'

export const withErrorBoundary = (Component) => {
    class ErrorBoundaryComponent extends React.Component {

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

            return <Component {...this.props} />
        }

    }

    let ErrorBoundary = connect (null, {setAppError}) (ErrorBoundaryComponent)

    return ErrorBoundary
}
