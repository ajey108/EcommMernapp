import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                <div>
                    <h3 className="text-xl font-semibold mb-4">Products</h3>
                    <ul>
                        <li className="mb-2"><a href="/laptops" className="hover:underline">Laptops</a></li>
                        <li className="mb-2"><a href="/mobiles" className="hover:underline">Mobiles</a></li>
                        <li className="mb-2"><a href="/cameras" className="hover:underline">Cameras</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Company</h3>
                    <ul>
                        <li className="mb-2"><a href="/about" className="hover:underline">About Us</a></li>
                        <li className="mb-2"><a href="/contact" className="hover:underline">Contact Us</a></li>
                        <li className="mb-2"><a href="/careers" className="hover:underline">Careers</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF size={24} />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={24} />
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={24} />
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn size={24} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-8 text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
