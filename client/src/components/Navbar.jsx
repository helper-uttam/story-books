import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


 const Navbar = () => {
   const [logout, setLogout] = useState(false);
<<<<<<< HEAD
   
=======

>>>>>>> eefe86994d17063274368d07e867888f37db606c
   useEffect(()=>{
      const a = localStorage.getItem('email');
      if(a){
        setLogout(true);
      }
   },[logout]);
<<<<<<< HEAD
   
=======

>>>>>>> eefe86994d17063274368d07e867888f37db606c
   const logOutHandler = () => {
      localStorage.clear();
      window.location = "/login";
    }

    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Story Books</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">SignUp</Link>
          </li>
          <li className="navbar-item">
          <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li className="navbar-item">
          <Link to="/home" className="nav-link">DashBoard</Link>
          </li>
          <li className="navbar-item">
          <Link to="/add" className="nav-link">Add Story</Link>
          </li>
        </ul>
        </div>
        {logout && <div className='right_btn'>
          <button type="button" className="btn btn-light" onClick={logOutHandler}>LogOut</button>
        </div>}
      </nav>
    );

}
export default Navbar;
