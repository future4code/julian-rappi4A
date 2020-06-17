import React, { useEffect, useState } from 'react';
import {
  Container,
  DivInput,
  Scrollyng,
  ScrollyngItem,
  RestaurantList,
  RestaurantCard,
  CardHeader,
  CardHeaderImage,
  CardFooter,
  RestaurantName,
  RestaurantInfos,
  RestaurantTime,
  RestaurantShipping,
  DivMenu
} from './styles'
import TextField from '@material-ui/core/TextField';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import {baseUrl} from '../../Components/Configs';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import axios from 'axios'

function Home() {

  const [restaurants, setRestaurants ] = useState([])

  useEffect(() => {
    axios.get(`${baseUrl}/restaurants`, {
      headers: {
        auth: localStorage.getItem('token')
      }
    }).then(res => {
      setRestaurants(res.data.restaurants)
    }).catch(err => {
      console.log(err)
    })
  }, [])
  console.log(restaurants)

  return (
    <Container >
      <Header/>

      <DivInput>
        <TextField
          fullWidth
          placeholder="Restaurante"
          type="search"
          variant="outlined"
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" >
                <SearchIcon color="grey" />
              </InputAdornment>
            )
          }}
        />
      </DivInput>
      <DivMenu>
         <Scrollyng >
              {restaurants.map((menu) => {
                return <ScrollyngItem>{menu.category}</ScrollyngItem>}
                )} 
         </Scrollyng>
      </DivMenu>    


 
      <RestaurantList>
        {restaurants.map((restaurant) => {
          return (

            <RestaurantCard>
            <CardHeader><CardHeaderImage src={restaurant.logoUrl} alt="logo restaurante" /></CardHeader>
            <CardFooter>
          <RestaurantName >{restaurant.name}</RestaurantName>
              <RestaurantInfos>
                <RestaurantTime>{restaurant.deliveryTime} min</RestaurantTime>
          <RestaurantShipping>Frete R$ {restaurant.shipping.toFixed(2)}</RestaurantShipping>
              </RestaurantInfos>
            </CardFooter>
          </RestaurantCard>
          )
        } )}
    
 

      </RestaurantList>

      <Footer/>
    </Container>
  );
}

export default Home;
