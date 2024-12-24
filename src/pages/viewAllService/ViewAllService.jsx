
import React, { useEffect, useState } from 'react';
import AllServicesCard from '../AllServicesCard/AllServicesCard';
const ViewAllService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);
    return (
        <div className='w-11/12 mx-auto border'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 md:gap-y-10 place-items-center'>
            {
                services.map(service => 
                <AllServicesCard 
                    key={service._id}
                    service={service}
                />)
            }
        </div>
    </div>
    );
};

export default ViewAllService;