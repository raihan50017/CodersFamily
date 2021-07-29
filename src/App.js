import "./App.css";
import Home from "./components/pages/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Service from "./components/pages/service/Service";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact-us">
            <Contact></Contact>
          </Route>
          <Route path="/our-services">
            <Service></Service>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
