import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Coffee App</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Coffee List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Coffee
        </NavLink>
      </div>
    </header>
  );
};

export default Header;