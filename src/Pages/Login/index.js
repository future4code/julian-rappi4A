import React from 'react';
import logo from '../../img/logo.svg'
import {LoginContainer, LoginImg, LoginInput, LoginTextSpan,SpanClique} from './styles'
import { LoginForm } from "./styles";
import { useForm} from '../../hooks/useForm'
import { Button } from "@material-ui/core";
import { ThemeProvider  } from '@material-ui/core/styles';
import { theme, useStyles } from '../../Components/MaterialTheme/theme'
import TitlePage from '../../Components/TitlePage'

  
function Login() {
  const classes = useStyles()

  const [form, onChangeInput] = useForm({
    email:'',
    password:''
  })

  return (
    <LoginContainer >
      
    <LoginImg src={logo} alt={'logo'} />    
    <TitlePage title={'Entrar'}/>
    <LoginForm>
    <ThemeProvider theme={theme}>
        <LoginInput
          type={"email"}
          label={"E-mail"}
          color={"primary"}
          onChange={onChangeInput}
          value={form["email"]}
          name={"email"}
          variant="outlined"
        />
        <LoginInput
          type={"password"}
          label={"Senha"}
          onChange={onChangeInput}
          value={form["password"]}
          name={"password"}
          variant="outlined"
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
      <LoginTextSpan><span>Não Possui cadastro? </span><SpanClique>Clique aqui.</SpanClique></LoginTextSpan>
    </LoginContainer>
  );
}

export default Login;
