import React, { useEffect, useState } from 'react';
import './Header.css';
import PieComponent from './Pie'
import styled from 'styled-components'
import Loader from './Loader'
import _ from 'lodash'

const ucword = (str) => str.charAt(0).toUpperCase() + str.substr(1, str.length)

export default function Header ({ theme }) 
{
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [affectedCountries, setAffectedCountries] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            let radialData = []
            fetch('https://corona.lmao.ninja/v2/all')
            .then(data => data.json())
            .then(data => {
                const colors = {
                    'todayCases': '#8DD1E1', // TodayCases
                    'deaths': '#b33434', // Deaths
                    'todayDeaths': '#e35146', // TodayDeaths
                    'recovered': '#8884D8', // Recovered
                    'active': '#A4DE6C', // Active
                    'critical': '#d97b34', // Critical
                    'todayRecovered': '#fca503'
                };

                setAffectedCountries(data.affectedCountries)
                let totalCases = data.cases

                for (let i in data) {
                    if (Object.keys(colors).indexOf(i) === -1) {
                        delete data[i]
                    }
                }
                
                _.forEach(data, function (data, name) {
                    radialData.push({
                        name: ucword(name),
                        value: data,
                        fill: colors[name],
                        totalCases: totalCases
                    })
                })

                setStats(radialData)
                setLoading(false)
            }).catch(err => {
                console.error(err);
            })
        }, 5000)
    }, [])


    const H2 = styled.h2`
        color: ${props => props.theme == 'dark' ? '#fff' : '#333'} !important;
    `

    const formatNumber = (value) =>  Number((value).toFixed(1)).toLocaleString();
    return (
        <div className="headerContainer">
            <H2 theme={theme}>AFFECTED COUNTRIES: 
                <i style={{
                    color: 'red'
                }}>{affectedCountries}</i>
            </H2>
            {!loading ? <PieComponent country="global" theme={theme} data={stats} activeIdx={5}/> : <Loader theme={theme}/>}
        </div>
    )
}