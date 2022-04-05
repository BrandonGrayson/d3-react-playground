import React, {
    useState,
    useEffect,
  } from 'react';
  import { csv, scaleBand, scaleLinear, max } from 'd3';

  const csvUrl = 'https://gist.githubusercontent.com/netj/8836201/raw/6f9306ad21398ea43cba4f7d537619d0e07d5ae3/iris.csv'

export default function ScatterPlot() {

    const [data, setData] = useState(null);

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
    
}