import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import s from './AppBar.module.scss';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  authBtn: {
    marginLeft: 5,
    backgroundColor: '#6b7cb4',
    color: 'white',

    '&:hover': {
      backgroundColor: '#5064a3',
      boxShadow: 'none',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
});

const AuthNav = () => {
  const ms = useStyles();

  return (
    <div>
      <NavLink to='/register' exact>
        <Button variant='contained' className={ms.authBtn} type='button'>
          Registration
        </Button>
      </NavLink>

      <NavLink to='/login' exact>
        <Button variant='contained' className={ms.authBtn} type='button'>
          Login
        </Button>
      </NavLink>
    </div>
  );
};

export default AuthNav;
