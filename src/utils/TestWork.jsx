import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const TestWork = () => {
    const [visitCounts, setVisitCounts] = useState([]);

    const loadVisitCounts = async () => {
        const response = await fetch('http://localhost:3000/increment-visit', { method: 'POST' });
        const data = await response.json();
        if (data.success) {
            const countsResponse = await fetch('http://localhost:3000/get-visit-counts');
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