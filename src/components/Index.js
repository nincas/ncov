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
    const countries = ['philippines', 'us', 'china', 'italy']
    return (
        <div className="container">
            {lazyLoader(Header, 'header')}
            {
                countries.map(country => {
                    return <ResponsiveContainer>
                        {lazyLoader(PieComponent, country, {country})}
                    </ResponsiveContainer>
                })
            }
            
        </div>
    );
}

export default Index;
