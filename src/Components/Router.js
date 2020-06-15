import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Cart from '../Pages/Cart'
import EditAdress from '../Pages/EditAdress'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Perfil from '../Pages/Perfil'
import RegisterAdress from '../Pages/RegisterAdress'
import Restaurant from '../Pages/Restaurant'
import SignUp from '../Pages/SignUp'
import Intro from '../Pages/Intro';
import EditSignUp from '../Pages/EditSignUp'

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/cart'>
                    <Cart />
                </Route>
                <Route exact path='/edit-adress'>
                    <EditAdress />
                </Route>
                <Route exact path='/home'>
                    <Home />
                </Route>
                <Route exact path='/perfil'>
                    <Perfil />
                </Route>
                <Route exact path='/register-adress'>
                    <RegisterAdress />
                </Route>
                <Route exact path='/restaurant'>
                    <Restaurant />
                </Route>
                <Route exact path='/signup'>
                    <SignUp />
                </Route>
                <Route exact path='/'>
                    <Intro />
                </Route>
                <Route exact path='/login'>
                    <Login />
                </Route>
                {/* <Route exact path='/'>
                    <Login />
                </Route> */}
            </Switch>
        </BrowserRouter>
    );
}

export default Router;