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
        <Label>Endereco</Label>
      </Header>
      <Form onSubmit={handleSubmit}>
        <ThemeProvider theme={theme}>
          <TextField
            required
            type={'text'}
            placeholder={'Rua/ Av.'}
            name={'logradouro'}
            label="Logradouro"
            value={form.logradouro}
            variant="outlined"
            onChange={onChangeInput}
          />
          <TextField
            required
            type={'number'}
            placeholder={'Numero.'}
            name={'numero'}
            label="Numero"
            value={form.numero}
            variant="outlined"
            onChange={onChangeInput}
          />
          <TextField
            required
            type={'text'}
            placeholder={'Complemento.'}
            name={'complemento'}
            label="Complemento"
            value={form.complemento}
            variant="outlined"
            onChange={onChangeInput}
          />
          <TextField
            required
            type={'text'}
            placeholder={'Bairro.'}
            name={'bairro'}
            label="Bairro"
            value={form.bairro}
            variant="outlined"
            onChange={onChangeInput}
          />
          <TextField
            required
            type={'text'}
            placeholder={'Cidade.'}
            name={'cidade'}
            label="Cidade"
            value={form.cidade}
            variant="outlined"
            onChange={onChangeInput}
          />
          <TextField
            required
            type={'text'}
            placeholder={'Estado.'}
            name={'estado'}
            label="Estado"
            value={form.estado}
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
