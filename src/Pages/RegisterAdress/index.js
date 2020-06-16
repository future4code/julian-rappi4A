import React from 'react';
import { Container, Form, ButtonStyled, Header, ArrowBackIosStyled, Label } from './style'
import { TextField } from '@material-ui/core'
import { useForm } from '../../hooks/useForm'
import { ThemeProvider } from '@material-ui/core/styles';
import { theme, useStyles } from '../../Components/MaterialTheme/theme'
import TitlePage from '../../Components/TitlePage'
import {useHistory} from 'react-router-dom'

function RegisterAdress() {
  const history = useHistory()
  const classes = useStyles()
  const [form, onChangeInput] = useForm({
    street: '',
    number: '',
    neighbourhood: '',
    city: '',
    state: '',
    complement: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push('/home')
  }

  return (
    <Container>
      <Header>
        <ArrowBackIosStyled />
      </Header>
      <TitlePage title={'Meu endereço'}/>
      <Form onSubmit={handleSubmit}>
        <ThemeProvider theme={theme}>
          <TextField
            required
            type={'text'}
            placeholder={'Rua / Av.'}
            name={'street'}
            label="Logradouro"
            value={form.street}
            variant="outlined"
            onChange={onChangeInput}
          />
          <TextField
            required
            type={'number'}
            placeholder={'Número'}
            name={'number'}
            label='Número'
            value={form.number}
            variant='outlined'
            onChange={onChangeInput}
          />
          <TextField
            type={'text'}
            placeholder={'Apto. / Bloco'}
            name={'complement'}
            label='Complemento'
            value={form.complement}
            variant='outlined'
            onChange={onChangeInput}
          />
          <TextField
            required
            type={'text'}
            placeholder={'Bairro'}
            name={'neighbourhood'}
            label='Bairro'
            value={form.neighbourhood}
            variant='outlined'
            onChange={onChangeInput}
          />
          <TextField
            required
            type={'text'}
            placeholder={'Cidade'}
            name={'city'}
            label='Cidade'
            value={form.city}
            variant='outlined'
            onChange={onChangeInput}
          />
          <TextField
            required
            type={'text'}
            placeholder={'Estado'}
            name={'state'}
            label='Estado'
            value={form.state}
            variant='outlined'
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

export default RegisterAdress;
