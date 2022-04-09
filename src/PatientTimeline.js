import React, {
    useState,
    useEffect,
    useRef
} from 'react';
import * as d3 from 'd3';
import testData from './testData';
import useResizeObserver from './useResizeObserver';

const width = 1000
const height = 500
// const margin = {
//     top: 20,
//     right: 40,
//     left: 200,
//     bottom: 20
// }

const getDate = datestring => {
    return new Date(datestring)
}

export default function PatientTimeline() {
    const [data, setData] = useState(null);
    const wrapperRef = useRef()
    const dimensions = useResizeObserver(wrapperRef)

    const cm = useRef(null);
    
    useEffect(() => {
        setData(testData.cm)

        if (data) {
            const svg = d3.select(cm.current)

            const xScale = d3.scaleLinear().domain([0, data.length - 1]).range([0, 1000])
            const xAxis = d3.axisBottom(xScale);
    
            svg.select(".x-axis").call(xAxis)
        }

        if (Array.isArray(data)) {
            console.log('array value', data[0].rx_start_date)
            const minDate = d3.min(data, dose => {
                return getDate(dose.rx_start_date)
            })

            const maxDate = d3.max(data, dose => {
                return getDate(dose.rx_start_date)
            })

            const xScale = d3.scaleTime().domain([minDate, maxDate]).range([0, dimensions.width])
        }



    }, [data, dimensions])

    console.log('data', data)

    // if (data.length !== 0) {
    //     console.log('get Date example', data)
    // }
    
    return (
        <>
        <h1>Concomitant Medications</h1>
        <div ref={wrapperRef}>
        <svg ref={cm} height={height} width={width}>
            <rect width="100%" height="100%" fill="grey" />
            <g className='x-axis' />
        </svg>
        </div>

        </>
    )
}