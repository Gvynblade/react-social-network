import { compose } from 'redux';
import { connect } from 'react-redux';
import { withErrorBoundary } from "../hoc/errorBoundary/withErrorBoundary"

import {getAuthID} from '../../redux/auth-selectors'
import { getDialogsData } from '../../redux/dialogs-selectors';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import Dialogs from './dialogs';
import { deleteDialog } from '../../redux/dialogs-reducer'


let mapStateToProps = (state) => {
  return {
    dialogsData: getDialogsData(state),
    authUserId: getAuthID(state)
  }
}

export default compose (
    withErrorBoundary,
    connect(mapStateToProps, {deleteDialog}),
    withAuthRedirect
) (Dialogs)
