// import React, { useEffect, useState } from 'react';
// import AllServicesCard from '../AllServicesCard/AllServicesCard';

// const AllServices = () => {
//     const [services, setServices] = useState([]);

//     useEffect(() =>{
//         fetch('http://localhost:5000/services')
//         .then(res => res.json())
//         .then(data => setServices(data))
//     },[])
//     return (
//         <div className='w-11/12 mx-auto border'>
//             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 md:gap-y-10 place-items-center'>
//                 {
//                     services.map(service => 
//                     <AllServicesCard 
//                     key={service._id}
//                     service={service}>
//                     </AllServicesCard>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default AllServices;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import AllServicesCard from '../AllServicesCard/AllServicesCard';

const AllServices = () => {
    const [services, setServices] = useState([]); 
    const navigate = useNavigate(); 

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data)); 
    }, []);

    const navigateToAllServices = () => {
        navigate('/viewAllService'); 
    };

    return (
        <div className='w-11/12 mx-auto border'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 md:gap-y-10 place-items-center'>
                {
                    services.slice(0, 10).map(service => 
                    <AllServicesCard 
                        key={service._id}
                        service={service}
                    />)
                }
            </div>

            {/* Button to navigate to the "All Services" page */}
            <div className="mt-4 text-center">
                <button 
                    onClick={navigateToAllServices} 
                    className="bg-green-500 text-white px-4 py-2 rounded">
                    Go to All Services Page
                </button>
            </div>
        </div>
    );
};

export default AllServices;


