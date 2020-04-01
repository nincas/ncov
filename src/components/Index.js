import React, { useEffect, useState, lazy, Suspense } from 'react';
import {
    ResponsiveContainer, PieChart
} from 'recharts';
import './Index.css';
import Loader from './Loader';

const Header = lazy(() => import('./Header'))
const PieComponent = lazy(() => import('./Pie'))


const lazyLoader = (Component, name = '', props = {}) => {
    return (
        <Suspense fallback={<Loader name={name}/>}>
           <Component {...props}/>
        </Suspense>
    )
}

function Index () {
    const countries = ['philippines', 'us', 'china', 'italy', 'spain', 'france', 'S.%20Korea', 'uk', 'germany']
    return (
        <div className="container">
            <header>
                <h1>CORONAVIRUS UPDATE</h1>
                <h4 style={{color: '#fff'}}><i>({(new Date).toDateString()})</i></h4>
            </header>
            {lazyLoader(Header, 'header')}
            {
                countries.map(country => {
                    return <ResponsiveContainer>
                        {lazyLoader(PieComponent, country, {country})}
                    </ResponsiveContainer>
                })
            }
            <a href="/ncov/about">ABOUT</a>
            <br/>
            <br/>
        </div>
    );
}

export default Index;
