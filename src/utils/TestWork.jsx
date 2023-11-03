import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const TestWork = () => {
    const [visitCounts, setVisitCounts] = useState([]);

    const loadVisitCounts = async () => {
        const response = await fetch('https://b2c-car-management-server-p6jwvedmy-shajib-dv.vercel.app/increment-visit', { method: 'POST' });
        const data = await response.json();
        if (data.success) {
            const countsResponse = await fetch('https://b2c-car-management-server-p6jwvedmy-shajib-dv.vercel.app/get-visit-counts');
            const countsData = await countsResponse.json();
            setVisitCounts(countsData);
        }
    };

    useEffect(() => {
        loadVisitCounts();
    }, []);
    return (
        <div>
            <h1>Visit Tracker</h1>
            <p>Refreshing the page will increment the visit count.</p>
            <ul>
                {visitCounts.map((visit, index) => (
                    <li key={index}>
                        Date: {new Date(visit.date).toLocaleString()} - Count: {visit.count}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TestWork;