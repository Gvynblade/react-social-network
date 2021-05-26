import React from 'react';
import {NavLink} from 'react-router-dom';
import Styles from './sidebar.module.css';

const Sidebar = () => {
  return(
    <div className={Styles.sidebar}>
      <ul className={Styles.sidebarNavblock}>
        <li><NavLink to="/profile" activeClassName={Styles.active}>My Profile</NavLink></li>
        <li><NavLink to="/feed" activeClassName={Styles.active}>News feed</NavLink></li>
        <li><NavLink to="/messages" activeClassName={Styles.active}>Messages</NavLink></li>
        <li><NavLink to="/friends" activeClassName={Styles.active}>Friends</NavLink></li>
        <li><NavLink to="/settings" activeClassName={Styles.active}>Settings</NavLink></li>
      </ul>

      <div className={Styles.sidebarBlock}>
          <div className={Styles.sidebarBlock__title}>
            Friends 12
          </div>
          <div className={Styles.sidebarBlock__content}>
              123123123
          </div>
      </div>

    </div>
  );
}

export default Sidebar;
