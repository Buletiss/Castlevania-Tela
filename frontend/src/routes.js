import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Menu from './pages/Menu'

export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Menu}/>
        </Switch>
        </BrowserRouter>
    )
}
