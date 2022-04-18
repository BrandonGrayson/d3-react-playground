import React, {
    useState,
    useEffect,
    useRef
} from 'react';
import * as d3 from 'd3';
import testData from './testData';
import useResizeObserver from './useResizeObserver';

export default function Name() {
    const svgRef = useRef(null)

    useEffect(() => {
        const svg = d3.select(svgRef.current)
        // svg
        //     .selectAll('text')
        //     .data([1, 2, 3])
        //     .enter()
        //     .append('text')
        //     .text(data => data)
        //     .attr('fontFamily', '30px')

        d3
        .select('div')
        .selectAll('p')
        .data([1, 2, 3])
        .enter()
        .append('p')
        .text(data => data)


    })

    return (
        <>
            <svg ref={svgRef}>
            

            </svg>
            <div></div>
        </>
    )
}