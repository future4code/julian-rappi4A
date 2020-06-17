import React from 'react'
import styled from 'styled-components'
import HomeIcon from '../../Images/home-icon.svg'
import CardIcon from '../../Images/card-icon.svg'
import ProfileIcon from '../../Images/profile.svg'

const Container = styled.div`
display:flex;
justify-content:center;

`
const DivFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display:flex;
  justify-content: space-around;
  align-items:center;
  width: 100%;
  max-width: 100%;
  height: 49px;
  background-color: white;
  box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2), 
    0 -2px 1px -1px rgba(0, 0, 0, 0.12), 
    0 -1px 1px 0 rgba(0, 0, 0, 0.14);
`

export default function index() {
  return (
    <Container>
      <DivFooter>
        <img src={HomeIcon} alt="Home" />
        <img src={CardIcon} alt="Seu carrinho" />
        <img src={ProfileIcon} alt="Seu perfil" />
      </DivFooter>
    </Container>
  )
}
