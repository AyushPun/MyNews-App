import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/"><News key="general" pageSize={6} country="in" category="general" /></Route>
            <Route exact path="/business"><News key="business" pageSize={6} country="in" category="business" /></Route>
            <Route path="/entertainment"><News key="entertainment" pageSize={6} country="in" category="entertainment" /></Route>
            <Route exact path="/general"><News key="general" pageSize={6} country="in" category="general" /></Route>
            <Route exact path="/health"><News key="health" pageSize={6} country="in" category="health" /></Route>
            <Route exact path="/science"><News key="science" pageSize={6} country="in" category="science" /></Route>
            <Route exact path="/sports"><News key="sports" pageSize={6} country="in" category="sports" /></Route>
            <Route exact path="/technology"><News key="technology" pageSize={6} country="in" category="technology" /></Route>
          </Switch>
        </Router>
      </>
    );
  }
}
