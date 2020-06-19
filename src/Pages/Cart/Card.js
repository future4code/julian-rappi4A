import React, { useContext } from "react";
import {
  ContainerDetails,
  ContainerDishes,
  Img,
  WriterDishe,
  DisheName,
  Ingredients,
  Price,
  Quantity,
  AddRemoveButton,
} from "./styled";
import CartContext from "../../contexts/CartContext";

function Card(props) {
  const cartContext = useContext(CartContext);
  
  const handleRemoveItemFromCart = productId => {
    cartContext.dispatch({ type: "REMOVE_ITEM_FROM_CART", productId });
  };
  return (
    <ContainerDetails>
      <ContainerDishes>
        <Img src={"https://picsum.photos/id/1/200/300"} alt={"Prato"} />
        <WriterDishe>
          <DisheName>Bullguer</DisheName>
          <Ingredients>
            Pão, carne, queijo, cebola roxa, tomate, alface e molho.
          </Ingredients>
          <Price>R$23,00</Price>
          <Quantity>2</Quantity>
          <AddRemoveButton variant="outlined" color="primary">
            remover
          </AddRemoveButton>
        </WriterDishe>
      </ContainerDishes>
      <ContainerDishes>
        <Img src={"https://picsum.photos/id/1/200/300"} alt={"Prato"} />
        <WriterDishe>
          <DisheName>Bullguer</DisheName>
          <Ingredients>
            Pão, carne, queijo, cebola roxa, tomate, alface e molho.
          </Ingredients>
          <Price>R$23,00</Price>
          <Quantity>2</Quantity>
          <AddRemoveButton
            variant="outlined"
            color="primary"
            // onClick={() => handleRemoveItemFromCart(product.id)}
          >
            remover
          </AddRemoveButton>
        </WriterDishe>
      </ContainerDishes>
    </ContainerDetails>
  );
}

export default Card;
