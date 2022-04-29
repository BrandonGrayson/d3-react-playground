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

var barHeight = 20;
var gap = barHeight + 4;
var topPadding = 75;
var sidePadding = 75;

const yVals = ["OE", "OM"]

var colorScale = d3.scaleLinear()
    .domain([0, 1])
    .range(["#00B9FA", "#F95002"])
    .interpolate(d3.interpolateHcl);

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

        // select the svg ref
        const svg = d3.select(svgRef.current)

        // x axis


        const xScale = d3.scaleTime().domain([minDate, maxDate]).range([0 + dimensions.left, svgWidth])

        const xAxis = d3.axisBottom(xScale)

        svg.select(".x-axis").style("transform", `translateY(${450}px)`).call(xAxis)

        // y axis
        // const YScale = d3.scaleBand().domain(["OM", "OE"]).range([400, 100])

        // const yAxis = d3.axisLeft(YScale)

        // svg.select(".y-axis").style("transform", `translateX(180px)`).call(yAxis)

        svg
         .append('g')
         .selectAll('text')
         .data(yVals)
         .join('text')
         .text(data => data)
         .attr('x', 200)
         .attr('y', 200)
         .attr("font-size", 20)

        // svg
        //  .append('g')
        //  .selectAll('.med')
        //  .data(data)
        //  .join('rect')
        //  .attr('class', 'med')
        //  .attr('x', data => )

    }, [])

    return (

        <svg ref={svgRef} width={svgWidth} height={svgHeight}>
            <g className="x-axis" />
            <g className="y-axis" />
        </svg>


    )
}