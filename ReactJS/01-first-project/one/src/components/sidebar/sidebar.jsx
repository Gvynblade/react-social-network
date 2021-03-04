import React from 'react';
import Styles from './sidebar.module.css';

const Sidebar = () => {
  return(
    <div className={Styles.sidebar}>
      <ul>
        <li>Profile</li>
        <li>Messages</li>
        <li>News</li>
        <li>Music</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;
