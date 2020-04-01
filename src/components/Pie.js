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
import './Pie.css'

const ucword = (str) => str.charAt(0).toUpperCase() + str.substr(1, str.length)

export default function PieComponent ({country = 'philippines', data = [], activeIdx = null}) {
    const [arrData, setData] = useState([])
    const [countryInfo, setCountry] = useState({});
    const [colors, setColors] = useState([
        '#8DD1E1', // TodayCases
        '#b33434', // Deaths
        '#e35146', // TodayDeaths
        '#8884D8', // Recovered
        '#A4DE6C', // Active
        '#d97b34', // Critical
    ])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let pieData = []

        if (data.length > 0) {
            setData(data)
            setColors([
                '#b33434', // Deaths
                '#8884D8', // Recovered
                '#A4DE6C', // Active
            ])

            setLoading(false)
            return;
        }
        
        setTimeout(() => {
            fetch('https://corona.lmao.ninja/countries/' + country)
            .then(data => data.json())
            .then(data => {
                let cases = data.cases;
                delete data.country
                setCountry(data.countryInfo)
                delete data.countryInfo
                delete data.cases
                delete data.casesPerOneMillion
                delete data.deathsPerOneMillion
                delete data.updated

                _.forEach(data, (data, name) => {
                    pieData.push({
                        name: ucword(name),
                        value: data,
                        totalCases: cases
                    })
                });


                setData(pieData)
                setLoading(false)
            })
        }, 3000)
    }, [arrData])


    const formatNumber = (value) => {
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
            {/* <text x={cx} y={cy} dy={8} className="textInsidePie" textAnchor="middle" fill={fill} style={{
                fontWeight: 'bold'
            }}> */}
            <text x={cx} y={cy} className="recharts-text recharts-label centerTextLabel" textAnchor="middle" fill={fill} dominantBaseline="central">
                <tspan alignmentBaseline="middle" fontSize="12">{payload.name}</tspan>
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
            <text x={ex + (cos >= 0 ? 1 : -1) } y={ey} textAnchor={textAnchor} fill="#fff" fontSize="12">{`${payload.name}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) } y={ey} dy={18} textAnchor={textAnchor} fontSize="12" fill="#999">
              {`(${(percent * 100).toFixed(2)}%)`}
            </text>
          </g>
        );
    };

    const [activeIndex, setIndex] = useState(activeIdx ? activeIdx : 4);
    const onPieEnter = (data, index) => {
        setIndex(index)
    }

        
    return (
        <div className="container">
            {loading ? <Loader/> : 
                <div className="countryContainer">
                    {!countryInfo.flag  ? <img src={countryInfo.flag} style={{
                        height: '12px'
                    }}></img> : ''}
                    <h2>{country.toUpperCase()} ({formatNumber(arrData[0].totalCases)})</h2>
                </div>
            }
            <PieChart width={500} height={300}>
                <Tooltip separator="" formatter={(value, name, props) => ([formatNumber(value), ''])}/>
                <Legend 
                    layout="vertical" 
                    verticalAlign="top" 
                    align="center"
                    iconType="circle"
                    iconSize="12"
                    formatter={(value, entry) => <span style={{
                        fontSize: '12px',
                        textTransform: 'uppercase',
                        color: '#fff'
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
                            <Cell key={`cell-${index}`} fill={colors[index]}/>
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