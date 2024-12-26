
import React, { useEffect, useState } from 'react';
// import AllServicesCard from '../AllServicesCard/AllServicesCard';
import ViewAllServiceCard from '../viewAllServiceCard/ViewAllServiceCard';
const ViewAllService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);
    return (
        <div className='w-11/12 mx-auto mb-10'>
            <h2 className='text-4xl font-bold text-center m-5'>All Our Services</h2>
            <p className='mb-6 lg:p-5 text-center'>At Next-Door-Service, we take the hassle out of home services by bringing top-quality services directly to your door. </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-y-10 place-items-center'>
            {
                services.map(service => 
                <ViewAllServiceCard 
                    key={service._id}
                    service={service}
                />)
            }
        </div>
    </div>
    );
};

export default ViewAllService;