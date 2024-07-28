import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/authContext';
import './NavLinks.scss';

const NavLinks = () => {
  const auth = useContext(AuthContext);

  return (
    <ul className='nav-links'>
      <li>
        <NavLink to='/'>All Users</NavLink>
      </li>

      {auth.isLoggedIn && (
        <li>
          <NavLink to='/u0/places'>My Places</NavLink>
        </li>
      )}

      {auth.isLoggedIn && (
        <li>
          <NavLink to='/places/new'>Add new place</NavLink>
        </li>
      )}

      {!auth.isLoggedIn && (
        <li>
          <NavLink to='/auth'>Log In / Register</NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
