import React, { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import {
  Container,
  Nav,
  CartName,
  Header,
  TitleAdress,
  Adress,
  Main,
  Frete, Value,
  Amount} from "./styled";
import Button from "@material-ui/core/Button";
import InfoRestaurant from './InfoRestaurant';
import Card from './Card';
import PaymentMethods from './PaymentMethods';
import Footer from '../../Components/Footer';

function Cart() {


  

  const cartContext = useContext(CartContext);

  let totalValue = 0;

  cartContext.cart.forEach(product => {
    totalValue = totalValue + product.price * product.quantity;
  });


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
          <Value>R$ {totalValue.toFixed(2)}</Value>
        </Amount>
        <PaymentMethods/>
        <Button variant="contained" color="primary">
          Confirmar
        </Button>
      </Main>
      <Footer ativo={1}/>
    </Container>
  );
}

export default Cart;
