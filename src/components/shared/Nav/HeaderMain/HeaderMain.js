import React from "react";
import "./HeaderMain.scss";

const HeaderMain = (props) => {
  return <header className="header-main">{props.children}</header>;
};

export default HeaderMain;
