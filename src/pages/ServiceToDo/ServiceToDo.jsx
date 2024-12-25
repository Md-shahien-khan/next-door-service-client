import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import bookedImg from "../../assets/images/bookedService.jpg"
import Swal from 'sweetalert2';

const ServiceToDo = () => {
    const {user} = useAuth();
    const [bookedService, setBookedService] = useState([]);

    useEffect(() =>{
        fetch(`http://localhost:5000/single-booking?email=${user.email}`)
            .then(res => res.json())
            .then(data =>setBookedService(data))
    }, [user.email]);


    // handle update
    const handleStatusUpdate = (e, _id) =>{
        console.log(e.target.value, _id);
        const data ={
            service_status : e.target.value
        }
        fetch(`http://localhost:5000/single-booking/${_id}`, {
            method : 'PATCH',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount){
                    Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Status has been updated",
                    showConfirmButton: false,
                    timer: 1500
                    });                    
                }
            })
    }
    return (
        <div className="bg-cover bg-center bg-fixed text-center py-20 flex p-6 justify-center items-center lg:h-[80vh]" style={{backgroundImage : `url(${bookedImg})`}}>
                     <div className='container mx-auto text-black bg-slate-600 p-20 z-0 lg:w-1/2 backdrop-filter backdrop-blur-lg bg-opacity-20'>
                     <h2 className="text-3xl">Booked Services : {bookedService.length}</h2>
                     <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                            <tr>
                                <th>No.</th>
                                <th>Service Name</th>
                                <th>Date</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* row */}
                            {
                                bookedService.map((myService, index) => <tr key={myService._id}>
                                    <th>{index + 1}</th>
                                    <td>{myService.serviceName}</td>
                                    <td>{myService.serviceDate}</td>
                                    <td>{myService.price}</td>
                                    <td>{myService.service_status}</td>
                                    <td>
                                    <td>
                                        <select onChange={(e) => handleStatusUpdate(e, myService._id)} defaultValue={myService?.service_status} className="select select-bordered select-xs w-full max-w-xs">
                                            <option disabled>Change Status</option>
                                            <option>Pending</option>
                                            <option>Working</option>
                                            <option>Completed</option>
                                        </select>
                                        </td> 
                                    </td>
                                {/* <td>
                                <select className="select select-bordered select-xs w-full max-w-xs">
                                    <option disabled>Change Status</option>
                                    <option>Working</option>
                                    <option>Completed</option>
                                </select>
                                </td>                            */}
                                </tr>)
                            }
                            </tbody>
                        </table>
                        </div>
                     </div>
                </div>
    );
};

export default ServiceToDo;