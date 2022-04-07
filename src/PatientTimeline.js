import React, {
    useState,
    useEffect,
    useRef
} from 'react';
import * as d3 from 'd3';
import testData from './testData';

const width = 1000
const height = 500
// const margin = {
//     top: 20,
//     right: 40,
//     left: 200,
//     bottom: 20
// }

export default function PatientTimeline() {
    const [data, setData] = useState(null) 
    const cm = useRef(null)

    useEffect(() => {
        setData(testData.cm)

        const svg = d3.select(cm.current)
        
    }, [])

    console.log('data', data)
    return (
        <>
        <h1>Cocomitant Medications</h1>
            <svg ref={cm} width={width} height={height}>
            </svg>
        </>
    )
}