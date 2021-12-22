import React from 'react';
import { Link } from 'react-router-dom';

const pageB = () => {
    return (
        <div>
            <h2>hello pageB</h2>
            <Link to="/">Navigate to Login</Link>
        </div>
    )
};

export default pageB;