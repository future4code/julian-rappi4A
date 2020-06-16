import React from "react";
import {
  Container,
  Nav,
  CartName,
  Header,
  TitleAdress,
  Adress,
  Main,
  Frete,
  Amount,
  Footer,
} from "./styled";
import Button from "@material-ui/core/Button";
import InfoRestaurant from './InfoRestaurant';
import Card from './Card';
import PaymentMethods from './PaymentMethods';

function Cart() {
  return (
    <Container>
      <Nav>
        <CartName>Meu carrinho</CartName>
      </Nav>
      <Header>
        <TitleAdress>Endereço de entrega</TitleAdress>
        <Adress>Rua Alessandra Vieira, 42</Adress>
      </Header>
      <Main>
        <InfoRestaurant />
        <Card />
        <Frete>Frete R$6,00</Frete>
        <Amount>
          <h5>SUBTOTAL</h5>
          <h5>R$67,00</h5>
        </Amount>
        <PaymentMethods/>
        <Button variant="contained" color="primary">
          Confirmar
        </Button>
      </Main>
      <Footer>footer</Footer>
    </Container>
  );
}

export default Cart;
