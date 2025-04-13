import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';



const resultData = [
    { "id": 1, "name": "Alice", "physics": 85, "chemistry": 78, "math": 92 },
    { "id": 2, "name": "Bob", "physics": 72, "chemistry": 68, "math": 79 },
    { "id": 3, "name": "Charlie", "physics": 90, "chemistry": 71, "math": 85 },
    { "id": 4, "name": "David", "physics": 75, "chemistry": 50, "math": 60 },
    { "id": 5, "name": "Eve", "physics": 95, "chemistry": 64, "math": 96 },
    { "id": 6, "name": "Frank", "physics": 58, "chemistry": 80, "math": 55 },
    { "id": 7, "name": "Grace", "physics": 80, "chemistry": 54, "math": 78 },
    { "id": 8, "name": "Hannah", "physics": 77, "chemistry": 65, "math": 88 },
    { "id": 9, "name": "Ian", "physics": 69, "chemistry": 83, "math": 70 },
    { "id": 10, "name": "Julia", "physics": 58, "chemistry": 81, "math": 94 }
  ];

const Rechart = () => {
    return (
        <div>
            <LineChart width={500} height={500} data={resultData} >
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey={'chemistry'} stroke='green'></Line>
                <Line dataKey={'physics'} stroke='black'></Line>
            </LineChart>
                
        </div>
    );
};

export default Rechart;