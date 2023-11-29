import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ user }) {
  return (
    <nav>
      <Link to="/">Movies List</Link>
      &nbsp; | &nbsp;
      <Link to="/actors">Actors List</Link>
      <p>welcome { user }!</p>
    </nav>
    
  );
}

export default NavBar;