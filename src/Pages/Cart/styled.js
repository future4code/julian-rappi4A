import styled from 'styled-components';
import { FormControl } from "@material-ui/core";
import { Button } from '@material-ui/core';

export const Container = styled.div`
    max-width: 400px;
    width: 100%;
    height: 781px;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;
export const Nav = styled.div`
    width: 100%;
    height: 44px;
    padding: 16px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const CartName = styled.p`
    font-weight: bold;
`;
export const Header = styled.div`
    width: 100%;
    height: 76px;
    padding: 16px;
    background: #eeeeee;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const TitleAdress = styled.p`
    color: #b8b8b8;
`;
export const Adress = styled.p`
    color: black;
    font-weight: bold;
`;
export const Main = styled.div`
    width: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const InfoContainer = styled.div`
    width: 100%;
`;
export const RestaurantName = styled.p`
    color: #e86e5a;
`;
export const RestaurantAdress = styled.p`
    color: #b8b8b8;
`;
export const Time = styled.p`
    color: #b8b8b8;
`;

// CARD
export const ContainerDetails = styled.div`
  margin-top: 16px;
  display: grid;
  gap: 8px;
`;
export const ContainerDishes = styled.div`
  border: 1px solid #b8b8b8;
  border-radius: 8px;
  height: 112px;
  width: 100%;
  display: flex;
`;
export const WriterDishe = styled.div`
  display: grid;
  grid-template-rows: 33px 1fr 1fr 30px;
  grid-template-columns: 1fr 57px 33px;
  padding-left: 16px;
`;
export const Img = styled.img`
  height: 100%;
  width: 97px;
  border-radius: 8px 0 0 8px;
`;
export const DisheName = styled.label`
  color: #e86e5a;
  grid-column: 1/2;
  grid-row: 1/2;
  padding-top: 16px;
`;
export const Ingredients = styled.label`
  color: #b8b8b8;
  grid-column: 1/4;
  grid-row: 2/4;
  padding-top: 6px;
  letter-spacing: -0.34px;
`;
export const Price = styled.label`
  grid-column: 1/2;
  grid-row: 4/5;
  padding-bottom: 15px;
  font-weight: bold;
`;
export const Quantity = styled.div`
  border-radius: 0 8px;
  border: 1px solid #e02020;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 3/4;
  grid-row: 1/2;
`;
export const AddRemoveButton = styled(Button)`
  font-size: 12px;
  border-radius: 8px 0;
  border: 1px solid #e02020;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 2/4;
  grid-row: 4/5;
  align-self: right;
`;
export const Frete = styled.p`
    color: black;
    text-align: end;
    padding-top: 16px;
`;
export const Amount = styled.div`
    width: 100%;
    margin-top: 13px;
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
`;
export const ContainerPayment = styled(FormControl)`
    width: 100%;
`;
export const FormLabel = styled.label`
    width: 100%;
    margin-bottom: 8px;
`;
export const Footer = styled.div`
    width: 100%;
    padding: 16px;
    border: 1px solid orange;
`;