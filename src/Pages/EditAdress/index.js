import React from 'react';
import { Container, Form, ButtonStyled, Header, ArrowBackIosStyled, Label } from'./style' 
import { TextField } from '@material-ui/core'
import { useForm } from '../../hooks/useForm'
import { ThemeProvider } from '@material-ui/core/styles';
import { theme, useStyles } from '../../Components/MaterialTheme/theme'


function EditAdress() {
  const classes = useStyles()
  const [form, onChangeInput] = useForm({
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Container>
      <Header>
        <ArrowBackIosStyled />
      </Header>
      <Form onSubmit={handleSubmit}>
        <ThemeProvider theme={theme}>
          <TextField
            required
            type={'text'}
            placeholder={'Rua/ Av.'}
            name={'name'}
            label="Logradouro"
            value={form.name}
            variant="outlined"
            onChange={onChangeInput}
          />
          <TextField
            required
            type={'number'}
            placeholder={'Numero.'}
            name={'name'}
            label="Numero"
            value={form.name}
            variant="outlined"
            onChange={onChangeInput}
          />
          <TextField
            required
            type={'text'}
            placeholder={'Complemento.'}
            name={'name'}
            label="Complemento"
            value={form.name}
            variant="outlined"
            onChange={onChangeInput}
          />
          <TextField
            required
            type={'text'}
            placeholder={'Bairro.'}
            name={'name'}
            label="Bairro"
            value={form.name}
            variant="outlined"
            onChange={onChangeInput}
          />
          <TextField
            required
            type={'text'}
            placeholder={'Cidade.'}
            name={'name'}
            label="Cidade"
            value={form.name}
            variant="outlined"
            onChange={onChangeInput}
          />
          <TextField
            required
            type={'text'}
            placeholder={'Estado.'}
            name={'name'}
            label="Estado"
            value={form.name}
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

export default EditAdress;
