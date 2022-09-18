import { useState, useEffect } from "react";

import Card from "./component/UI/Card";
import Header from "./component/UI/Header";
import Input from "./component/Formulaire/Input";
import Login from "./component/Login/Login";
import classes from "./App.module.css";

const INITIAL_DATA = [
  {
    id: 0,
    title: "C#",
    writer: "Taheny",
    category: "action",
  },
  {
    id: 1,
    title: "JS",
    writer: "Mohamed",
    category: "action",
  },
];

function App() {
  const [isLogged, setIsLogged] = useState(true);
  const [isLogOut, setIsLoggedOut] = useState(true);
  const [dataArray, setDataArray] = useState(INITIAL_DATA);

  const SaveDataHandler = (userInputValues) => {
    const saveDataInputs = {
      ...userInputValues,
      id: Math.random().toString(),
    };
    setDataArray((prevState) => {
      return [...prevState, saveDataInputs];
    });
  };

  return (
    <div className={classes.bg}>
      <Header active={isLogged} />
      {/* <Login /> */}
      <Card dataArray={dataArray} />
      <Input onSaveData={SaveDataHandler} />
    </div>
  );
}

export default App;
