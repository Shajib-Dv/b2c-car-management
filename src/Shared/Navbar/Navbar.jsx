import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className='flex gap-5'>
                <Link to="/newCar">NEW CAR</Link>
                <Link to="/usedCar">USED CAR</Link>
                <Link to="/sellCar">SELL CAR</Link>
                <Link to="/compareCar">COMPARE CAR</Link>
                <Link to="/newsAndReview">NEWS AND CAR</Link>
                <Link to="/more">MORE CAR</Link>
            </div>
        </div>
    );
};

export default Navbar;