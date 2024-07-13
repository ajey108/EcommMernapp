import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdAddCircle } from "react-icons/io";
import { MdViewList } from "react-icons/md";


const Sidebar = () => {
    return (
        <div className="">
            <Link to={'/addproduct'}>
                <div className="">
                    <IoMdAddCircle />
                    <p>Add Product</p>
                </div>
            </Link>

            <Link to={'/listproduct'}>
                <div className="">
                    <MdViewList />
                    <p>ProductList</p>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar