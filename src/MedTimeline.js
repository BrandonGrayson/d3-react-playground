import React, {
    useEffect,
    useRef,
    useState
} from 'react';
import * as d3 from 'd3';
import testData from './testData';
import useResizeObserver from './useResizeObserver';



const getDate = dateString => {
    const date = dateString.split("-");
    return new Date(date[2], date[0] - 1, date[1]);
};

export default function MedTimeline() {
    const [data, setData] = useState(testData.cm)
    const svgRef = useRef()
    const wrapperRef = useRef()
    const dimensions = useResizeObserver(wrapperRef)

    const minDate = d3.min(data, dose => {
        return getDate(dose.rx_start_date)
    })
    
    const maxDate = d3.max(data, dose => {
        return getDate(dose.rx_start_date)
    })

    useEffect(() => {
        if (!dimensions) return;
       const svg = d3.select(svgRef.current)

       const xScale = d3.scaleTime().domain([minDate, maxDate]).range([0, dimensions.width])

       const xAxis = d3.axisBottom(xScale)

        svg.select(".x-axis").style("transform", `translateY(${450}px)`).call(xAxis)




    }, [dimensions])

    return (
        <div ref={wrapperRef}>
        <svg ref={svgRef}>
            <g className="x-axis" />
        </svg>
        </div>

    )
}