import React, { useEffect, useState, Suspense } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom";
import classes from "./App.module.css";

import Navbar from './components/Navbar';
import Edit from './components/EditStory';
// import Signup from './components/Signup';
import Login from './components/Login';
import EditStory from './components/EditStory';
import AddStory from './components/Addstory';

const Dashboard = React.lazy(() => import('./components/Dashboard'));
function App() {
  const [authUser, setAuth] = useState('');
  //setting the parent body color
  document.querySelector('body').style.backgroundColor='#dfe4ea';
  
  useEffect(()=>{
    let user = localStorage.getItem('email');
    setAuth(user);
  },[])

  return (
    <Router>
        <div className={classes.container}></div>
        <Navbar />
        <br />
        {!authUser && <Route path="/" exact component={Login} />}
        {!authUser && <Route path="/login" exact component={Login} />}
        {authUser && <Route path="/edit" exact component={Edit} />}
        {authUser && <Route path="/edit/:id"  component={EditStory} />}
        <Suspense fallback={<div className={classes.loading}><h1>Loading...</h1></div>}>      
        {authUser && <Route path="/home" component={Dashboard} />}
        </Suspense>
        {authUser && <Route path="/add" component={AddStory} />}
    </Router>
  );
}

export default App;
