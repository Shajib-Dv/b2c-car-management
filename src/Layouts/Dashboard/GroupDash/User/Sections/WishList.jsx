import React from 'react';
import { MdOutlinePlaylistAddCheck, MdDeleteOutline } from 'react-icons/md';

const WishList = () => {
    return (
        <div className='mt-10 md:mt-[200px] w-full'>
            <h1 className='text-2xl font-bold mb-5 flex justify-center items-center gap-2'><span className='text-green-600 text-3xl'><MdOutlinePlaylistAddCheck /></span>My Wish List</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}

                    <tbody>
                        {/* row 1 */}
                        <tr>

                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                
                            </td>
                            <td><button className="btn btn-ghost btn-xs">details</button></td>
                            <th>
                                <button className="btn btn-ghost btn-xs text-xl"><MdDeleteOutline/></button>
                            </th>
                        </tr>
                        {/* row 2 */}
                        <tr>

                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Brice Swyre</div>
                                        <div className="text-sm opacity-50">China</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Carroll Group
                            </td>
                            <td><button className="btn btn-ghost btn-xs">details</button></td>
                            <th>
                                <button className="btn btn-ghost btn-xs text-xl"><MdDeleteOutline/></button>
                            </th>
                        </tr>
                        {/* row 3 */}
                        <tr>

                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Marjy Ferencz</div>
                                        <div className="text-sm opacity-50">Russia</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Rowe-Schoen
                            </td>
                            <td><button className="btn btn-ghost btn-xs">details</button></td>
                            <th>
                                <button className="btn btn-ghost btn-xs text-xl"><MdDeleteOutline/></button>
                            </th>
                        </tr>
                        {/* row 4 */}
                        <tr>

                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Yancy Tear</div>
                                        <div className="text-sm opacity-50">Brazil</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Wyman-Ledner
                            </td>
                            <td><button className="btn btn-ghost btn-xs">details</button></td>
                            <th>
                                <button className="btn btn-ghost btn-xs text-xl"><MdDeleteOutline/></button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WishList;