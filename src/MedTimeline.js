import React, {
    useEffect,
    useRef
} from 'react';
import * as d3 from 'd3';
import testData from './testData';
import useResizeObserver from './useResizeObserver';

export default function MedTimeline() {
    const svgRef = useRef(testData.cm)
    const wrapperRef = useRef()
    const dimensions = useResizeObserver(wrapperRef)


    useEffect(() => {
        if (!dimensions) return;
       const svg = d3.select(svgRef.current)


    })

    return (
        <div ref={wrapperRef}>
        <svg ref={svgRef}>
            <g className="x-axis" />
        </svg>
        </div>

    )
}