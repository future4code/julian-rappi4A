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
  justify-content:center;

  align-items:center;
  font-family: Roboto;
  font-size: 16px;
  width: 360px;
  height: 64px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: var(--white);
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
            <HomeButton><img src={HomeIcon} alt="Home"/></HomeButton>
                <CardButton><img src={CardIcon} alt="Seu carrinho"/></CardButton>
                <ProfileButton><img src={ProfileIcon} alt="Seu perfil"/></ProfileButton>
            </DivFooter>
        </Container>
    )
}
