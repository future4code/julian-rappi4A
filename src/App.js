import React from 'react';
import Styled from 'styled-components'
import Router from './Components/Router';
import {  BrowserRouter } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e86e5a',
    }
  }
});

const Container = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>      
      <Container >
          <Router />
      </Container>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
