import React, {
    useState,
    useEffect,
    useRef
} from 'react';
import * as d3 from 'd3';
import testData from './testData';
import useResizeObserver from './useResizeObserver';
import { axisBottom } from 'd3';


export default function Name() {
    const svgRef = useRef()
    const wrapperRef = useRef()
    const dimensions = useResizeObserver(wrapperRef)
    const medNames = ["OM", "OE"]
    const dataCM = [testData.cm, testData.mh]

    const rectSize = 15

    useEffect(() => {
        if (!dimensions) return;

        const svg = d3.select(svgRef.current)
        const xScale = d3.scaleLinear().domain([0, medNames.length]).range([0, dimensions.width])

        svg
         .append('g')
         .selectAll('text')
         .data(medNames)
         .join('text')
         .text(data => data)
         .attr('x', (d, i) => xScale(i))
         .attr('y', dimensions.height - dimensions.bottom)
        

        dataCM.forEach((day, i) => {
            svg
            .append('g')
             .selectAll('.om')
             .data(dataCM)
             .join('rect')
             .attr('class', 'om')
             .attr('x', xScale(i))
             .attr('y', (d, j) => j * (rectSize + 2) + dimensions.top)
             .attr('width', rectSize)
             .attr('height', rectSize)
             .attr('fill', 'red')
        }) 

        // const xAxis = d3.axisBottom(xScale)

        // svg
        //  .select('.x-axis')
        //  .call(xAxis)
        

        // appends the X axis
        // xAxis(svg.select('.x-axis'))
         

        // svg
        //     .selectAll("p")
        //     .data([1, 2, 3])
        //     .enter()
        //     .append("p")
        //     .text(data => data)

        // d3
        // .select('div')
        // .selectAll('p')
        // .data([1, 2, 3])
        // .enter()
        // .append('p')
        // .text(data => data)

        console.log('dimensions', dimensions)
       
    }, [dimensions])

    return (
        <>
            <div ref={wrapperRef}>
                <svg ref={svgRef}>
                <g className='x-axis' />
                </svg>
            </div>

         
        </>
    )
}