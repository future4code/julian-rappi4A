import React from 'react';
import {
  Container,
  DivTitle,
  DivInput,
  Title,
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


import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

function Home() {
  return (
    <Container >

      <DivTitle>
        <Title>Rappi4</Title>
      </DivTitle>
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

      <Scrollyng>
        <div>
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
        </div>
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

    </Container>
  );
}

export default Home;
