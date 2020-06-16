import React from 'react';
import { Container, Nav, ArrowBackIosStyled, ImgSignup, Titulo, Forms, InputSignup } from './styled';
import Button from '@material-ui/core/Button';
import logoRappi from './logo-future-eats-invert.png';
import { FormControl, InputLabel, OutlinedInput, IconButton, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  label: {
    textTransform: 'capitalize',
  },
});
function SignUp() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  return (
    <Container>
      <Nav>
        <ArrowBackIosStyled/>
      </Nav>
      <ImgSignup src={logoRappi}/>        
      <Titulo>Cadastrar</Titulo>
      <Forms onSubmit={'Submit'}>
        <InputSignup
          required
          label="Nome"
          type="text"
          placeholder="Nome e Sobrenome"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />
        <InputSignup
          required
          label="E-mail"
          type="email"
          placeholder="email@email.com"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />
        <InputSignup
          required
          label="CPF"
          placeholder="000.000.000-00"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />
        <FormControl
          required
          variant="outlined"
          label="Senha"
          placeholder="Mínimo 6 caracteres"
        >
          <InputLabel shrink={true} >
            Senha
          </InputLabel>
          <OutlinedInput
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <FormControl
          required
          variant="outlined"
          label="Confirmar"
          placeholder="Confirme a senha anterior"
          shrink={true} 
        >
          <InputLabel shrink={true} >
            Confirmar
          </InputLabel>
          <OutlinedInput
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <Button 
          variant="contained" 
          type={'submit'}
          color='primary'
          classes={{label: classes.label}}
          >Criar
          </Button>
      </Forms>
    
    </Container>
  );
}

export default SignUp;
