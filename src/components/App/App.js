import React from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'
import ShopHeader from '../Shop__header/Shop__header'
import Welcome from '../page/Welcome/Welcome'
import Home from '../page/Home'
import Cart from '../page/Cart/Cart'

const App = () => {
    return (
        <>
            <ShopHeader />
            <Switch>
                <Route path='/' component = { Welcome } exact/>
                <Route path='/home' component = { Home } />
                <Route path='/cart' component = { Cart } />
                <Redirect to='/' />
            </Switch>
        </>
    )
}

export default App
