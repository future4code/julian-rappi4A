import React, { useEffect, useState } from "react";
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
  DivMenu,
} from "./styles";
import TextField from "@material-ui/core/TextField";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { baseUrl } from "../../Components/Configs";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  const [SearchRestaurant, setSearchRestaurant] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/restaurants`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setRestaurants(res.data.restaurants);
        //   console.log(res.data.restaurants)
      })
      .catch((err) => {
        //   console.log(err)
      });
  }, []);

  const goToRestaurant = (id) => {
    history.push(`/restaurant/${id}`);
  };

  return (
    <Container>
      <Header />
      <DivInput>
        <TextField
          name="SearchInput"
          fullWidth
          placeholder="Restaurante"
          onChange={(e) => setSearchRestaurant(e.target.value)}
          type="search"
          variant="outlined"
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="grey" />
              </InputAdornment>
            ),
          }}
        />
      </DivInput>
      <DivMenu>
        <Scrollyng>
          {restaurants.map((menu) => {
            return <ScrollyngItem>{menu.category}</ScrollyngItem>;
          })}
        </Scrollyng>
      </DivMenu>
      <RestaurantList>
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard onClick={() => goToRestaurant(restaurant.id)}>
              <CardHeader>
                <CardHeaderImage
                  src={restaurant.logoUrl}
                  alt="logo restaurante"
                />
              </CardHeader>
              <CardFooter>
                <RestaurantName>{restaurant.name}</RestaurantName>
                <RestaurantInfos>
                  <RestaurantTime>{restaurant.deliveryTime} min</RestaurantTime>
                  <RestaurantShipping>
                    Frete R$ {restaurant.shipping.toFixed(2)}
                  </RestaurantShipping>
                </RestaurantInfos>
              </CardFooter>
            </RestaurantCard>
          );
        })}
      </RestaurantList>
      <Footer />
    </Container>
  );
}

export default Home;
