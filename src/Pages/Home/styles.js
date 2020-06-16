import styled from 'styled-components' 

export const Container = styled.div`
     width:100vw;
    height:100vh;


`
export const DivTitle = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width: 360px;
  height: 44px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: var(--white);
  font-family: Roboto;
  font-size: 16px;

`
export const Title = styled.h1`
    font-size: 16px;
    font-weight:400;
`

export const DivInput = styled.div`
    margin:0 auto;
    width:328px;
`

export const Scrollyng = styled.div`
    text-align:center;

    width:360px;
    height: 42px;
    overflow-x:scroll;
    overflow-y:hidden;
    white-space:nowrap;
    margin-bottom:8px;
 
`
export const ScrollyngItem = styled.div`
    margin:0 auto;
    padding:10px;
    display:inline-block;
    height: 100%;
    width:100px;
    text-align:center;
    font-size: 16px;



`
export const RestaurantList = styled.div`
    display:flex;
    flex-direction:column;

    justify-content:center;
    padding: 0 16px;  

`
export const RestaurantCard = styled.div`
    width:328px;
    min-height: 188px;
    margin-bottom:8px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;



`
export const CardHeader = styled.div`
     min-height: 120px;
    




`
export const CardFooter = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    min-height: 76px;
    padding:0 16px;
    font-size: 16px;


`
export const RestaurantName = styled.div`
    display:flex;
    justify-content:flex-start;
    color: #e86e5a;
    padding-bottom:4px;

`
export const RestaurantInfos = styled.div`
    display:flex;
    justify-content:space-between;
    color: #b8b8b8;


`
export const RestaurantTime = styled.div`



`
export const RestaurantShipping = styled.div`




` 
