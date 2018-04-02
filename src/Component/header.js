import React       from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => {
    return (
        <header role="heading">
        <div className="nav" role="navigation">
        <NavLink to="/">
        <h1 alt="React-WWWWID">React-WWWID</h1>
        </NavLink>
        </div>
        </header>
    );
}

export default Header;
