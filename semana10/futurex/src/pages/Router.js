import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Home'
import Login from './Login'
import Register from './Register'
import Trips from './Trips'
import TripsDetails from './TripsDetails'
import CreateTrip from './CreateTrip'
import Candidate from './Candidate'


const Router = props =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Login/>
                </Route>

                <Route exact path='/home'>
                    <Home/>
                </Route>

                <Route exact path='/register'>
                    <Register/>
                </Route>

                <Route exact path='/trips'>
                    <Trips/>
                </Route>

                <Route exact path='/tripsdetails'>
                    <TripsDetails/>
                </Route>

                <Route exact path='/createtrip'>
                    <CreateTrip/>
                </Route>

                <Route exact path='/candidate'>
                    <Candidate/>
                </Route>


            </Switch>
        </BrowserRouter>
    )
}

export default Router