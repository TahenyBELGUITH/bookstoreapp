import Card from "./component/UI/Card";
import Header from "./component/UI/Header";
import Input from "./component/Formulaire/Input";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.bg}>
      <Header />
      <Card />
      <Input />
    </div>
  );
}

export default App;
