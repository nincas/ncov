import React, { Component, Suspense, lazy } from 'react'
import { 
    BrowserRouter, 
    Route, 
    Switch, 
    Link 
} from 'react-router-dom'

import _ from 'lodash'
import Loader from '../components/Loader'

const Index = lazy(() => import('../components/Index'))
const About = lazy(() => import('../components/About'))

const lazyLoader = (Component, name = '') => {
    return props => (
        <Suspense fallback={<Loader name={name}/>}>
           <React.Fragment>
               <Component {...props}/>
            </React.Fragment>
        </Suspense>
    )
}

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={lazyLoader(Index, '')}/>
                <Route exact path="/about" component={lazyLoader(About, '')}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;