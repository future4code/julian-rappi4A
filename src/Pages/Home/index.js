import React from 'react';
import {
  Container,
  DivInput,
  Scrollyng,
  ScrollyngItem,
  RestaurantList,
  RestaurantCard,
  CardHeader,
  CardFooter,
  RestaurantName,
  RestaurantInfos,
  RestaurantTime,
  RestaurantShipping
} from './styles'
import TextField from '@material-ui/core/TextField';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

function Home() {
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

         <Scrollyng >

          <ScrollyngItem>Hamburguer</ScrollyngItem>
          <ScrollyngItem>Árabe</ScrollyngItem>
          <ScrollyngItem>Asiatica</ScrollyngItem>
          <ScrollyngItem>Italiana</ScrollyngItem>
          <ScrollyngItem>Sorvetes</ScrollyngItem>
          <ScrollyngItem>Carnes</ScrollyngItem>
          <ScrollyngItem>Baiana</ScrollyngItem>
          <ScrollyngItem>Petiscos</ScrollyngItem>
          <ScrollyngItem>Mexicana</ScrollyngItem>
          <ScrollyngItem>Item10</ScrollyngItem>
          </Scrollyng>

 
      <RestaurantList>
        <RestaurantCard>
          <CardHeader><img src="https://picsum.photos/326/160" alt="sss" /></CardHeader>
          <CardFooter>
            <RestaurantName>Vinil Butantâ</RestaurantName>
            <RestaurantInfos>
              <RestaurantTime>50 - 60 min</RestaurantTime>
              <RestaurantShipping>Frete R$ 12.00</RestaurantShipping>
            </RestaurantInfos>
          </CardFooter>
        </RestaurantCard>

        <RestaurantCard>
          <CardHeader><img src="https://picsum.photos/326/160" alt="sss" /></CardHeader>
          <CardFooter>
            <RestaurantName>Mc Donalds</RestaurantName>
            <RestaurantInfos>
              <RestaurantTime>50 - 60 min</RestaurantTime>
              <RestaurantShipping>Frete R$ 12.00</RestaurantShipping>
            </RestaurantInfos>
          </CardFooter>
        </RestaurantCard>

        <RestaurantCard>
          <CardHeader><img src="https://picsum.photos/326/160" alt="sss" /></CardHeader>
          <CardFooter>
            <RestaurantName>Saladenhas</RestaurantName>
            <RestaurantInfos>
              <RestaurantTime>50 - 60 min</RestaurantTime>
              <RestaurantShipping>Frete R$ 12.00</RestaurantShipping>
            </RestaurantInfos>
          </CardFooter>
        </RestaurantCard>

      </RestaurantList>

      <Footer/>
    </Container>
  );
}

export default Home;
