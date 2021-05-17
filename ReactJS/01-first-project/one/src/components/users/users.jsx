import React from 'react';

import Pagination from '../common/pagination/pagination';
import Styles from './users.module.css';
import User from './user/user';

const Users = (props) => {

    return <main className={Styles.users}>

        <Pagination
            totalItemsCount={props.totalUsersCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            onPageChanged={props.onPageChanged}/>

        <div className={Styles.users__list}>

            {props.users.map( u => <User
                key={u.id}
                user={u}
                followingInProgress={props.followingInProgress}
                unFollow={props.unFollow}
                follow={props.follow}
                />
        )}

        </div>
    </main>

}

export default Users;
