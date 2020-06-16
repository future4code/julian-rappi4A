import React from 'react';
import { Container, Form, ButtonStyled, Header, ArrowBackIosStyled, Label } from'./style' 
import { TextField } from '@material-ui/core'
import { useForm } from '../../hooks/useForm'
import { ThemeProvider } from '@material-ui/core/styles';
import { theme, useStyles } from '../../Components/MaterialTheme/theme'
import { useHistory } from 'react-router-dom'

function EditSignUp() {
  const history = useHistory()
  const classes = useStyles()
  const [form, onChangeInput] = useForm({
    name: '',
    email: '',
    cpf: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push('/perfil')
  }

  return (
    <Container>
      <Header>
        <ArrowBackIosStyled />
        <Label>Editar</Label>
      </Header>
      <Form onSubmit={handleSubmit}>
        <ThemeProvider theme={theme}>
          <TextField
            required
            type={'text'}
            placeholder={'Nome e sobrenome'}
            name={'name'}
            label="Nome"
            value={form.name}
            variant="outlined"
            onChange={onChangeInput}
          />
          <TextField
            required
            type={'email'}
            placeholder={'email@email.com'}
            name={'email'}
            label="E-mail"
            value={form.email}
            variant="outlined"
            onChange={onChangeInput}
          />
          <TextField
            required
            type={'number'}
            placeholder={'000.000.000-00'}
            name={'cpf'}
            label="CPF"
            value={form.cpf}
            variant="outlined"
            onChange={onChangeInput}
          />
          <ButtonStyled
            classes={{
              root: classes.root,
              label: classes.label
            }}
            type={'submit'}
            variant={'contained'}
            color={'primary'}>
            Salvar
        </ButtonStyled>
        </ThemeProvider>
      </Form>
    </Container>
  );
}

export default EditSignUp;
