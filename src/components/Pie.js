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

export default function PieComponent ({country = 'philippines', data = []}) {
    const [arrData, setData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let pieData = []

        if (data.length > 0) {
            setData(data)
            setLoading(false)
            return;
        }
        
        setTimeout(() => {
            fetch('https://corona.lmao.ninja/countries/' + country)
            .then(data => data.json())
            .then(data => {
                let cases = data.cases;
                delete data.country
                delete data.countryInfo
                delete data.cases
                delete data.casesPerOneMillion
                delete data.deathsPerOneMillion

                _.forEach(data, (data, name) => {
                    pieData.push({
                        name: ucword(name),
                        value: data,
                        totalCases: cases
                    })
                });

                console.log(pieData)

                setData(pieData)
                setLoading(false)
            })
        }, 3000)
    }, [arrData])

    const colors = [
        '#8DD1E1',
        '#83A6ED',
        '#D0ED57',
        '#8884D8',
        '#A4DE6C',
        '#82CA9D',
    ];

    const formatNumber = (value) => {
        return Number((value).toFixed(1)).toLocaleString()
    }

    const CustomLabel = ({viewBox, value1, value2}) => {
        const {cx, cy} = viewBox;
        console.log(cx,cy)
        return (
            <text x={cx} y={cy + 20} className="containerLabel" fill="#333" className="recharts-text recharts-label" textAnchor="middle" dominantBaseline="central">
                <tspan alignmentBaseline="bottom" fontSize="12">{value2.toUpperCase().substr(0, 3)} ({value1})</tspan>

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
        console.log(`M${sx},${sy}L${mx},${my}L${ex},${ey}`)
        return (
          <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{formatNumber(payload.value)}</text>
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
            <text x={ex + (cos >= 0 ? 1 : -1) } y={ey} textAnchor={textAnchor} fill="#333" fontSize="12">{`${payload.name}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) } y={ey} dy={18} textAnchor={textAnchor} fontSize="12" fill="#999">
              {`(${(percent * 100).toFixed(2)}%)`}
            </text>
          </g>
        );
    };

    const [activeIndex, setIndex] = useState(4);
    const onPieEnter = (data, index) => {
        setIndex(index)
    }

        
    return (
        <div className="container">
            
            <h2>{country.toUpperCase()}</h2>
            {loading ? <Loader/> : ''}
            <PieChart width={730} height={300}>
                {/* <Tooltip formatter={(value, name, props) => ([formatNumber(value), ucword(name)])}/> */}
                {/* <Legend 
                    layout="vetical" 
                    verticalAlign="bottom" 
                    align="center" 
                    iconType="circle"
                    formatter={(value, entry) => <span style={{
                        fontSize: '12px',
                        textTransform: 'uppercase'
                    }}>{value}: <i style={{color: 'red'}}>{formatNumber(entry.payload.value)}</i></span>}
                /> */}
                {!loading ? 
                <Pie 
                    data={arrData} 
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    dataKey="value" 
                    nameKey="name" 
                    cx="50%" 
                    cy="50%" 
                    outerRadius={100} 
                    innerRadius={60} 
                    fill="#8884d8"
                    onMouseEnter={onPieEnter}
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