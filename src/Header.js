import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="header">
      <FontAwesomeIcon icon={Icons.faBars} className="menuIcon" />
      <span className="title">Timeline</span>
      <input
        type="text"
        className="searchInput"
        placeholder="Search ..."
      />
      <FontAwesomeIcon icon={Icons.faSearch} className="searchIcon" />
    </div>
  );
};

export default Header;
