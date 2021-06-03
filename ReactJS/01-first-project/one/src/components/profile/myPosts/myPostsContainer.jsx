import { connect } from 'react-redux';
import { getProfile, getProfilePosts } from '../../../redux/profile-selectors'

import {
  addPost,
  deletePost,
  updatelikesCount
} from '../../../redux/profile-reducer';
import MyPosts from './myPosts';


let mapStateToProps = (state) => {
  return {
    myPosts: getProfilePosts(state),
    myProfile: getProfile(state)
  }
}

const MyPostsContainer = connect(mapStateToProps, {addPost, deletePost, updatelikesCount}) (MyPosts);

export default MyPostsContainer;
