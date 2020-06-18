import React, { useEffect, useState } from 'react';
import {
  Container, Header, ArrowBackIosStyled, Label, Details,
  ImgPrincipal, RestaurantName, RestaurantCategory, Time, Shipping,
  Adress
} from './style'
import Dishes from './Dishes'
import OrderInProgress from '../../Components/OrderInProgress'
import axios from 'axios';
import { baseUrl } from '../../Components/Configs'
import { useParams } from 'react-router-dom';

function Restaurant() {
  const pathParam = useParams()
  const [restaurantData, setRestaurantData] = useState({})

  useEffect(() => {

    axios.get(`${baseUrl}/restaurants/${pathParam.id}`, {
      headers: { auth: localStorage.getItem('token') }
    })
      .then(res => {
        console.log(res.data)
        setRestaurantData(res.data.restaurant)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <Container>
      <Header>
        <ArrowBackIosStyled />
        <Label>Restaurante</Label>
      </Header>
      <Details>
        <ImgPrincipal src={restaurantData.logoUrl} alt={'restaurante'} />
        <RestaurantName>{restaurantData.name}</RestaurantName>
        <RestaurantCategory>{restaurantData.category}</RestaurantCategory>
        <div>
          <Time>{restaurantData.deliveryTime} min</Time>
          <Shipping>Frete R$ {restaurantData.shipping}.00</Shipping>
        </div>
        <Adress>{restaurantData.address}</Adress>
      </Details>
      <Dishes />
      <OrderInProgress />
    </Container>
  );
}

export default Restaurant;