import React, { useEffect, useState } from 'react';
import { Container, Form, ButtonStyled, Header, ArrowBackIosStyled, Label } from'./style' 
import { TextField } from '@material-ui/core'
import { useForm } from '../../hooks/useForm'
import { ThemeProvider } from '@material-ui/core/styles';
import { theme, useStyles } from '../../Components/MaterialTheme/theme'
import axios from 'axios' 
import { baseUrl } from '../../Components/Configs';



function EditAdress() {

useEffect(() => {
axios.get(`${baseUrl}/profile/address`, {
  headers:{
    auth: localStorage.getItem("token")
  } }).then(res => {   
    setAddress(res.data.address)
    
  })
  
},[])

const [address, setAddress] = useState({})

  const classes = useStyles()
  const [form, onChangeInput] = useForm({
    
    street: '',
    number: '',
    neighbourhood: '',
    city: '',
    state: '',
    complement: ''
  })


  

  
console.log(form)
  const handleSubmit = (e) => {
    e.preventDefault()

    axios.put(`${baseUrl}/address`, form, {
      headers:{
        auth: localStorage.getItem("token")
      }
    }).then(res => {
      window.alert("Endereco atualizado")
    }).catch(res =>{
      window.alert("Falhou ao atualizar")
    })  
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
          InputLabelProps={{
            shrink: true
          }}
           
            type={'text'}            
            name={'street'}
            label="Logradouro"
            value={form.street}
            variant="outlined"
            onChange={onChangeInput}
          />
          <TextField          
          InputLabelProps={{
            shrink: true
          }}
            
            type={'number'}            
            name={'number'}
            label="Numero"
            value={form.number}
            variant="outlined"
            onChange={onChangeInput}
          />
          <TextField
          InputLabelProps={{
            shrink: true
          }}
            
            type={'text'}
            placeholder={address.complement}
            name={'complement'}
            label="Complemento"
            value={form.complement}
            variant="outlined"
            onChange={onChangeInput}
          />
          <TextField
          placeholder={address.neighbourhood}
          InputLabelProps={{
            shrink: true
          }}
            
            type={'text'}
            name={'neighbourhood'}
            label="Bairro"
            value={form.neighbourhood}
            variant="outlined"
            onChange={onChangeInput}
          />
          <TextField
          placeholder={address.city}
          InputLabelProps={{
            shrink: true
          }}
           
            type={'text'}
            name={'city'}
            label="Cidade"
            value={form.city}
            variant="outlined"
            onChange={onChangeInput}
          />
          <TextField
          placeholder={address.state}
          InputLabelProps={{
            shrink: true
          }}
            
            type={'text'}
            name={'state'}
            label="Estado"
            value={form.state}
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
