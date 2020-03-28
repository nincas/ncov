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
        <React.Fragment>
           
            <BrowserRouter>
                <Switch>
                    <Route exact path="/ncov/" component={lazyLoader(Index, '')}/>
                    <Route exact path="/ncov/about" component={lazyLoader(About, '')}/>
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default Router;