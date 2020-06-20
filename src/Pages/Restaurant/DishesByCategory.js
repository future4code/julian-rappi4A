import React, { useState } from 'react';
import { ContainerDishes, WriterDish, Price, DishImg, DishName, Ingredients, Quantity, ButtonAdd } from './style'
import Modal from './Modal'

function Restaurant(props) {
    const product = props.product
    const [dishQuantity, setDishQuantity] = useState([])

    const handleQuantity = (value, id) => {
        setDishQuantity([value, id])
    }

    const quantityVisible = dishQuantity.length !== 0 ? <Quantity>{dishQuantity[0]}</Quantity> : <div></div>

    return (
        <ContainerDishes>
            <DishImg src={product.photoUrl} alt={'Prato'} />
            <WriterDish>
                <DishName>{product.name}</DishName>
                <Ingredients>{product.description}</Ingredients>
                <Price>R${product.price.toFixed(2)}</Price>
                {quantityVisible}
                <ButtonAdd><Modal handleQuantity={handleQuantity} id={product.id} product={props.product} /></ButtonAdd>
            </WriterDish>
        </ContainerDishes >
    );
}

export default Restaurant;