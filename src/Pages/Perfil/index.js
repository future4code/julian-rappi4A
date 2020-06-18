import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import TitlePage from '../../Components/TitlePage'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import Footer from '../../Components/Footer'
import Axios from 'axios';
import {baseUrl} from '../../Components/Configs'
import {Link} from 'react-router-dom'

const PerfilContainer = styled.div`

max-width: 400px;
width: 100%;


`

const PerfilBar = styled.div`
display:flex;
justify-content:center;
align-items:center;
height: 64px;
-webkit-backdrop-filter: blur(10px);
backdrop-filter: blur(10px);
box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);

`

const PerfilInfo = styled.div`
display:flex;
flex-direction:rows;
justify-content: space-between;


`

const PerfilInfoDetalhes = styled.div`
text-align: left;
letter-spacing: -0.39px;
line-height: 1.6;
font-size: 16px;
padding: 5px 16px;

`

const PerfilInfoIcone = styled.p`
display:flex;
justify-content:center;
margin:10px;

`

const PerfilEndereco = styled.div`
display:flex;
flex-direction:rows;
justify-content: space-between;
text-align: left;
background-color: #eeeeee;
height: 76px;
line-height: 1.6;
padding: 5px 16px;

`

const PerfilEnderecoTitulo = styled.p`
margin-top: 10px;
color: #b8b8b8

`

const PerfilEnderecoInfo = styled.p`
margin-top: 2px;

`
const PerfilEndIcone = styled.p`
display:flex;
justify-content:center;
margin-top:15px;
margin-right:-5px;

`

const PerfilEndDetalhes = styled.div`


`

const PedidosContainer = styled.div`

border: 1px solid #eeeeee;
border-radius: 5px;
width: 90%;
margin: 0 auto;
margin-top: 10px;
text-align: left;
padding: 5px 0;

`

const PedidosLine = styled.p`
padding: 10px 0 5px  10px;
color: #e86e5a;
letter-spacing: -0.39px;
`


const PedidosLineEmpty = styled.p`
padding: 10px 0 5px  10px;
color: #000000;
letter-spacing: -0.39px;
`
const PedidosLineDate = styled.p`
letter-spacing: -0.39px;
padding-left: 10px;
font-size:12px;


`
const PedidosLineTotal = styled.p`
padding: 10px 0 5px  10px;
color: #000000;
letter-spacing: -0.39px;
font-weight: bold;


`

  
function Perfil() {
  const pedidos = [
  // {
  //   restaurante:'Vinil Burguer',
  //   data:'30 de setembro de 2020',
  //   valor: 89 
  // },{
  //   restaurante:'Vinil Burguer',
  //   data:'14 de junho de 2020',
  //   valor: 19 
  // },
  // {
  //   restaurante:'Experimenta Lanches',
  //   data:'16 de junho de 2020',
  //   valor: 29.40
  // }
]

  const [perfil,setPerfil] = useState({
    name: '',
    email:'',
    cpf: '',
    address:''
    
  })

  useEffect(() => {
    Axios.get(`${baseUrl}/profile`, {
      headers: {
        auth: localStorage.getItem('token')
      }
    })
    .then(result => {

      setPerfil(result.data.user)

    })


  },[])

    
  

  return (
    <PerfilContainer >   
      <PerfilBar><TitlePage title={'Meu perfil'}/> </PerfilBar>  
                      
            <PerfilInfo>
              <PerfilInfoDetalhes>
              <p>{perfil.name}</p>
              <p>{perfil.email}</p>
              <p>{perfil.cpf}</p>
              </PerfilInfoDetalhes>
              <PerfilInfoIcone><Link to={'/edit-signup'}> <CreateOutlinedIcon /> </Link> </PerfilInfoIcone>
              
            </PerfilInfo>
            
            <PerfilEndereco>

            <PerfilEndDetalhes>
              <PerfilEnderecoTitulo>Endereço Cadastrado</PerfilEnderecoTitulo>
              <PerfilEnderecoInfo>{perfil.address}</PerfilEnderecoInfo>
            </PerfilEndDetalhes>
              <PerfilEndIcone><Link to={'/edit-address'}><CreateOutlinedIcon /> </Link></PerfilEndIcone>
            </PerfilEndereco>

            <div>
              <p className='Historico-pedidos'>Histórico de pedidos</p>
              <hr className='DivisorHr'/>
              <div>
              {(pedidos.length == 0) ?  <div><PedidosLineEmpty>Você não realizou nenhum pedido</PedidosLineEmpty></div> : <div>
              
                {pedidos.map(pedidos=>{
                  return (<PedidosContainer> 
                    <PedidosLine>{pedidos.restaurante}</PedidosLine>
                    <PedidosLineDate>{pedidos.data}</PedidosLineDate>
                    <PedidosLineTotal>SUBTOTAL: R$ {pedidos.valor.toFixed(2)}</PedidosLineTotal>
                    </PedidosContainer>
                  )
                })}  
                </div>             
                
                }
              </div>
            </div>
       
            <Footer />
    </PerfilContainer>
    
  );
}

export default Perfil;
