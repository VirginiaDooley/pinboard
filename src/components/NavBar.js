import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchContainer from '../containers/SearchContainer'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'grey',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div style={{ borderBottom: '1px solid grey', paddingBottom: '5px', paddingTop: '5px', marginBottom: '12px', marginTop: '12px' }}>

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

      <SearchContainer/>

    </div>
  );
}

export default NavBar;
