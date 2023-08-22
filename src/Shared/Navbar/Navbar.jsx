import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <h1>nav</h1>
            <Link to="/more">More</Link>
        </div>
    );
};

export default Navbar;