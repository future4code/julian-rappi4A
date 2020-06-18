import React, { useState } from 'react';
import logo from '../../img/logo.svg'
import { LoginContainer, LoginImg, LoginInput, LoginTextSpan, SpanClique } from './styles'
import { LoginForm } from "./styles";
import { useForm } from '../../hooks/useForm'
import { Button, IconButton, InputAdornment,FormControl,InputLabel, OutlinedInput } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { theme, useStyles } from '../../Components/MaterialTheme/theme'
import TitlePage from '../../Components/TitlePage'
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../Components/Configs';

function Login() {

  const history = useHistory()
  const classes = useStyles()

  const [form, onChangeInput,setForm] = useForm({
    email: '',
    password: '',
    showPassword: false
  })

  const onSubmitLogin = (event) => {
    event.preventDefault()

    axios.post(`${baseUrl}/login`, form)
      .then(result => {
        window.localStorage.setItem('token', result.data.token)

        if (result.data.user.hasAddress) {
          history.push('/home')
        } else {
          history.push('/register-adress')
        }

      })
      .catch(erro => {
        alert('Falha ao efetuar login!')
      })

  }

  const clickShowPassword = () => {
     setForm({...form, showPassword: !form.showPassword})
  }

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <LoginContainer >

      <LoginImg src={logo} alt={'logo'} />
      <TitlePage title={'Entrar'} />
      <LoginForm onSubmit={onSubmitLogin}>
        <ThemeProvider theme={theme}>
          <LoginInput
            type={"email"}
            label={"E-mail"}
            color={"primary"}
            onChange={onChangeInput}
            value={form["email"]}
            name={"email"}
            variant="outlined"
            required
          />

         <FormControl variant="outlined" required>
            <InputLabel>Senha</InputLabel>
            <OutlinedInput
            name={'password'}
            type={form.showPassword ? 'text' : 'password'}
            value={form['password']}
            onChange={onChangeInput}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                aria-label="toggle password visibility"
                onClick={clickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge='end'
                >
                  {form.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
              labelWidth={60}
              />

         </FormControl>

          <Button
            classes={{
              root: classes.root,
              label: classes.label
            }}
            variant={"contained"}
            color={"primary"}
            type={"submit"}>
            Entrar
        </Button>
        </ThemeProvider>
      </LoginForm>
      <LoginTextSpan><span>Não Possui cadastro? </span><Link to={'signup'}><SpanClique>Clique aqui.</SpanClique></Link></LoginTextSpan>
    </LoginContainer>
  );
}

export default Login;
