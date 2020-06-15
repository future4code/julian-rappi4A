import React from 'react';
import Styled from 'styled-components'
import Router from './Components/Router';

const Container = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
  
function App() {
  return (
    <Container >
      <Router />
    </Container>
  );
}

export default App;
