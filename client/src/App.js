import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages";
import List from "./list";
import List2 from "./list2";
import Header from "./header";
import Breadcrumbs from "./breadcrumbs";
import CarRequest from './authFlow';


class App extends Component {
  render() {
    const App = () => (
      <div>
        <Header />
        <Breadcrumbs />
        <div className="centerPage">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/list" component={List} />
            <Route path="/list2" component={List2} />
            <Route path="/request" component={List} />
          </Switch>
        </div>
      </div>
    );
    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;
