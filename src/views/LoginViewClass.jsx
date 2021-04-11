import React, { Component } from 'react';
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

class LoginView extends Component {
  state = {
    email: '',
    password: '',
    showPassword: false,
  };

  handleEmailChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  handlePasswordChange = (prop) => (event) => {
    this.setState({ ...this.state, [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState({ ...this.state, showPassword: !this.state.showPassword });
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className={s.authFormWrap}>
        <h1>Login</h1>

        <form
          onSubmit={this.handleSubmit}
          className={s.authForm}
          autoComplete='off'
        >
          <TextField
            id='outlined-basic'
            label='Email'
            variant='outlined'
            className={s.authFormInput}
            type='email'
            name='email'
            value={email} // *
            onChange={this.handleEmailChange}
          />

          <FormControl
            className={s.authFormInput}
            // className={clsx(makeStyles.margin, makeStyles.textField)}
            variant='outlined'
          >
            <InputLabel htmlFor='outlined-adornment-password'>
              Password
            </InputLabel>
            <OutlinedInput
              type={this.state.showPassword ? 'text' : 'password'}
              // value={values.password} // *
              onChange={this.handlePasswordChange('password')}
              id='outlined-adornment-password'
              // type='password'
              name='password'
              value={password} // *
              // onChange={this.handleChange} // *
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={this.handleClickShowPassword}
                    onMouseDown={this.handleMouseDownPassword}
                    edge='end'
                  >
                    {this.state.showPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
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
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
