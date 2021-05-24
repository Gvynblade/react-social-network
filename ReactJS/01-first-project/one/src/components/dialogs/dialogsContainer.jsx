import { compose } from 'redux';
import { connect } from 'react-redux';
import { withErrorBoundary } from "../hoc/errorBoundary/withErrorBoundary"

import {
  addDialogActionCreator,
} from '../../redux/dialogs-reducer';
import { getDialogsData } from '../../redux/dialogs-selectors';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import Dialogs from './dialogs';


let mapStateToProps = (state) => {
  return {
    dialogsData: getDialogsData(state)
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (message) => {
      dispatch(addDialogActionCreator(message));
    }
  }
}

export default compose (
    withErrorBoundary,
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) (Dialogs)
