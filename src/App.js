import React, { useEffect, useState } from 'react';
import Styled from 'styled-components'
import Router from './Components/Router';
import { BrowserRouter } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import axios from 'axios'
import UserContext from './contexts/UserContext'
import { baseUrl } from './Components/Configs';

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

  const [profile, setProfile] = useState({})
  useEffect(() => {

    axios.get(`${baseUrl}/profile`, {
      headers: { auth: localStorage.getItem('token') }
    })
      .then(res => {
        console.log(res.data)
        setProfile(res.data.user)
      })
      .catch(err => {
        console.log(err)
      })
  }, [localStorage.getItem('token')])

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={profile}>
          <Container>
            <Router />
          </Container>
        </UserContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
