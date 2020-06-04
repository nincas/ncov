import React, { useEffect, useState } from 'react';
import {
    PieChart,
    Pie,
    Tooltip,
    Legend,
    Text,
    Label,
    Cell,
    Sector,
    LineChart
} from 'recharts'
import _ from 'lodash'
import Loader from './Loader'
import styled from 'styled-components'
import './Pie.css'

const ucword = (str) => str.charAt(0).toUpperCase() + str.substr(1, str.length)

export default function PieComponent ({country = 'philippines', theme, data = [], activeIdx = null}) {
    const [arrData, setData] = useState([])
    const [countryInfo, setCountry] = useState({});
    const [countryName, setCountryName] = useState('');
    const [tested, setTested] = useState(0);
    const [latLong, setLatLong] = useState('')
    const [colors, setColors] = useState({
        'todayCases' : '#8DD1E1', // TodayCases
        'deaths' : '#b33434', // Deaths
        'todayDeaths' : '#e35146', // TodayDeaths
        'recovered' : '#8884D8', // Recovered
        'active' : '#A4DE6C', // Active
        'critical' : '#d97b34', // Critical
        'todayRecovered' : '#fca503'
    })
    
    const [loading, setLoading] = useState(true);

    const sleep = async (ms) => setTimeout(Promise.resolve(), ms)

    // Theme
    const colorTheme = theme == 'dark' ? '#fff' : '#26242E';

    useEffect(() => {
        let pieData = []

        if (data.length > 0) {
            setData(data)
            setLoading(false)
            return;
        }
        
        setTimeout(() => {
            fetch('https://corona.lmao.ninja/v2/countries/' + country)
            .then(data => data.json())
            .then(data => {
                let cases = data.cases;
                setCountry(data.countryInfo)
                setCountryName(data.country)
                setLatLong(`${data.countryInfo.lat},${data.countryInfo.long}`)
                setTested(data.tests)
    
                for (let i in data) {
                    if (Object.keys(colors).indexOf(i) === -1) {
                        delete data[i]
                    }
                }
    
                console.log(colors)
                _.forEach(data, (data, name) => {
                    pieData.push({
                        name: ucword(name),
                        value: data,
                        fill: colors[name],
                        totalCases: cases
                    })
                });
    
    
                setData(pieData)
                setLoading(false)
            })
        }, 3500);
    }, [arrData])


    const formatNumber = (value) => {
        if (typeof value == 'string') return;
        return Number((value).toFixed(1)).toLocaleString()
    }

    const CustomLabel = ({viewBox, value1, value2}) => {
        const {cx, cy} = viewBox;
        return (
            <text x={cx} y={cy + 20} className="containerLabel" fill="red" fontWeight="bold" className="recharts-text recharts-label" textAnchor="middle" dominantBaseline="central">
                {/* <tspan alignmentBaseline="bottom" fontSize="12">({value2})</tspan> */}
            </text>
        )
    }


    const renderActiveShape = (props) => {
        const RADIAN = Math.PI / 180;
        const {
          cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
          fill, payload, percent, value,
        } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';
        return (
          <g>
            <text x={cx} y={cy} className="recharts-text recharts-label centerTextLabel" textAnchor="middle" fill={fill} dominantBaseline="central">
                <tspan alignmentBaseline="middle" fontSize="14" style={{
                    fontWeight: 'bold'
                }}>{payload.name}</tspan>
            </text>
            <Sector
              cx={cx}
              cy={cy}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              startAngle={startAngle}
              endAngle={endAngle}
              fill={fill}
            />
            <Sector
              cx={cx}
              cy={cy}
              startAngle={startAngle}
              endAngle={endAngle}
              innerRadius={outerRadius + 6}
              outerRadius={outerRadius + 10}
              fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex - 10},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex - 10} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) } y={ey} textAnchor={textAnchor} fill={colorTheme} >{payload.name.toUpperCase()}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) } y={ey} dy={18} textAnchor={textAnchor} fontSize="12" fill="#999">
              {`(${(percent * 100).toFixed(2)}%)`}
            </text>
          </g>
        );
    };

    const [activeIndex, setIndex] = useState(activeIdx ? activeIdx : 5);
    const onPieEnter = (data, index) => {
        setIndex(index)
    }

    const HeaderCont = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        color: #e85f5f;
        font-size: 15px;
        padding-bottom: 3px;

        i {
            color: ${theme == 'dark' ? '#fff' : '#333'} !important;
        }
    `

    const CountryName = styled.span`
        font-size: 18px !important;
        color: ${theme == 'dark' ? 'yellow' : '#26242E'} !important;
    `

    const CountryContainer = styled.div`
        display: flex !important;
        flex-direction: row !important;
        justify-content: center;
        align-items: center !important;
    `

    // °
    return (
        <div className="container">
            {loading ? <Loader name={country} theme={theme}/> : 
                <div className="countryContainer">
                    <CountryContainer>
                        {countryInfo.flag  ? <img src={countryInfo.flag} style={{
                            height: '18px'
                        }} title={country ? country.toUpperCase() : countryName.toUpperCase()}/> : ''}
                        <CountryName> {countryName ? countryName.toUpperCase() : country.toUpperCase()}</CountryName>
                    </CountryContainer>
                    <HeaderCont image={countryInfo.flag ? countryInfo.flag : ''}>
                        <span>CASES: <i>{formatNumber(arrData[0].totalCases)}</i></span>
                        {country !== 'global' ? <span>TESTS: <i>{formatNumber(tested)}</i></span> : ''}
                    </HeaderCont>
                </div>
            }
            <PieChart width={500} height={400}>
                <Tooltip separator="" formatter={(value, name, props) => ([formatNumber(value), ''])}/>
                <Legend 
                    layout="vertical" 
                    verticalAlign="top" 
                    align="center"
                    iconType="circle"
                    iconSize={12}
                    formatter={(value, entry) => <span style={{
                        fontSize: '12px',
                        textTransform: 'uppercase',
                        color: colorTheme
                    }}>{value}: <i style={{color: 'red !important'}}>{formatNumber(entry.payload.value)}</i></span>}
                />
                {!loading ? 
                <Pie 
                    data={arrData} 
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    dataKey="value" 
                    nameKey="name" 
                    cx="50%" 
                    cy="50%" 
                    outerRadius={85} 
                    innerRadius={55} 
                    fill="#8884d8"
                    onMouseEnter={onPieEnter}
                    animationDuration={2000}
                    animationEasing="ease-in-out"
                >
                    <Label width={30} position="center" content={<CustomLabel value1={formatNumber(arrData[0].totalCases)} value2={country}/>}></Label>
                    {
                        arrData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill}/>
                        ))
                    }
                </Pie>
                :
                ''
                }
            </PieChart> 
        </div>
    )
}