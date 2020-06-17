import React from 'react';
import {
  Container, Header, ArrowBackIosStyled, Label, Details,
  ImgPrincipal, RestaurantName, RestaurantType, Time, Freight,
  Adress
} from './style'
import Dishes from './Dishes'

function Restaurant() {

  return (
    <Container >
      <Header>
        <ArrowBackIosStyled />
        <Label>Restaurante</Label>
      </Header>
      <Details>
        <ImgPrincipal src={'https://picsum.photos/id/1/200/300'} alt={'restaurante'} />
        <RestaurantName>Bullguer Vila Madalena</RestaurantName>
        <RestaurantType>Burger</RestaurantType>
        <div>
          <Time>50 - 60 min</Time>
          <Freight>Frete R$6,00</Freight>
        </div>
        <Adress>R. Fradique Coutinho, 1136 - Vila Madalena</Adress>
      </Details>
      <Dishes />
    </Container>
  );
}

export default Restaurant;