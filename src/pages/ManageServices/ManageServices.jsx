import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import bookedImg from "../../assets/images/bookedService.jpg"
import { GrUpdate } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";

const ManageServices = () => {
    const [postedService, setPostedService] = useState([]);
    const {user} = useAuth();

    

    useEffect(() =>{
        fetch(`http://localhost:5000/services?email=${user.email}`)
        .then(res => res.json())
        .then(data => setPostedService(data))
    }, [user.email])
    return (
            <div className="bg-cover bg-center bg-fixed text-center py-20 flex p-6 justify-center items-center lg:h-auto" style={{backgroundImage : `url(${bookedImg})`}}>
                         <div className='container mx-auto text-black bg-slate-600 p-20 z-0 lg:w-1/2 backdrop-filter backdrop-blur-lg bg-opacity-20'>
                         <h2 className="text-3xl">Posted Services : {postedService.length}</h2>
                         <div className="overflow-x-auto">
                        <table className="table">
                        {/* head */}
                        <thead>
                        <tr>
                        <th>No.</th>
                        <th>Service Name</th>
                        <th>Service Type</th>
                        <th>Provider Email</th>
                        {/* <th>Update Status</th> */}
                        </tr>
                        </thead>
                        <tbody>
                        {/* row */}
                        {
                        postedService.map((postedService, index) => <tr key={postedService._id}>
                        <th>{index + 1}</th>
                        <td>{postedService.service_name}</td>
                        <td>{postedService.service_type}</td>
                        <td>{postedService.service_provider_email}</td>
                        <div className='flex justify-between m-2 gap-x-2'>
                            <button className='btn'><GrUpdate className='bg-none'/></button>
                            <button className='btn'><AiFillDelete className='bg-none'/></button>
                        </div>
                        </tr>)
                        }
                        </tbody>
                    </table>
                 </div>
                </div>
            </div>
    );
};

export default ManageServices;