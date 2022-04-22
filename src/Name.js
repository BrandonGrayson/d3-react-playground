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
        svg
            .selectAll("p")
            .data([1, 2, 3])
            .enter()
            .append("p")
            .text(data => data)
        
        // d3
        // .select('div')
        // .selectAll('p')
        // .data([1, 2, 3])
        // .enter()
        // .append('p')
        // .text(data => data)
    })

    return (
        <>
            {/* <svg ref={svgRef}>
            
           
            </svg> */}
            <svg width="400" height="60">
                <text x="260" y="25" fontSize="20px" fill="orange" textAnchor="end">Hello World</text>
            </svg>
            <div></div>
        </>
    )
}