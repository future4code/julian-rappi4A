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

  
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div >
        <Router />
      </div>    
    </ThemeProvider>
  );
}

export default App;
