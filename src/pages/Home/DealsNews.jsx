import React from 'react';
import Marquee from 'react-fast-marquee';

const DealsNews = () => {
    return (
        <div className='mb-10'>
        <h2 className="text-center mb-8 lg:text-5xl md:text-4xl text-2xl font-semibold mt-4 md:mt-10">Deals</h2>
        <Marquee>
          <div>
          <span className="mr-12">🎉 New Year Sale! Get 20% Off All Home Repairs! 🎉</span>
        <span className="mr-12">🎉 New Year Sale! Get 10% Off Cleaning Services! 🎉</span>
        <span className="mr-12">🎉 New Year Sale! 25% Off Plumbing Services! 🎉</span>
        <span className="mr-12">🎉 New Year Sale! Free Electrical Inspection with Every Service! 🎉</span>
        <span className="mr-12">🎉 New Year Sale! 15% Off Home Renovations! 🎉</span>
          </div>
        </Marquee>
        </div>
    );
};

export default DealsNews;