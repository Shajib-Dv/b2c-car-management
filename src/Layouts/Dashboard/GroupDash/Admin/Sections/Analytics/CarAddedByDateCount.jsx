import React, { PureComponent } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import Loader from '../../../../../../Shared/components/Loader';
import { IoCarSportSharp } from 'react-icons/io5';



const CarAddedByDateCount = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        fetch('http://localhost:3000/api/carCountByDate')
            .then((response) => response.json())
            .then((data) => {
                const reversedData = data.slice(0, 10);
                setData(reversedData);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    console.log(data)

    return (
        <div className=''>

            <h1 className='text-2xl font-bold mb-5 flex justify-center items-center gap-2'>
                <span className='text-green-600 text-3xl'>
                    <IoCarSportSharp />
                </span>
                Car added by date</h1>
            {loading && <Loader />}
            <div className=''>
                <AreaChart
                    width={1100}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="CarCount" stroke="#8884d8" fill="green" />
                </AreaChart>
            </div>
        </div>
    );
};

export default CarAddedByDateCount;