import React, {
  useState,
  useEffect,
} from 'react';
import { csv, scaleBand, scaleLinear, max } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv';

const width = 960;
const height = 500;
const margin = {
  top: 20,
  right: 20,
  left: 20,
  bottom: 20
}

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      d.population = +d['2020'];
      return d;
    };
    csv(csvUrl, row).then((data) => {
      setData(data.slice(0, 10));
    });
  }, []);

  if (!data) {
    return <pre>Loading...</pre>;
  }

  console.log(data[0]);

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const yScale = scaleBand()
    .domain(data.map((d) => d.Country))
    .range([0, innerHeight]);

  const xScale = scaleLinear()
    .domain([0, max(data, (d) => d.population)])
    .range([0, innerWidth]);

  console.log('yScale', yScale(data.Country))
  console.log('xScale', xScale(data.Population))

  return (

    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {
          xScale.ticks().map(tickValue => (<line x1={xScale(tickValue)} y1={0} x2={xScale(tickValue)} y2={innerHeight} stroke="black" />))
        }
      {
        data.map((d) => (
          <rect
            key={d.Country}
            y={yScale(d.Country)}
            width={xScale(d.population)}
            height={yScale.bandwidth()}
          />
        ))}
      </g>

    </svg>






  );
}

export default App;
