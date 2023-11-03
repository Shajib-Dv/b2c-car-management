import React from 'react';
import Loader from '../../../../../../Shared/components/Loader';
import getOrderListAdmin from '../../../../../../utils/getOrderListAdmin';
import { useState } from 'react';
import { useEffect } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{` ${value} Items`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};

const CartOrders = () => {
    const { orderList } = getOrderListAdmin()
    const [cartData, setCartData] = useState([]);
    const [loading, setLoading] = useState(true);

    let orderTotalItemCount = 0;
    orderList.forEach(order => {
        orderTotalItemCount += order.order.length;
    });
    //console.log(orderTotalItemCount);
    useEffect(() => {

        fetch('https://b2c-car-management-server-p6jwvedmy-shajib-dv.vercel.app/my_carts')
            .then((response) => response.json())
            .then((data) => {
                setCartData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    //console.log(cartData)

    const [activeIndex, setActiveIndex] = useState(0);

    const data = [
        { name: 'Ordered', value: orderTotalItemCount },
        { name: 'In Cart', value: cartData.length },
    ];

    const onPieEnter = (_, index) => {
        setActiveIndex(index);
    };
    return (
        <div className='w-1/2'>
            <h1 className='text-center font-bold text-green-600'>Cart & Order Items</h1>
            {loading && <Loader />}
            <PieChart width={580} height={400}>
                <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="green"
                    dataKey="value"
                    onMouseEnter={onPieEnter}
                />
            </PieChart>
        </div>
    );
};

export default CartOrders;