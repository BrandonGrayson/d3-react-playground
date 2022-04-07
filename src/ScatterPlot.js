import React, {
  useState,
  useEffect,
} from 'react';
import { csv, scaleLinear } from 'd3';
import './App.css'

import { extent } from 'd3';

const csvUrl = 'https://gist.githubusercontent.com/netj/8836201/raw/6f9306ad21398ea43cba4f7d537619d0e07d5ae3/iris.csv'

const width = 1200;
const height = 500;
const margin = {
  top: 20,
  right: 40,
  left: 200,
  bottom: 20
}

export default function ScatterPlot() {

  const [data, setData] = useState(null);

  const xValue = d => d.sepal.length
  const yValue = d => d.sepal.width

  useEffect(() => {
    const row = (d) => {
      d.sepal.length = +d.sepal.length
      d.sepal.width = +d.sepal.width
      d.petal.length = +d.petal.length
      d.petal.width = +d.petal.width
      return d;
    };
    csv(csvUrl, row).then(setData);
  }, []);

  if (!data) {
    return <pre>Loading...</pre>;
  }

  console.log(data[0]);

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;



  const xScale = scaleLinear()
    .domain(extent(data, xValue))
    .range([0, innerWidth])

  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([0, innerHeight])

  return (
    <>
      <svg width={width} height={height}>
        {
          data.map(d => (
            <circle
              className='mark'
              cx={xScale(xValue(d))}
              cy={yScale(yValue(d))}
              r={10}>
            </circle>
          ))
        }
        {
          yScale.ticks.map(tickValue => (
            <g className="tick">

            </g>
          ))
        }
      </svg>
    </>
  )

}