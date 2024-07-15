import React, { useState } from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";

const AddProduct = () => {
    const [image, setImage] = useState(null);
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "women",
        new_price: "",
        old_price: ""
    });

    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    }

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }

    const Add_Product = async () => {
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        // formdata
        let formdata = new FormData();
        formdata.append('product', image);

        await fetch('http://localhost:4000/upload', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formdata,
        }).then((resp) => resp.json()).then((data) => { responseData = data });

        if (responseData.success) {
            product.image = responseData.image_url;
            console.log(product);

            // Adding the product details to the database
            await fetch('http://localhost:4000/api/products/addproduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(product),
            }).then((resp) => resp.json()).then((data) => {
                if (data.success) {
                    console.log('Product added successfully:', data);
                    // Reset form
                    setProductDetails({
                        name: "",
                        image: "",
                        category: "laptops",
                        new_price: "",
                        old_price: ""
                    });
                    setImage(null);
                } else {
                    console.error('Failed to add product:', data);
                }
            }).catch((error) => {
                console.error('Error:', error);
            });
        } else {
            console.error('Failed to upload image:', responseData);
        }
    }

    return (
        <div className='p-6 mx-auto w-[60%] bg-gray-800 text-white shadow-lg rounded-lg'>
            <h2 className="text-2xl font-semibold mb-4 text-center">Add New Product</h2>
            <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">Product Title</label>
                <input 
                    value={productDetails.name} 
                    onChange={changeHandler} 
                    type="text" 
                    name="name"
                    placeholder="Enter product title" 
                    className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white" 
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">Price</label>
                <input 
                    value={productDetails.old_price} 
                    onChange={changeHandler} 
                    type="text" 
                    name="old_price"
                    placeholder="Enter price" 
                    className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white" 
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">Offer Price</label>
                <input 
                    value={productDetails.new_price} 
                    onChange={changeHandler} 
                    type="text" 
                    name="new_price"
                    placeholder="Enter offer price" 
                    className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white" 
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">Product Category</label>
                <select 
                    value={productDetails.category} 
                    onChange={changeHandler} 
                    name="category"
                    className='w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white'
                >
                    <option value="mobiles">Mobiles</option>
                    <option value="laptops">Laptops</option>
                    <option value="cameras">Cameras</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="file-input" className="flex items-center justify-center p-4 bg-green-600 text-white rounded-lg cursor-pointer hover:bg-green-700 transition-colors duration-300">
                    {image ? <img src={URL.createObjectURL(image)} alt="preview" className="h-10 w-10 object-cover rounded-full" /> : <FaCloudUploadAlt className="mr-2" />}
                    {image ? 'Change Image' : 'Upload Image'}
                </label>
                <input onChange={imageHandler} type="file" name="image" id="file-input" hidden />
            </div>
            <button 
                onClick={Add_Product} 
                className="w-full p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
            >
                Add Product
            </button>
        </div>
    )
}

export default AddProduct;
