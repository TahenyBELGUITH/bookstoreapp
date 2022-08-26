import React from "react";
import classes from "./Card.module.css";

function Card() {
  return (
    <div className={classes.Card}>
      <div className="data">
        <h4>Action</h4>
        <h2>The Hunger Games</h2>
        <h4>Suzanne Collins</h4>
        <div className="userBtn">
          <button>Comments</button>
          <button>Remove</button>
          <button>Edit</button>
        </div>
      </div>
      <div className={classes.barProgress}>
        <div className={classes.barChart}></div>
        <div>
          <p>64%</p>
          <p>completed!</p>
        </div>
      </div>
      <div className="update">
        <h4>CURRENT CHAPTER</h4>
        <p>Chapter 17</p>
        <button>UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

export default Card;
