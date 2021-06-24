import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import Styles from './sidebar.module.css';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withErrorBoundary } from "../hoc/errorBoundary/withErrorBoundary"
import {
    getFriendsData,
    getTotalFriendsCount,
    getFriendsCurrentPage,
    getFriendsPageSize
} from '../../redux/friends-selectors'
import {requestFriends} from '../../redux/friends-reducer'
import userNoPhoto from '../../assets/img/user-no-photo.png'

const Sidebar = React.memo((props) => {

    useEffect ( () => {
        if (props.friends.length === 0) {
            props.requestFriends(props.currentPage, props.PageSize)
        }
    }, [props])

    let friendsList = [];

    props.friends.forEach(function(item, i, arr) {
        if (i < 12) {
            friendsList = [...friendsList, item]
        }
    });

    friendsList = friendsList.map( (friend) => {
        return <div key={friend.id + friend.name} className={Styles.sidebarBlock__friend}>
            <NavLink to={'/profile/' + friend.id}>
                <img src={friend.photos.small != null ? friend.photos.small: userNoPhoto} alt={`${friend.name} avatar`} />
                <div className={Styles.sidebarBlock__friendName}>{friend.name}</div>
            </NavLink>
        </div>
    })

    return(
        <div className={Styles.sidebar}>
            <ul className={Styles.sidebarNavblock}>
                <li><NavLink to="/profile" className={Styles.profile} activeClassName={Styles.active}>My Profile</NavLink></li>
                <li><NavLink to="/feed" className={Styles.feed} activeClassName={Styles.active}>News feed</NavLink></li>
                <li>
                    <NavLink to="/messages" className={Styles.messages} activeClassName={Styles.active}>Messages</NavLink>
                    <span className={Styles.newMessagesCount}>2</span>
                </li>
                <li><NavLink to="/friends" className={Styles.friends} activeClassName={Styles.active}>Friends</NavLink></li>
                <li><NavLink to="/settings" className={Styles.settings} activeClassName={Styles.active}>Settings</NavLink></li>
            </ul>

            <div className={Styles.sidebarBlock}>
                <div className={Styles.sidebarBlock__title}>
                    Friends: {props.totalFriendsCount}
                    <NavLink to={'/friends/'} className={Styles.sidebarBlock__btn}>All</NavLink>
                </div>
                <div className={Styles.sidebarBlock__content}>
                    <div className={Styles.sidebarBlock__friendsList}>
                        {friendsList}
                    </div>
                </div>
            </div>

        </div>
    );
} )

const mapStateToProps = (state) => ({
    friends: getFriendsData(state),
    totalFriendsCount: getTotalFriendsCount(state),
    currentPage: getFriendsCurrentPage(state),
    PageSize: getFriendsPageSize(state),
})

export default compose (
    withErrorBoundary,
    connect(mapStateToProps, {requestFriends})
) (Sidebar);
