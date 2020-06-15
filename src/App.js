import React from 'react';
import Styled from 'styled-components'
import Router from './Components/Router';
import { createMuiTheme, ThemeProvider  } from '@material-ui/core/styles';


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
    <Container >
    <ThemeProvider theme={theme}>
      <div >
        <Router />
      </div>    
    </ThemeProvider>
</Container>
  );
}

export default App;
