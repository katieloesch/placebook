import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.scss";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">ALL USERS</NavLink>
      </li>
      <li>
        <NavLink to="/id/places">MY PLACES</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">Add new place</NavLink>
      </li>
      <li>
        <NavLink to="/auth">LOG IN / REGISTER</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
