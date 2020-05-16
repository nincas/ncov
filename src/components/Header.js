import React, { useEffect, useState } from 'react';
import './Header.css';
import PieComponent from './Pie'
import Loader from './Loader'
import _ from 'lodash'

const ucword = (str) => str.charAt(0).toUpperCase() + str.substr(1, str.length)

export default function Header () 
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
                    'cases': '#8DD1E1',
                    'deaths': '#83A6ED',
                    'recovered': '#D0ED57',
                    'active': '#8884D8'
                };

                delete data.updated;
                delete data.casesPerOneMillion
                delete data.deathsPerOneMillion
                setAffectedCountries(data.affectedCountries)
                delete data.affectedCountries
                delete data.casesPerOneMillion
                delete data.testsPerOneMillion
                delete data.tests;
                delete data.continent;
                delete data.population
                delete data.undefined;
                delete data.recoveredPerOneMillion;
                delete data.activePerOneMillion;
                delete data.criticalPerOneMillion;

                let totalCases = data.cases
                delete data.cases;
                
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

    const formatNumber = (value) =>  Number((value).toFixed(1)).toLocaleString();
    return (
        <div className="headerContainer">
            <h2>AFFECTED COUNTRIES: 
                <i style={{
                    color: 'red'
                }}>{affectedCountries}</i>
            </h2>
            {!loading ? <PieComponent country="global" data={stats} activeIdx={4}/> : <Loader/>}
        </div>
    )
}