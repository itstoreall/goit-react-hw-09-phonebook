import React, { useState } from 'react';
import { connect } from 'react-redux';
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

const RegisterView = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = ({ target: { name, value } }) =>
    name === 'name' ? setName(value) : setEmail(value);

  const handleSubmit = (e) => {
    e.preventDefault();

    onRegister({ name, email, password });

    setEmail('');
    setPassword('');
    setShowPassword('');
    setShowPassword(false);
  };

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <div className={s.authFormWrap}>
      <h1>Registration</h1>

      <form onSubmit={handleSubmit} className={s.authForm} autoComplete='off'>
        <TextField
          id='name-outlined-basic'
          label='Name'
          variant='outlined'
          className={s.authFormInput}
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
        />

        <TextField
          id='email-outlined-basic'
          label='Email'
          variant='outlined'
          className={s.authFormInput}
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
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
          Register now
        </Button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
