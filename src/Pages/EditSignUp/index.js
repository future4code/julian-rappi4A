import React from 'react';
import Styled from 'styled-components'
import { TextField, Button } from '@material-ui/core'
import { ArrowBackIos } from '@material-ui/icons'
import { useForm } from '../../hooks/useForm'
import { ThemeProvider } from '@material-ui/core/styles';
import { theme, useStyles } from '../../Components/MaterialTheme/theme'

const Container = Styled.div`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Form = Styled.form`
  display: grid;
  gap: 16px;
  padding: 16px;
`
const ButtonStyled = Styled(Button)`
  height: 42px;
`
const Header = Styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  border-bottom: 1px solid gray;
`
const ArrowBackIosStyled = Styled(ArrowBackIos)`
  padding: 0 16px;
`
const Label = Styled.label`
  position: absolute;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, 0);
`

function EditSignUp() {
  const classes = useStyles()
  const [form, onChangeInput] = useForm({
    name: '',
    email: '',
    cpf: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
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
