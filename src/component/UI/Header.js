import React from "react";
// import { RiLogoutCircleRLine } from "react-icons/fa";
import { RiLoginCircleFill } from "react-icons/ri";
import classes from "./Header.module.css";

function Header(props) {
  const logOutHandler = () => {
    props.setIsLoggedOut(!props.setIsLoggedOut);
    console.log(props.setIsLoggedOut);
  };

  return (
    <div className={classes.Header}>
      <h1>BookStore CMS </h1>
      {props.active && (
        <ul>
          <li> Books </li>
          <li> Category </li>
          <li onClick={logOutHandler}>
            <RiLoginCircleFill />
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
