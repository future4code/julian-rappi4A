import React from 'react';
import Styled from 'styled-components'
import Router from './Components/Router';
import Header from './Components/Header';
import Footer from './Components/Footer';
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
    <ThemeProvider theme={theme}>
      <Container >
          <Router />
      </Container>
    </ThemeProvider>
  );
}

export default App;
