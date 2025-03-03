
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import bookedImg from "../../assets/images/bookedService.jpg";

const BookedServices = () => {
    const { user } = useAuth();
    const [bookedService, setBookedService] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/single-booking?email=${user.email}`)
            .then(res => res.json())
            .then(data => setBookedService(data));
    }, [user.email]);

    return (
        <div
            className="bg-cover bg-center bg-fixed text-center py-20 flex p-6 justify-center items-center lg:h-[auto]"
            style={{ backgroundImage: `url(${bookedImg})` }}
        >
            <div className="container mx-auto text-black bg-slate-600 p-20 z-0 lg:w-1/2 backdrop-filter backdrop-blur-lg bg-opacity-20 ">
                <h2 className="text-3xl">Booked Services : {bookedService.length}</h2>
                {bookedService.length === 0 ? (
                    <div className="mt-5 text-lg text-white">
                        <p>You have no booked services at the moment.</p>
                    </div>
                ) : (
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
                                {bookedService.map((myService, index) => (
                                    <tr key={myService._id}>
                                        <th>{index + 1}</th>
                                        <td>{myService.serviceName}</td>
                                        <td>{myService.serviceDate}</td>
                                        <td>{myService.price}</td>
                                        <td>
                                            <div className="btn">{myService.service_status}</div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookedServices;

