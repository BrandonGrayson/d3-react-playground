import React, {
    useState,
    useEffect,
    useRef
} from 'react';
import * as d3 from 'd3';
import testData from './testData';
import useResizeObserver from './useResizeObserver';
import { svg } from 'd3';

const width = 1500
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
    const cm = useRef(null);

    const dimensions = useResizeObserver(wrapperRef)

    useEffect(() => {
        setData(testData.cm)
        const svg = d3.select(cm.current)

        if (!dimensions) return;

        if (Array.isArray(data)) {
            console.log('array value', data[0].rx_start_date)
            const minDate = d3.min(data, dose => {
                return getDate(dose.rx_start_date)
            })

            const maxDate = d3.max(data, dose => {
                return getDate(dose.rx_start_date)
            })

            const xScale = d3.scaleTime().domain([minDate, maxDate]).range([0, dimensions.width])
            const xAxis = d3.axisBottom(xScale)
            svg.select(".x-axis")
            .style("transform", `translateY(${dimensions.height}px)`)
            .call(xAxis)

        }

    }, [data, dimensions])

    console.log('data', data)
    
    return (
        <>
        <h1>Concomitant Medications</h1>
        <div width={width} height={height} ref={wrapperRef}>
        <svg ref={cm} height={height} width={width}>
            <rect width="100%" height="100%" fill="grey" />
            <g className='x-axis' />
        </svg>
        </div>

        </>
    )
}