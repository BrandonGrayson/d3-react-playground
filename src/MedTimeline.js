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

const dimensions = {
    right: 200, 
    left: 200
}

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
    
        // x axis
       const svg = d3.select(svgRef.current)

       const xScale = d3.scaleTime().domain([minDate, maxDate]).range([0 + dimensions.left, svgWidth])

       const xAxis = d3.axisBottom(xScale)

        svg.select(".x-axis").style("transform", `translateY(${450}px)`).call(xAxis)

        // y axis
        const YScale = d3.scaleBand().domain(["OM", "OE"]).range([400, 100])

        const yAxis = d3.axisLeft(YScale)

        svg.select(".y-axis").style("transform", `translateX(180px)`).call(yAxis)

        // first meds line
        svg
         .selectAll(".med")
         .data(data)
         .join('line')
         .attr('class', 'med')
         .attr("stroke", "black")
         .attr('x1', data => xScale(getDate(data.rx_start_date)))
         .attr("y1", 20 + 10)
         .attr('x2', data => xScale(getDate(data.rx_end_date)))
         .attr('y2', 20 + 10)
    }, [])

    return (
        
        <svg ref={svgRef} width={svgWidth} height={svgHeight}>
            <g className="x-axis" />
            <g className="y-axis" />
        </svg>
       

    )
}