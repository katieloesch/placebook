import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.scss';

const NavLinks = () => {
  return (
    <ul className='nav-links'>
      <li>
        <NavLink to='/'>All Users</NavLink>
      </li>
      <li>
        <NavLink to='/id/places'>My Places</NavLink>
      </li>
      <li>
        <NavLink to='/places/new'>Add new place</NavLink>
      </li>
      <li>
        <NavLink to='/auth'>Log In / Register</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
