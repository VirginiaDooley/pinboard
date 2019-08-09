import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '10px',
  margin: '10px 10px 10px 10px',
  textDecoration: 'none',
  color: 'white',
}

const nav = {
  padding: '10px',
  margin: '10px 10px 10px 10px',
  background: 'pink',
}

const NavBar = () => {
  return (
    <div style={nav} className="navbar">

      <NavLink
        style={link}
        to="/"
      >
        Home
      </NavLink>

      <NavLink style={link}
        to="/boards"
      >
        Board List
      </NavLink>

    </div>
  );
}

export default NavBar;
