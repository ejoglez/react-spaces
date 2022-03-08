import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css'
import Toggle from '../ToggleButtom/Toggle'

function Navbar(){
    return (
    <div className="navbar">
        <Link exact to='/'>
            <h1>OurReactSpace</h1>
        </Link>
        <NavLink exact to='/profile'>
            <h3>Profile</h3>
        </NavLink>
        <NavLink exact to='/blogs'>
            <h3>Blog</h3>
        </NavLink>
        <Toggle />
    </div>
    )
}

export default Navbar;