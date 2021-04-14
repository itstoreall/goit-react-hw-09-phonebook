import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import s from './AppBar.module.scss';

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

export default function UserMenu() {
  const email = useSelector(authSelectors.getUserEmail);
  const dispatch = useDispatch();
  const ms = useStyles();

  const onLogout = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <div className={s.userMenuContainer}>
      <Avatar src='/broken-image.jpg' className={s.userAvatar} />
      <span className={s.userName}>{email}</span>

      <Button
        variant='contained'
        className={ms.authBtn}
        type='button'
        onClick={onLogout}
      >
        Logout
      </Button>
    </div>
  );
}
