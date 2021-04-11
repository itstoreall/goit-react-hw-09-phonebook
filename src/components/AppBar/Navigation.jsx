import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import s from './AppBar.module.scss';

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink to='/' exact className={s.link} activeClassName={s.activeLink}>
      <h1 className={s.logo}>Phonebook</h1>
    </NavLink>

    {isAuthenticated && (
      <NavLink
        to='/contacts'
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Contacts
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
