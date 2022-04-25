import React, {
    useEffect,
    useRef,
    useState
} from 'react';
import * as d3 from 'd3';
import testData from './testData';
import useResizeObserver from './useResizeObserver';

const svgWidth = 1600
const svgHeight = 600

const getDate = dateString => {
    const date = dateString.split("-");
    return new Date(date[2], date[0] - 1, date[1]);
};

export default function MedTimeline() {
    const [data, setData] = useState(testData.cm)
    const svgRef = useRef()
    // const wrapperRef = useRef()
    // const dimensions = useResizeObserver(wrapperRef)

    const minDate = d3.min(data, dose => {
        return getDate(dose.rx_start_date)
    })
    
    const maxDate = d3.max(data, dose => {
        return getDate(dose.rx_start_date)
    })

    useEffect(() => {
    
       const svg = d3.select(svgRef.current)

       const xScale = d3.scaleTime().domain([minDate, maxDate]).range([0, svgWidth])

       const xAxis = d3.axisBottom(xScale)

        svg.select(".x-axis").style("transform", `translateY(${450}px)`).call(xAxis)


        // const YScale = d3.scaleLinear().domain([0, testData.length]).range([0, svgHeight])

        // const yAxis = d3.axisLeft(YScale)

        // svg.select(".y-axis").call(yAxis)



    }, [])

    return (
        
        <svg ref={svgRef} width={svgWidth} height={svgHeight}>
            <g className="x-axis" />
            <g className="y-axis" />
        </svg>
       

    )
}