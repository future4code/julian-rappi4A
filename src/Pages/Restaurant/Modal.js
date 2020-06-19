import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AddRemoveButton } from './style'
import { DishQuantity, LabelDishQuantity, Select, AddToCart, ModalStyled } from './style'
import CartContext from '../../contexts/CartContext'

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

function TransitionsModal(props) {
    const cartContext = useContext(CartContext)
    const classes = useStyles();
    const [select, setSelect] = useState('')
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        props.handleQuantity(select, props.id)

        cartContext.dispatch({ type: "ADD_ITEM_TO_CART", product: props.product });
        console.log(props.product)
    };

    const handleChange = (e) => {
        setSelect(e.target.value)
    }

    return (
        <div>
            <AddRemoveButton onClick={handleOpen}>
                adicionar
            </AddRemoveButton>
            <ModalStyled
                open={open}
                onClose={handleClose}
                className={classes.modal}
            >
                <DishQuantity>
                    <LabelDishQuantity>Selecione a quantidade desejada</LabelDishQuantity>
                    <Select value={select} onChange={handleChange}>
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                    </Select>
                    <AddToCart>
                        <label onClick={handleClose}>
                            ADICIONAR AO CARRINHO
                        </label>
                    </AddToCart>
                </DishQuantity>
            </ModalStyled>
        </div>
    );
}

export default TransitionsModal