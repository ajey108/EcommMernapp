import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdAddCircle } from "react-icons/io";
import { MdViewList } from "react-icons/md";

const Sidebar = () => {
    return (
        <div className="w-full sm:w-64 bg-gray-800 text-white h-full flex flex-col p-4">
            <Link to={'/addproduct'} className="flex items-center space-x-2 p-3 hover:bg-gray-700 rounded-lg transition-colors duration-200 ease-in-out">
                <IoMdAddCircle className="text-2xl" />
                <p className="text-lg">Add Product</p>
            </Link>

            <Link to={'/listproduct'} className="flex items-center space-x-2 p-3 hover:bg-gray-700 rounded-lg transition-colors duration-200 ease-in-out">
                <MdViewList className="text-2xl" />
                <p className="text-lg">Product List</p>
            </Link>
        </div>
    );
}

export default Sidebar;
