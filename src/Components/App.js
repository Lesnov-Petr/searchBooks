import { Route, Switch } from "react-router-dom";
import HomePage from "../views/HomePage";
import BookPage from "../views/BookPage";
import Header from "../Components/Header";
import "../sass/main.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/book" component={BookPage} />
      </Switch>
    </div>
  );
}

export default App;
