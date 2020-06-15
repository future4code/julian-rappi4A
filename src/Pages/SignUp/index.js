import React from 'react';
import { Container, Nav, ImgSignup, Forms, InputSignup } from './styled';
import Button from '@material-ui/core/Button';
import logoRappi from './logo-future-eats-invert.png'
  
function SignUp() {
  return (
    <Container>
      <Nav>
        <Button variant="contained">Voltar</Button>
      </Nav>
      <ImgSignup src={logoRappi}/>        
      <p>Cadastrar</p>
      <Forms>
        <InputSignup
          label="Nome"
          defaultValue="Nome e Sobrenome"
          variant="outlined"
        />
        <InputSignup
          label="E-mail"
          defaultValue="email@email.com"
          variant="outlined"
        />
        <InputSignup
          label="CPF"
          defaultValue="000.000.000-00"
          variant="outlined"
        />
        <InputSignup
          label="Senha"
          defaultValue="Mínimo 6 caracteres"
          variant="outlined"
          type="password"
        />
        <InputSignup
          label="Confirmar"
          defaultValue="Confirme a senha anterior"
          variant="outlined"
          type="password"
        />
        <Button variant="contained">Criar</Button>
      </Forms>
    
    </Container>
  );
}

export default SignUp;
