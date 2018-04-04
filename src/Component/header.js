import React       from 'react';
import { NavLink } from 'react-router-dom';
import Icon        from 'react-ionicons'

const Header = props => {
    return (
        <header role="heading">
        <div className="nav" role="navigation">
        <NavLink to="#">
        <Icon icon="ios-information-circle-outline" color="#61dafb" fontSize="2rem">
        </Icon>
        </NavLink>
        <NavLink to="/">
        <h1 alt="React-WWWWID">React-WWWID</h1>
        </NavLink>
        <NavLink to="/categories">
        <Icon icon="ios-menu" color="white" fontSize="2.5rem">
        </Icon>
        </NavLink>
        </div>
        </header>
    );
}

export default Header;
