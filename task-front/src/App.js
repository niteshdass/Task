import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import Subject from "./components/pages/Subject";
import Navbar from "./components/layout/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
 
import Student from "./components/students/Student";
 

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/subject" component={Subject} />
          <Route exact path="/student" component={Student} />
     
        </Switch>
      </div>
    </Router>
  );
}

export default App;
