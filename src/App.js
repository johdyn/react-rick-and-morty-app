import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header-class">
          <Navigation />
        </header>
        <main>
          <Switch>
            <Route path="/characters"></Route>
            <Route path="/"></Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
