import { Route, Switch } from "react-router-dom";
import HomePage from "../views/HomePage";
import Windows from "../views/WindowsPage";
// import "./sass/main.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/windows" component={Windows} />
      </Switch>
    </div>
  );
}

export default App;
