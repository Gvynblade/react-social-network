import { connect } from 'react-redux';

import {
  addPostActionCreator
} from '../../../redux/profile-reducer';
import MyPosts from './myPosts';


let mapStateToProps = (state) => {
  return {
    myPosts: state.profilePage.postsData,
    myProfile: state.profilePage.profile
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
