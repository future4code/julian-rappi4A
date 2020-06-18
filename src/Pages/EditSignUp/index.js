import React, { useEffect, useState } from 'react';
import { Container, Form, ButtonStyled, Header, ArrowBackIosStyled, Label } from './style'
import { TextField } from '@material-ui/core'
import { useForm } from '../../hooks/useForm'
import { ThemeProvider } from '@material-ui/core/styles';
import { theme, useStyles } from '../../Components/MaterialTheme/theme'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../../Components/Configs';

function EditSignUp() {
  const history = useHistory()
  const classes = useStyles()
  const [profile, setProfile] = useState()
  const [form, onChangeInput] = useForm({
    name: '',
    email: '',
    cpf: ''
  })

  useEffect(() => {
    axios.get(`${baseUrl}/profile`,
      { headers: { auth: localStorage.getItem('token') } })
      .then(res => {
        setProfile(res.data.user)
      })
      .catch(err => {
        window.alert('Atualização do perfil falhou')
      })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.put(`${baseUrl}/profile`, form,
      { headers: { auth: localStorage.getItem('token') } })
      .then(res => {
        console.log(res.data)
        history.push('/perfil')
      })
      .catch(err => {
        window.alert('Atualização do perfil falhou')
      })
  }

  const logout = () => {
    history.push('/perfil')
  }

  return (
    <Container>
      <Header>
        <ArrowBackIosStyled onClick={logout} />
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
