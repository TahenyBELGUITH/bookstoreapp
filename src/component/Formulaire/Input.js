import React, { useState } from "react";

import classes from "./Input.module.css";

function Input(props) {
  const [enteredTitle, setTitle] = useState("");
  const [enteredWriter, setWriter] = useState("");
  const [enteredCategory, setCategory] = useState("action");

  const TitleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const WriterChangeHandler = (e) => {
    setWriter(e.target.value);
  };

  const CategoryChangeHandler = (e) => {
    setCategory(e.target.value);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    const userData = {
      title: enteredTitle,
      writer: enteredWriter,
      category: enteredCategory,
    };

    props.onSaveData(userData);
    setTitle("");
    setWriter("");
    setCategory("");
  };

  return (
    <div>
      <form className={classes.Input} onSubmit={SubmitHandler}>
        <input
          type="text"
          placeholder="Book Title"
          onChange={TitleChangeHandler}
          value={enteredTitle}
        ></input>
        <input
          type="text"
          placeholder="Book Writer"
          onChange={WriterChangeHandler}
          value={enteredWriter}
        ></input>
        <select onChange={CategoryChangeHandler} value={enteredCategory}>
          <option value="action">Action</option>
          <option value="romance">Romance</option>
          <option value="science fiction">Science fiction</option>
          <option value="police">Police</option>
          <option value="anime">Anime</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default Input;
