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
    </div>
  );
}

export default Sidebar;
