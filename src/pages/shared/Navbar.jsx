import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = <>
        <NavLink>Home</NavLink>
        <NavLink>Services</NavLink>
        <NavLink>Login</NavLink>
        {/* Dashboard dropdown */}
        <div className="dropdown">
            <NavLink tabIndex={0} className="nav-link">Dashboard</NavLink>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
                <li><NavLink>Add Service</NavLink></li>
                <li><NavLink>Manage Service</NavLink></li>
                <li><NavLink>Booked Services</NavLink></li>
                <li><NavLink>Service-To-Do</NavLink></li>
            </ul>
        </div>
    </>;

    return (
        <div className="navbar bg-base-100">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">NEXT DOOR SERVICE</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <div className='flex gap-16'>
                        {links}
                    </div>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/register'><button className='btn'>Register</button></Link>
            </div>
        </div>
    );
};

export default Navbar;
