import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom";
import classes from "./App.module.css";

import Navbar from './components/Navbar';
import Edit from './components/EditStory';
import Signup from './components/Signup';
import Login from './components/Login';
import EditStory from './components/EditStory';
import Dashboard from './components/Dashboard';
import AddStory from './components/Addstory';

function App() {
  const [dashboardAuth, setAuth] = useState(true);
  //setting the parent body color
  document.querySelector('body').style.backgroundColor='#dfe4ea';
  
  return (
    <Router>
      <div className={classes.container}></div>
      <Navbar />
      <br />
      <Route path="/" exact component={Signup} />
      <Route path="/login" exact component={Login} />
      <Route path="/edit" exact component={Edit} />
      <Route path="/edit/:id"  component={EditStory} />
      {dashboardAuth && <Route path="/home" component={Dashboard} />}
      <Route path="/add" component={AddStory} />
    </Router>
  );
}

export default App;
