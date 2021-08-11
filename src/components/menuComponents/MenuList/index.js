import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "../../icons/HomeIcon";
import LibIcon from "../../icons/LibIcon";
import SheetsIcon from "../../icons/SheetsIcon";
const MenuList = () => {
  return (
    <ul>
      <li>
        <NavLink to="/" exact={true}>
          <HomeIcon />
          <p>Home</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/library">
          <LibIcon />
          <p>Library</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/sheets">
          <SheetsIcon />
          <p>Sheets</p>
        </NavLink>
      </li>
    </ul>
  );
};

export default MenuList;
