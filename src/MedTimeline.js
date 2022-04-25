import React, {
    useState,
    useEffect,
    useRef
} from 'react';
import * as d3 from 'd3';
import testData from './testData';
import useResizeObserver from './useResizeObserver';

export default function MedTimeline() {
    const svgRef = useRef(testData.cm)

    return (
        <svg ref={svgRef}>

        </svg>
    )
}