import React, { useState } from 'react';
import {
    ContainerDetails, ContainerDishes, WriterDish,
    DishImg, DishName, Ingredients, Price, Category,
    Quantity, ButtonAdd
} from './style'
import Modal from './Modal'

function Restaurant() {
    const [dishQuantity, setDishQuantity] = useState(0)

    const quantityVisible = dishQuantity !== 0 ? <Quantity>{dishQuantity}</Quantity> : <div></div>

    const handleQuantity = (value) => {
        setDishQuantity(value)
    }

    return (
        <ContainerDetails>
            <Category>Principais</Category>
            <ContainerDishes>
                <DishImg src={'https://picsum.photos/id/1/200/300'} alt={'Prato'} />
                <WriterDish>
                    <DishName>Bullguer</DishName>
                    <Ingredients>Pão, carne, queijo, cebola roxa, tomate, alface e molho.</Ingredients>
                    <Price>R$23,00</Price>
                    {quantityVisible}
                    <ButtonAdd><Modal handleQuantity={handleQuantity} /></ButtonAdd>
                </WriterDish>
            </ContainerDishes>
        </ContainerDetails>
    );
}

export default Restaurant;