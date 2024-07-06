import {React,useContext} from 'react';
import star_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';
import { ShopContext} from '../Context/ShopContext';



const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className="prod-display flex flex-col md:flex-row p-4">
      <div className="left flex flex-col md:w-1/2">
        <div className="prod-dis-img-list grid grid-cols-2 gap-2 mb-4">
          <img src={product.image} alt="" className="w-full h-24 object-cover" />
          <img src={product.image} alt="" className="w-full h-24 object-cover" />
          <img src={product.image} alt="" className="w-full h-24 object-cover" />
          <img src={product.image} alt="" className="w-full h-24 object-cover" />
        </div>
        <div className="prod-dis-img mb-4">
          <img src={product.image} alt="" className="w-full h-64 object-cover" />
        </div>
      </div>
      <div className="right md:w-1/2 md:ml-4">
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <div className="prod-right-star flex items-center mb-2">
          <img src={star_icon} alt="" className="w-5 h-5 mr-1" />
          <img src={star_icon} alt="" className="w-5 h-5 mr-1" />
          <img src={star_icon} alt="" className="w-5 h-5 mr-1" />
          <img src={star_icon} alt="" className="w-5 h-5 mr-1" />
          <img src={star_dull_icon} alt="" className="w-5 h-5 mr-1" />
          <p className="ml-2 text-gray-600">{122}</p>
        </div>
        <div className="prod-right-prices flex items-baseline mb-2">
          <div className="old-price text-gray-500 line-through mr-2">${product.old_price}</div>
          <div className="new-price text-red-500 font-bold">${product.new_price}</div>
        </div>
        <div className="prod-desc mb-4">
          Best smartphone with amazing specs and powerful GPU that can handle any task at ease.
        </div>
        <div className="prod-right-size mb-4">
          <h2 className="text-xl font-semibold mb-2">Select Variant</h2>
          <div className="pro-display-right-sizes grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
            <div className="border p-2 rounded text-center">3 GB 64 GB</div>
            <div className="border p-2 rounded text-center">6 GB 128 GB</div>
            <div className="border p-2 rounded text-center">6 GB 256 GB</div>
          </div>
          <button onClick={()=>{addToCart(product.id)}} className="w-[70px] bg-gray-400 text-white h-[30px] rounded-lg mb-4">Add to cart</button>
          <p className="text-gray-600"><span className="font-semibold">Category:</span> Mobiles, iPhone, Pixel</p>
          <p className="text-gray-600"><span className="font-semibold">Category:</span> Laptops, Macbook, Rog</p>
          <p className="text-gray-600"><span className="font-semibold">Category:</span> Cameras, Sony, Go Pro</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
