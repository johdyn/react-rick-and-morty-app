import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Characters from "./components/Characters";
import SingleCharacter from "./components/SingleCharacter";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main class="main-content">
          <Switch>
            <Route path="/characters/:id">
              <SingleCharacter />
            </Route>
            <Route path="/characters">
              <Characters />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
