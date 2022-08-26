import React from "react";

import classes from "./Input.module.css";

function Input() {
  return (
    <div className={classes.Input}>
      <input type="text" placeholder="Book Title"></input>
      <input type="text" placeholder="Book Writer"></input>
      <select>
        <option>Action</option>
        <option>Romance</option>
        <option>Science fiction</option>
        <option>Police</option>
        <option>Anime</option>
      </select>
      <button>ADD BOOK</button>
    </div>
  );
}

export default Input;
