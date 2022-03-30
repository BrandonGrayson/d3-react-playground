import './App.css';
import { useEffect, useState } from 'react';
import * as d3 from 'd3';

const width = 960
const height = 500

const csvUrl = 'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const row = d => {
      d.population = parseFloat(d['2020'])
      return d
    }
    d3.csv(csvUrl, row).then(setData)
  }, [])

  if (!data) {
    return <pre>Loading...</pre>
  }

  const yScale = d3.scaleBand().domain(data.map(data => data.country)).range([0, data.country])

  return (
    <svg width={width} height={height}>
      {
        data.map(d => <rect x={0} y={yScale(data.country)} w h/>)
      }
    </svg>
  );
}

export default App;
