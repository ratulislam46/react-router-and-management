import { Computer } from 'lucide-react';
import React, { use } from 'react';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const MarkChart = ({marksPromise}) => {

    const markDataRes = use(marksPromise);
    const markData = markDataRes.data;
    // console.log(markData);

    const markChartData = markData.map(studentData => {
        const student = {
            id: studentData.rollNo,
            name : studentData.name,
            computer : studentData.mark.computer,
            english : studentData.mark.english,
            math : studentData.mark.math,
            science : studentData.mark.science
        };

        const avg = (student.computer + student.english + student.math + student.science) / 4 ;
        // console.log(avg);
        student.avg = avg;
        
        return student;
    });
    // console.log(markChartData);

    return (
        <div>

            <BarChart width={500} height={300} data={markChartData}>

                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>

                <Tooltip></Tooltip>
                <Legend></Legend>

                <Bar dataKey="avg" fill='green'></Bar>
                <Bar dataKey="math" fill='tomato'></Bar>
                <Bar dataKey="computer" fill='blue'></Bar>
                
            </BarChart>
            
        </div>
    );
};

export default MarkChart;