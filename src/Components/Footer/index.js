import React from 'react'
import styled from 'styled-components'
import HomeIcon from '../../Images/home-icon.svg'
import CardIcon from '../../Images/card-icon.svg'
import ProfileIcon from '../../Images/profile.svg'

const Container = styled.div`
`
const DivFooter = styled.div`
  position: fixed;
  bottom: 0;
  display:flex;
  justify-content: space-around;
  align-items:center;
  width: 360px;
  height: 49px;
  background-color: white;
 
`

const HomeButton = styled.button` 

  text-align:center;
  width: 120px;
  height: 49px;
  border-style:none;
  
`
const CardButton = styled.button` 
 
  text-align:center;
  width: 120px;
  height: 49px;
  border-style:none;

`
const ProfileButton = styled.button` 
  
  text-align:center;
  width: 120px;
  height: 49px;
  border-style:none;


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
