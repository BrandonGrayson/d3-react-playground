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

const videoData = [25, 30, 45, 60, 20]

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
        <svg height="300" width="1000">
        <rect width="100%" height="100%" fill="grey" />
        {
            videoData.map(value => (
                <circle r={value}></circle>
            ))
        }
        </svg>
        </>
    )
}