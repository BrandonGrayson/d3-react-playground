import React, {
    useState,
    useEffect,
} from 'react';
import { csv, scaleBand, scaleLinear, max } from 'd3';

import testData from './testData';

const width = 1000
const height = 500

export default function PatientTimeline() {
    const [data, setData] = useState(null) 

    useEffect(() => {
        setData(testData)
    }, [])

    console.log('data', data)
    return (
        <>
        <h1>Patient Timeline</h1>
            <svg width={width} height={height}>
                <g>

                </g>
            </svg>
        </>
    )
}