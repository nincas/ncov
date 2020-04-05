import React, { useEffect, useState, lazy, Suspense } from 'react';
import {
    ResponsiveContainer, PieChart
} from 'recharts';
import './Index.css';
import Loader from './Loader';
import styled from 'styled-components';

const Header = lazy(() => import('./Header'))
const PieComponent = lazy(() => import('./Pie'))


const lazyLoader = (Component, name = '', props = {}) => {
    return (
        <Suspense fallback={<Loader name={name}/>}>
           <Component {...props}/>
        </Suspense>
    )
}

const Sup = styled.sup`
    font-size: 12px !important;
    color: #fff;
`

const ItemContainer = styled.div`
    background-image: url(${props => props.url});
`

function Index () {
    const countries = ['philippines', 'us', 'china', 'italy', 'spain', 'france', 'S. Korea', 'uk', 'germany']
    return (
        <div className="container">
            <header>
                <h1>NCOV-19 <Sup>(as of {(new Date).toDateString()})</Sup></h1>
            </header>
            {lazyLoader(Header, 'header')}
            {
                countries.map(country => {
                    return <ItemContainer>
                            <ResponsiveContainer debounce={1}>
                            {lazyLoader(PieComponent, country, {country})}
                        </ResponsiveContainer>
                    </ItemContainer>
                })
            }
            <a href="/ncov/about">ABOUT</a>
            <br/>
            <br/>
        </div>
    );
}

export default Index;
