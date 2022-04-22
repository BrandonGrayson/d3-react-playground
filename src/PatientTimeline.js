import React, {
    useState,
    useEffect,
    useRef
} from 'react';
import * as d3 from 'd3';
import testData from './testData';
import useResizeObserver from './useResizeObserver';



// const width = 1500
// const height = 500
// const margin = {
//     top: 20,
//     right: 40,
//     left: 200,
//     bottom: 20
// }


// const heatmapDimensions = {
//     width: width,
//     height: height,
//     margin: { top: 130, left: 50, bottom: 70, right: 50 }
// }

const rectSize = 30;

// const colors = [
//     { range: 1, color: '#42bcf5' },
//     { range: 2, color: '#42f593' },
//     { range: 3, color: '#f59342' },
//     { range: 4, color: '#f54542' },
//     { range: 5, color: '#5742f5' }
// ]

function colorAssign(color) {
    if (color === 1) return '#42bcf5'
    else if (color === 2) return '#42f593'
    else if (color === 3) return '#f59342'
    else if (color === 4) return '#f54542'
    else return '#5742f5'
}

// const getDate = datestring => {
//     return new Date(datestring)
// }

const getDate = dateString => {
    const date = dateString.split("-");
    return new Date(date[2], date[0] - 1, date[1]);
};

export default function PatientTimeline() {
    const [data, setData] = useState(null);
    const [omData, setOmData] = useState(null)
    const wrapperRef = useRef()
    const svgRef = useRef(null);

    const dimensions = useResizeObserver(wrapperRef)

    useEffect(() => {
        setData(testData.cm)
        setOmData(testData.mh)
        const svg = d3.select(svgRef.current)

        if (!dimensions) return;

        // x axis
        if (Array.isArray(data)) {

            const minDate = d3.min(data, dose => {
                return getDate(dose.rx_start_date)
            })

            const maxDate = d3.max(data, dose => {
                return getDate(dose.rx_start_date)
            })

            const xScale = d3.scaleTime().domain([minDate, maxDate]).range([0, dimensions.width])

                svg
                    .selectAll(".dose")
                    .data(data)
                    .join('rect')
                    .attr('class', 'dose')
                    .attr('x', dose => xScale(getDate(dose.rx_start_date)))
                    .attr('y', 420)
                    .attr('width', rectSize)
                    .attr('height', rectSize)
                    .attr('fill', color => {
                        return colorAssign(parseInt(color.dose))
                    })

                    // end dates
                svg
                    .selectAll(".end")
                    .data(data)
                    .join('rect')
                    .attr('class', 'end')
                    .attr('x', data => xScale(getDate(data.rx_end_date)))
                    .attr('y', 420)
                    .attr('width', rectSize)
                    .attr('height', rectSize)
                    .attr('fill', color => {
                        return colorAssign(parseInt(color.dose))
                    })

                // adding om medications
                // svg
                //  .selectAll(".om")
                //  .data(d)


            // append the type of medications

            const xAxis = d3.axisBottom(xScale)

            svg.select(".x-axis")
                .style("transform", `translateY(${450}px)`)
                .call(xAxis)
        }
    }, [data, dimensions])

    // if (data === null) {
    //     return null
    // }

    return (
        <>
            <h1>Concomitant Medications</h1>
 
            <div ref={wrapperRef}>
                <svg ref={svgRef} >
                    {/* <rect width="100%" height="100%" fill="grey" /> */}
                    <g className='x-axis' />
                    <g className='name' />
                </svg>
            </div>

            <h2>Dose breakdown</h2>
            <ul>
                <li>blue: 1 </li>
                <li>green: 2 </li>
                <li>orange: 3 </li>
                <li>red: 4 </li>
                <li>purple: 5</li>
            </ul>
            <section></section>
        </>
    )
}