import React, { useState } from "react";
import { Link } from "react-router-dom";

import { HeaderMain, NavLinks, SideBar, Backdrop } from "../../../shared";
import "./NavMain.scss";

const NavMain = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <React.Fragment>
      {showSidebar && <Backdrop onClick={() => setShowSidebar(false)} />}
      {showSidebar && (
        <SideBar show={showSidebar}>
          <nav className="nav-main__sidebar-nav">
            <NavLinks />
          </nav>
        </SideBar>
      )}

      <HeaderMain>
        <button
          className="nav-main__btn-menu"
          onClick={() => setShowSidebar(true)}
        >
          <span />
          <span />
          <span />
        </button>

        <h1 className="nav-main__title">
          <Link to="/">Your placessss</Link>
        </h1>

        <nav className="nav-main__header-nav">
          <NavLinks />
        </nav>
      </HeaderMain>
    </React.Fragment>
  );
};

export default NavMain;
