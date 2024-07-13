import React from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";

const AddProduct = () => {
  return (
    <div className='p-4 mx-auto w-[500px]  bg-gray-700 text-white shadow-lg rounded-lg'>
        <div className="mb-4">
            <p className="mb-2 text-lg font-semibold">Product Title</p>
            <input type="text" placeholder="Type here" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
        </div>
        <div className="mb-4">
            <p className="mb-2 text-lg font-semibold">Price</p>
            <input type="text" name="old_price" placeholder="Type here" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
        </div>
        <div className="mb-4">
            <p className="mb-2 text-lg font-semibold">Offer Price</p>
            <input type="text" name="new_price" placeholder="Type here" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
        </div>
        <div className="mb-4">
            <p className="mb-2 text-lg font-semibold">Product Category</p>
            <select className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600' name="category">
                <option value="mobiles">Mobiles</option>
                <option value="laptops">Laptops</option>
                <option value="cameras">Cameras</option>
            </select>
        </div>
        <div className="mb-4">
            <label htmlFor="file-input" className="flex items-center justify-center p-4 bg-green-600 text-white rounded-lg cursor-pointer hover:bg-green-700 transition-colors duration-300">
                <FaCloudUploadAlt className="mr-2" />
                Upload Image
            </label>
            <input type="file" name="image" id="file-input" hidden />
        </div>
        <button className="w-full p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300">Add</button>
    </div>
  )
}

export default AddProduct;
