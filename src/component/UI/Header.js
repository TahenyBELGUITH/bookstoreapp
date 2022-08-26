import React from "react";
// import { RiLogoutCircleRLine } from "react-icons/fa";
import { RiLoginCircleFill } from "react-icons/ri";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.Header}>
      <h1>Bookstore CMS</h1>
      <ul>
        <li> Books </li>
        <li> Category </li>
        <li>
          <RiLoginCircleFill />
        </li>
      </ul>
    </div>
  );
}

export default Header;
