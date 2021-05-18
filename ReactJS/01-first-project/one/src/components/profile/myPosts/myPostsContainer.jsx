import { connect } from 'react-redux';
import { getProfile, getProfilePosts } from '../../../redux/profile-selectors'

import {
  addPostActionCreator
} from '../../../redux/profile-reducer';
import MyPosts from './myPosts';


let mapStateToProps = (state) => {
  return {
    myPosts: getProfilePosts(state),
    myProfile: getProfile(state)
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (message) => {
      dispatch( addPostActionCreator(message) );
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;
