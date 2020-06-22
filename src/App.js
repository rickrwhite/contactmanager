import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
//import logo from "./logo.svg";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";

//import "./App.css";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>

            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Learn React */}
            </a>
          </header>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
