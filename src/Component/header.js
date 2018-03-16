import React       from 'react';
import { NavLink } from 'react-router-dom';
import '../../src/App.css'; 
import logo from '../../src/logo.png'; 

const Header = props => {
    return (
               <header>
               <NavLink to="/" className="brand">
               <img src={logo} className="App-logo" alt="Ri7nz Logo" />
               <h1>R I 7 N Z</h1>
               </NavLink>
               <div className="nav">
               <ul>
                <li><NavLink to="/articles">Article</NavLink></li>
                <li><NavLink to="/instagram">Instagram</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/wwid">WWWID</NavLink></li>
                </ul>
                </div>
               </header>
    );
}

export default Header;
