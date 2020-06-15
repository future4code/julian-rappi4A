import React from 'react';
import logo from '../../img/logo.svg'
import {LoginContainer, LoginImg, LoginInput} from './styles'
import { LoginForm } from "./styles";
import { useForm} from '../../hooks/useForm'
import { Button } from "@material-ui/core";
import { ThemeProvider  } from '@material-ui/core/styles';
import { theme, useStyles } from '../../Components/MaterialTheme/theme'

  
function Login() {
  const classes = useStyles()

  const [form, onChangeInput] = useForm({
    email:'',
    password:''
  })

  return (
    <LoginContainer >
      
    <LoginImg src={logo} alt={'logo'} />    
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
        
        <Button variant={"contained"} color={"primary"} type={"submit"} className={classes.color}>
          ENTRAR
        </Button>
        </ThemeProvider>        
      </LoginForm>
      
    </LoginContainer>
  );
}

export default Login;
