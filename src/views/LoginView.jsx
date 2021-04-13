import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import s from './Views.module.scss';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';

export default function LoginView() {
  const [email, setEmail] = useState('s@mail.net');
  const [password, setPassword] = useState('qweqweqwe');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleEmailChange = ({ target: { value } }) => setEmail(value);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }));

    setEmail('');
    setPassword('');
    setShowPassword(false);
  };

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <div className={s.authFormWrap}>
      <h1>Login</h1>

      <form onSubmit={handleSubmit} className={s.authForm} autoComplete='off'>
        <TextField
          id='outlined-basic'
          label='Email'
          variant='outlined'
          className={s.authFormInput}
          type='email'
          name='email'
          value={email}
          onChange={handleEmailChange}
        />

        <FormControl className={s.authFormInput} variant='outlined'>
          <InputLabel htmlFor='outlined-adornment-password'>
            Password
          </InputLabel>
          <OutlinedInput
            type={showPassword ? 'text' : 'password'}
            onChange={handlePasswordChange}
            id='outlined-adornment-password'
            name='password'
            value={password}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>

        <Button variant='contained' className={s.authFormBtn} type='submit'>
          Login now
        </Button>
      </form>
    </div>
  );
}
