import logo from '../../assets/images/logo.jpg'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="footer bg-gradient-to-r from-blue-500 to-purple-600 text-base-content p-10">
            <aside>
                <img className='w-20' src={logo} alt="" />
                <p className='text-sm md:text-xl font-bold text-white'>
                Next Door Service Ltd.
                <br />
                Providing reliable home service since 2020
                </p>
            </aside>
            <nav>
                <h6 className="footer-title text-sm md:text-xl font-bold text-white">Services</h6>
                <a className="link link-hover text-white">Branding</a>
                <a className="link link-hover text-white">Design</a>
                <a className="link link-hover text-white">Marketing</a>
                <a className="link link-hover text-white">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title text-sm md:text-xl font-bold text-white">Company</h6>
                <a className="link link-hover text-white">About us</a>
                <a className="link link-hover text-white">Contact</a>
                <a className="link link-hover text-white">Jobs</a>
                <a className="link link-hover text-white">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title text-sm md:text-xl font-bold text-white">Legal</h6>
                <a className="link link-hover text-white">Terms of use</a>
                <a className="link link-hover text-white">Privacy policy</a>
                <div className="flex justify-center gap-6 mt-6">
                 <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon hover:bg-blue-600">
                     <FaFacebookF size={24} className="text-white" />
                </a>
                 <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon hover:bg-gradient-to-r from-pink-500 to-purple-600">
                    <FaInstagram size={24} className="text-white" />
                 </a>
                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon hover:bg-blue-400">
                     <FaTwitter size={24} className="text-white" />
                 </a>
                 <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon hover:bg-red-600">
                     <FaYoutube size={24} className="text-white" />
                 </a>
             </div>
            </nav>
        </footer>
    );
};

export default Footer;







// import React from 'react';
// import logo from '../../assets/images/logo.jpg';
// import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

// const Footer = () => {
//     return (
//         <footer className="footer bg-gray-800 text-white p-10">
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//                 {/* Logo and Company Info */}
//                 <aside className="flex flex-col items-center md:items-start">
//                     <img className="w-24 mb-4" src={logo} alt="Company Logo" />
//                     <p className="text-center md:text-left">
//                         <strong>Next Door Service</strong>
//                         <br />
//                         Providing reliable services since 1992
//                     </p>
//                 </aside>

//                 {/* Services Section */}
//                 <nav>
//                     <h6 className="footer-title text-lg mb-2 font-semibold">Services</h6>
//                     <a className="link link-hover text-gray-400 hover:text-blue-500 mb-1">Branding</a>
//                     <a className="link link-hover text-gray-400 hover:text-blue-500 mb-1">Design</a>
//                     <a className="link link-hover text-gray-400 hover:text-blue-500 mb-1">Marketing</a>
//                     <a className="link link-hover text-gray-400 hover:text-blue-500 mb-1">Advertisement</a>
//                 </nav>

//                 {/* Company Section */}
//                 <nav>
//                     <h6 className="footer-title text-lg mb-2 font-semibold">Company</h6>
//                     <a className="link link-hover text-gray-400 hover:text-blue-500 mb-1">About us</a>
//                     <a className="link link-hover text-gray-400 hover:text-blue-500 mb-1">Contact</a>
//                     <a className="link link-hover text-gray-400 hover:text-blue-500 mb-1">Jobs</a>
//                     <a className="link link-hover text-gray-400 hover:text-blue-500 mb-1">Press kit</a>
//                 </nav>

//                 {/* Legal Section */}
//                 <nav>
//                     <h6 className="footer-title text-lg mb-2 font-semibold">Legal</h6>
//                     <a className="link link-hover text-gray-400 hover:text-blue-500 mb-1">Terms of use</a>
//                     <a className="link link-hover text-gray-400 hover:text-blue-500 mb-1">Privacy policy</a>
//                     <a className="link link-hover text-gray-400 hover:text-blue-500 mb-1">Cookie policy</a>
//                 </nav>
//             </div>

//             {/* Social Media Links */}
//             <div className="flex justify-center gap-6 mt-6">
//                 <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon hover:bg-blue-600">
//                     <FaFacebookF size={24} className="text-white" />
//                 </a>
//                 <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon hover:bg-gradient-to-r from-pink-500 to-purple-600">
//                     <FaInstagram size={24} className="text-white" />
//                 </a>
//                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon hover:bg-blue-400">
//                     <FaTwitter size={24} className="text-white" />
//                 </a>
//                 <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon hover:bg-red-600">
//                     <FaYoutube size={24} className="text-white" />
//                 </a>
//             </div>
//         </footer>
//     );
// };

// export default Footer;





