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



    const colors = [
        {range: 1, color: '#42bcf5'},
        {range: 2, color: '#42f593'},
        {range: 3, color: '#f59342'},
        {range: 4, color: '#f54542'},
        {range: 5, color: '#5742f5'}
    ]

    function colorAssign(color) {
        if (color === 1) return '#42bcf5'
        else if (color === 2) return '#42f593'
        else if (color === 3) return '#f59342'
        else if (color === 4) return '#f54542'
        else return '#5742f5'
    }

    useEffect(() => {
        setData(testData.cm)
        const svg = d3.select(svgRef.current)

        if (!dimensions) return;


        const heatmapDimensions = {
            width: width,
            height: height,
            margin: { top: 130, left: 50, bottom: 70, right: 50 }
        }

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


            // Draw Blocks
            data.forEach((diagnosis, i) => {

                console.log('diagnosis', diagnosis)
                svg
                    .append('g')
                    .selectAll('rect')
                    .data(diagnosis.dose)
                    .join('rect')
                    // .attr('x', xScale())
                    // .attr('y',(rectSize + 2))
                    .attr('width', rectSize)
                    .attr('height', rectSize)
                    .attr('fill', color => colorAssign(color))
            })
        }



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