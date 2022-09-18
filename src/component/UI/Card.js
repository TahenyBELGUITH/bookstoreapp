import React from "react";

import classes from "./Card.module.css";

function Card(props) {
  return (
    <div className={classes.Card}>
      <ul>
        {props.dataArray.map((p) => (
          <li key={p.id}>
            <div>
              <div>
                <h4>{p.category}</h4>
                <h2>{p.title}</h2>
                <h4>{p.writer}</h4>
              </div>
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
          </li>
        ))}
      </ul>
      ;
    </div>
  );
}

export default Card;
