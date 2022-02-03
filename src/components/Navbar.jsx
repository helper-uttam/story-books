import React from 'react';
import { Link } from 'react-router-dom';


 const Navbar = () => {

    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Story Books</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">SignUp</Link>
          </li>
          <li className="navbar-item">
          <Link to="/home" className="nav-link">DashBoard</Link>
          </li>
          <li className="navbar-item">
          <Link to="/add" className="nav-link">Add Story</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  
}
export default Navbar;