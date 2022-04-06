import React, {
    useState,
    useEffect,
  } from 'react';
  import { csv, scaleBand, scaleLinear, max } from 'd3';

const width = 1000
const height = 500

export default function PatientTimeline() {
    const [data, setData] = useState(null) 

    return (
        <>
            <svg width={width} height={height}>

            </svg>
        </>
    )
}