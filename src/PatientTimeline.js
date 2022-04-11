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
    const svgRef = useRef(null);

    const dimensions = useResizeObserver(wrapperRef)

    const rectSize = 30;

    const heatmapDimensions = {
        width: width,
        height: height,
        margin: {top: 130, left: 50, bottom: 70, right: 50}
    }

    useEffect(() => {
        setData(testData.cm)
        const svg = d3.select(svgRef.current)

        if (!dimensions) return;


        // x axis
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
            .style("transform", `translateY(${450}px)`)
            .call(xAxis)
        }

        // Draw Blocks
        data.forEach((diagnosis, i) => {
            svg
             .append('g')
             .selectAll('rect')
        })

    }, [data, dimensions])

    console.log('data', data)
    
    return (
        <>
        <h1>Concomitant Medications</h1>
        <div ref={wrapperRef} >
        <svg ref={svgRef} height={height} width={width}>
            {/* <rect width="100%" height="100%" fill="grey" /> */}
            <g className='x-axis' />
        </svg>
        </div>

        </>
    )
}