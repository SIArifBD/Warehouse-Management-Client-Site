import React from 'react';
import notFound from '../../../images/notFound.png';

const NotFound = () => {
    return (
        <div>
            <img className='w-100 h-100' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;