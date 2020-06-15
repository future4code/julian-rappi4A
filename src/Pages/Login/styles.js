import styled from 'styled-components'
import { TextField } from '@material-ui/core'




export const LoginContainer = styled.div`
display:flex;
flex-direction: column;
width  :100%;
justify-content: center;
align-items: center;


`

export const LoginApp = styled.div`



`
export const LoginForm = styled.form`
  display: grid;
  grid-row-gap: 15px;
  margin: 0 auto;
 
`

export const LoginImg = styled.img`

width  : auto;

`

export const LoginInput = styled(TextField)`
width:300px;

`

