import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import {
  HeaderMain,
  NavLinks,
  SideBar,
  Backdrop,
} from '../../../../components';
// import { icons } from './../../../../assets/icons';
import './NavMain.scss';

const NavMain = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const openSidebar = () => {
    setShowSidebar(true);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <React.Fragment>
      {showSidebar && <Backdrop onClick={closeSidebar} />}

      <SideBar show={showSidebar} onClick={closeSidebar}>
        <nav className='nav-main__sidebar-nav'>
          <NavLinks />
        </nav>
      </SideBar>

      <HeaderMain>
        <button className='nav-main__btn-menu' onClick={openSidebar}>
          <span />
          <span />
          <span />
        </button>

        <h1 className='nav-main__title'>
          <Link to='/'>
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: 'white', 'margin-right': '10px' }}
              className='title-icon'
            />
            PlaceBook
          </Link>
        </h1>

        <nav className='nav-main__header-nav'>
          <NavLinks />
        </nav>
      </HeaderMain>
    </React.Fragment>
  );
};

export default NavMain;
