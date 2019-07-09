import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchContainer from '../containers/SearchContainer'


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
  background: 'grey',
}

const NavBar = () => {
  return (
    <div style={nav}>

      <NavLink
        style={link}
        to="/"
      >
        Home
      </NavLink>

      <NavLink style={link}
        to="/new"
      >
        Create New Board
      </NavLink>

      <NavLink style={link}
        to="/save"
      >
        Save Board
      </NavLink>

      <NavLink style={link}
        to="/delete"
      >
        Delete Board
      </NavLink>

      <SearchContainer />

    </div>
  );
}

export default NavBar;
