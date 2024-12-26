import React from 'react';
import imgError from '../../assets/images/404.jpg'
import { Link } from 'react-router-dom';
const ErrorElement = () => {
    return (
        <div className='flex justify-center flex-col items-center'>
            <div>
                <img className='h-[800px]' src={imgError} alt="" />
            </div>
            <Link to='/'><button className='btn btn-info'>Go Home</button></Link>
        </div>
    );
};

export default ErrorElement;