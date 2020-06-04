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
        <Suspense fallback={<Loader name={name} theme={props.theme}/>}>
           <Component {...props}/>
        </Suspense>
    )
}

const Sup = styled.sup`
    font-size: 12px !important;
    color: #fff;
`

const ItemContainer = styled.div`
    
`

const sleep = async (ms) => {
    return setTimeout(Promise.resolve(), ms)
}


const Container = styled.div`
    background: ${props => props.theme == 'dark' ? '#26242E' : '#fff'};
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: hidden;

    a {
        text-decoration: none;
        color: ${props => props.theme == 'dark' ? 'white' : 'black'};
        font-size: 18px;
        font-weight: bold;
        text-decoration: underline;
    }
`
const Header1 = styled.header`
    font-weight: bold;
    color: red;
`

const H2 = styled.h2`
    color: red;
`

const Aa = styled.a`
    text-decoration: none;
    color: ${props => props.theme == 'dark' ? 'white' : 'black'};
    font-size: 18px;
    font-weight: bold;
    text-decoration: underline;
`

const Supp = styled.sup`
    color: ${props => props.theme == 'dark' ? 'white' : 'black'};
`


function Index () {
    const [theme, setTheme] = useState('light')
    const countries = ['philippines', 'malaysia', 'us', 'china', 'italy', 'spain', 'france', 'S. Korea', 'uk', 'germany']

    const toggleTheme = (e) => {
        if (e.target.checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return (
        <Container theme={theme}>
            <Header1 theme={theme}>
                <H2 theme={theme}>NCOV-19 <Supp theme={theme}>(as of {(new Date).toDateString()})</Supp></H2>

                <input onChange={toggleTheme.bind(this)} type="checkbox" id="switch"></input>
                <div className="app">
                <div className="body">
                    <div className="content">
                        <div className="circle">
                        <div className="crescent"></div>
                        </div>
                        <label htmlFor="switch">
                        <div className="toggle"></div>
                        <div className="names">
                            <p className="light">Light</p>
                            <p className="dark">Dark</p>
                        </div>
                        </label>
                    </div>
                </div>
                </div>
            </Header1>
            {lazyLoader(Header, 'header', {theme})}
            {
                countries.map((country, idx) => {

                    return <ItemContainer key={idx}>
                            <ResponsiveContainer>
                            {lazyLoader(PieComponent, country, {country, theme})}
                        </ResponsiveContainer>
                    </ItemContainer>
                })
            }
            <a href="/ncov/about">ABOUT</a>
            <br/>
            <br/>
        </Container>
    );
}

export default Index;
