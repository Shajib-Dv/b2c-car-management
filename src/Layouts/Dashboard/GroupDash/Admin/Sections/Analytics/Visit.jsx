import React, { useEffect, useState } from 'react';
import { Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';
import Loader from '../../../../../../Shared/components/Loader';
import { IoCarSportSharp } from 'react-icons/io5';

const Visit = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        fetch('http://localhost:3000/get-visit-counts')
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

    //console.log(data)

    // const data = [
    //     {
    //         name: 'Page A',
    //         uv: 590,
    //         pv: 800,
    //         amt: 1400,
    //     },
    //     {
    //         name: 'Page B',
    //         uv: 868,
    //         pv: 967,
    //         amt: 1506,
    //     },
    //     {
    //         name: 'Page C',
    //         uv: 1397,
    //         pv: 1098,
    //         amt: 989,
    //     },
    //     {
    //         name: 'Page D',
    //         uv: 1480,
    //         pv: 1200,
    //         amt: 1228,
    //     },
    //     {
    //         name: 'Page E',
    //         uv: 1520,
    //         pv: 1108,
    //         amt: 1100,
    //     },
    //     {
    //         name: 'Page F',
    //         uv: 1400,
    //         pv: 680,
    //         amt: 1700,
    //     },
    // ];


    return (
        <>
            {/* <h1 className='text-2xl font-bold mb-5 flex justify-center items-center gap-2'>
                <span className='text-green-600 text-3xl'>
                    <IoCarSportSharp />
                </span>
                Visitor</h1> */}
            {loading && <Loader />}
            <div>
                <ComposedChart
                    width={1100}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="date" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="count" stroke="#ff7300" />
                </ComposedChart>
            </div>
        </>
    );
};

export default Visit;