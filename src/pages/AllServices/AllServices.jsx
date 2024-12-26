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
        <div className='w-11/12 mx-auto mt-10 lg:mt-36'>
            <h2 className='text-4xl text-center font-bold'>Our Services</h2>
            <p className='text-center'>We are always there for you</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-y-10 place-items-center mt-10 gap-y-5'>
                {
                    services.slice(0, 6).map(service => 
                    <AllServicesCard 
                        key={service._id}
                        service={service}
                    />)
                }
            </div>

            {/* Button to navigate to the "All Services" page */}
            <div className="mt-10 text-center">
                <button 
                    onClick={navigateToAllServices} 
                    className="btn bg-gradient-to-r from-blue-500 to-purple-600 dark:from-gray-700 dark:to-gray-800 hover:from-pink-500 hover:to-orange-500 text-white py-2 px-6 rounded-full text-lg hover:transition duration-300 ease-out mt-8 lg:mt-20">
                    Go to All Services Page
                </button>
            </div>
        </div>
    );
};

export default AllServices;


