import React, { useState } from 'react';
import logo from '../../img/logo.svg'
import {LoginContainer, LoginImg, LoginInput, LoginTextSpan,SpanClique} from './styles'
import { LoginForm } from "./styles";
import { useForm} from '../../hooks/useForm'
import { Button } from "@material-ui/core";
import { ThemeProvider  } from '@material-ui/core/styles';
import { theme, useStyles } from '../../Components/MaterialTheme/theme'
import TitlePage from '../../Components/TitlePage'
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../Components/Configs';

  
function Login() {
  
  const history = useHistory()
  const classes = useStyles()

  const [form, onChangeInput] = useForm({
    email:'',
    password:''
  })

  const onSubmitLogin = (event) => {    
    event.preventDefault()

    const body = {
      email:form.email,
      password:form.password
    }

    axios.post(`${baseUrl}/login`, body)
    .then(result => {
      window.localStorage.setItem('token', result.data.token)
      
      if(result.data.user.hasAddress) {
        history.push('/home')
      } else {
        history.push('/register-adress')
      }


     
      
    })
    .catch(erro => {
      alert('Falha ao efetuar login!')
    })


        
  }

  return (
    <LoginContainer >
      
    <LoginImg src={logo} alt={'logo'} />    
    <TitlePage title={'Entrar'}/>
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
        <LoginInput
          type={"password"}
          label={"Senha"}
          onChange={onChangeInput}
          value={form["password"]}
          name={"password"}
          variant="outlined"
          required
         />
        
        <Button
        classes={{
          root: classes.root, 
          label: classes.label}}        
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
