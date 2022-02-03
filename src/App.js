import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom";
import classes from "./App.module.css";

import Navbar from './components/Navbar';
import Signup from './components/Signup';
import EditStory from './components/EditStory';
import Dashboard from './components/Dashboard';
import AddStory from './components/Addstory';

function App() {
  //setting the parent body color
  document.querySelector('body').style.backgroundColor='#dfe4ea';
  
  return (
    <Router>
      <div className={classes.container}></div>
      <Navbar />
      <br />
      <Route path="/" exact component={Signup} />
      <Route path="/edit/:id"  component={EditStory} />
      <Route path="/home" component={Dashboard} />
      <Route path="/add" component={AddStory} />
    </Router>
  );
}

export default App;
