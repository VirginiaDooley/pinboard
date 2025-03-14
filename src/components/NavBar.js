import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '10px',
  margin: '10px',
  textDecoration: 'none',
  color: 'white',
}

const nav = {
  padding: '10px',
  margin: '10px',
  background: '#ff6f61',
}

const NavBar = () => {
  return (
    <div style={nav} className="navbar">

      <NavLink
        exact
        style={link}
        to="/"
      >
        Home
      </NavLink>

      <NavLink style={link}
        to="/boards"
      >
        All Boards
      </NavLink>

    </div>
  );
}

export default NavBar;
