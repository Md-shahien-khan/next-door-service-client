// import { useContext } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import AuthContext from '../../context/AuthContext/AuthContext';


// const Navbar = () => {
//     // getting User from authProvider
//     const {user, SignOutUser} = useContext(AuthContext);

//     // signOut Functionality
//     const handleSignOut = () =>{
//         SignOutUser()
//             .then(() => {
//                 console.log('successful Sign Out');
//             })
//             .catch(error => {
//                 console.log('Sign Out Unsuccessful')
//             })
//     };



//     const links = 
//     (
//         <>
//             <li><NavLink to='/'>Home</NavLink></li>
//             <li><NavLink to='/viewAllService'>Services</NavLink></li>
//             {user ? (
//                 <>
//                     {/* Dashboard dropdown */}
//                     <div className="dropdown">
//                     <NavLink tabIndex={0} className="nav-link">Dashboard</NavLink>
//                     <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2">
//                         <li><NavLink to='/addService'>Add Service</NavLink></li>
//                         <li><NavLink to='/manageServices'>Manage Service</NavLink></li>
//                         <li><NavLink to='/bookedServices'>Booked Services</NavLink></li>
//                         <li><NavLink to='/serviceToDo'>Service-To-Do</NavLink></li>
//                     </ul>
//         </div> 
//                 </>
//             ) : (
//                 <>
//                     <li><NavLink to='/signin'>Sign In</NavLink></li>
//                 </>
//             )}
//         </>
//     );

//     return (
//         <div className="navbar bg-base-100 px-6">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-5 w-5"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor">
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M4 6h16M4 12h8m-8 6h16" />
//                         </svg>
//                     </div>
//                     <ul
//                         tabIndex={0}
//                         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//                         {links}
//                     </ul>
//                 </div>
//                 <a className="btn btn-ghost text-xl">NEXT DOOR SERVICE</a>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">
//                     <div className='flex items-center gap-7'>
//                         {links}
//                     </div>
//                 </ul>
//             </div>
//             <div className="navbar-end">
//                 {
//                     user ? <>
//                     <Link to='/register'><button onClick={handleSignOut} className='btn'>Sign out</button></Link>
//                     </> : 
//                     <>
//                     <Link to='/register'><button className='btn'>Register</button></Link>
//                     </>
//                 }
//             </div>
//         </div>
//     );
// };

// export default Navbar;



import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import { FaMoon, FaSun } from 'react-icons/fa'; 
import logo from '../../assets/images/logo.jpg'

const Navbar = () => {
    const { user, SignOutUser } = useContext(AuthContext);

    // Handle dark mode toggle
    const handleThemeToggle = () => {
        const currentMode = document.body.classList.contains('dark') ? 'light' : 'dark';
        document.body.classList.toggle('dark', currentMode === 'dark');
    };

    // SignOut Functionality
    const handleSignOut = () => {
        SignOutUser()
            .then(() => {
                console.log('successful Sign Out');
            })
            .catch(error => {
                console.log('Sign Out Unsuccessful');
            });
    };

    // Links for Navbar
    const links = (
        <>
            <li><NavLink to='/' className="hover:text-yellow-500 transition duration-300">Home</NavLink></li>
            <li><NavLink to='/viewAllService' className="hover:text-yellow-500 transition duration-300">Services</NavLink></li>
            {user ? (
                <>
                    {/* Dashboard dropdown */}
                    <div className="dropdown">
                        <NavLink tabIndex={0} className="nav-link hover:text-yellow-500 transition duration-300">Dashboard</NavLink>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-gray-800 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow dark:bg-gray-700">
                            <li><NavLink to='/addService' className="hover:text-yellow-500">Add Service</NavLink></li>
                            <li><NavLink to='/manageServices' className="hover:text-yellow-500">Manage Service</NavLink></li>
                            <li><NavLink to='/bookedServices' className="hover:text-yellow-500">Booked Services</NavLink></li>
                            <li><NavLink to='/serviceToDo' className="hover:text-yellow-500">Service-To-Do</NavLink></li>
                        </ul>
                    </div>
                </>
            ) : (
                <li><NavLink to='/signin' className="hover:text-yellow-500 transition duration-300">Sign In</NavLink></li>
            )}
        </>
    );

    return (
        <div className="font-poppins navbar bg-gradient-to-r from-blue-500 to-purple-600 p-6 dark:from-gray-800 dark:to-gray-900">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-gray-800 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow dark:bg-gray-700">
                        {links}
                    </ul>
                </div>
                <div className='flex items-center'>
                <Link to='/'><img className='w-10 hidden md:block' src={logo} alt="" /></Link>
                <Link to ='/'>
                <button className="btn btn-ghost text-sm md:text-xl text-white hover:text-yellow-500 transition duration-300">NEXT DOOR SERVICE</button>
                </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <div className='flex items-center gap-7'>
                        {links}
                    </div>
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-4">
                {user ? (
                    <>
                        {/* User Profile Image and Sign out */}
                        <div className="flex items-center gap-4 ms-24 md:ms-0">
                            {/* Display user's profile image */}
                            {user?.photoURL && (
                                <img
                                    src={user?.photoURL}
                                    alt="User Profile"
                                    className="w-10 h-10 rounded-full object-cover border-2 border-white"
                                />
                            )}
                            <Link to='/register'>
                                <button onClick={handleSignOut} className="btn text-white bg-red-500 hover:bg-red-600 transition duration-300">Sign out</button>
                            </Link>
                        </div>
                    </>
                ) : (
                    <>
                        <Link to='/register'>
                            <button className="btn text-white bg-blue-600 hover:bg-blue-700 transition duration-300 ">Register</button>
                        </Link>
                    </>
                )}
                {/* Theme Toggle Button */}
                <button onClick={handleThemeToggle} className="btn btn-ghost text-white ml-4">
                    {document.body.classList.contains('dark') ? <FaSun /> : <FaMoon />} {/* Display moon or sun based on mode */}
                </button>
            </div>
        </div>
    );
};

export default Navbar;


