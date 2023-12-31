import React from 'react';
import { BiDetail } from 'react-icons/bi';

const YourTransactions = () => {
    return (
        <div className='mt-10 md:mt-[200px] w-full'>
            <h1 className='text-2xl font-bold mb-5 flex justify-center items-center gap-2'><span className='text-green-600 text-3xl'><BiDetail /></span>Your Transactions</h1>
            <div className="overflow-x-auto md:w-full w-[300px]">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Details</th>
                            <th>$</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>599.00</td>
                            <td><button className='btn btn-ghost btn-xs'>View</button></td>
                        </tr>
                        {/* row 2 */}
                        <tr className="hover">
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>499.00</td>
                            <td><button className='btn btn-ghost btn-xs'>View</button></td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>1599.00</td>
                            <td><button className='btn btn-ghost btn-xs'>View</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default YourTransactions;