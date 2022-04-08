import React, {
    useState,
    useEffect,
    useRef
} from 'react';
import * as d3 from 'd3';
import testData from './testData';

const width = 1000
const height = 500
// const margin = {
//     top: 20,
//     right: 40,
//     left: 200,
//     bottom: 20
// }

export default function PatientTimeline() {
    const [data, setData] = useState(null);
    const cm = useRef(null);
    
    useEffect(() => {
        setData(testData.cm)

        if (data) {
            const svg = d3.select(cm.current)

            const xScale = d3.scaleLinear().domain([0, data.length - 1]).range([0, 1000])
            const xAxis = d3.axisBottom(xScale);
    
            svg.select(".x-axis").call(xAxis)
        }



    }, [data])

    console.log('data', data)
    return (
        <>
        <h1>Cocomitant Medications</h1>
        <svg ref={cm} height={height} width={width}>
            <rect width="100%" height="100%" fill="grey" />
            <g className='x-axis' />
        </svg>
        </>
    )
}