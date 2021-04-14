import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import s from './AppBar.module.scss';
import { authSelectors } from '../../redux/auth';

export default function AppBar() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <header className={s.header}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
