import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 p-4">
      <Link to={`/product/${props.id}`} onClick={() => window.scrollTo(0, 0)}>
        <img className="w-full h-48 object-cover" src={props.image} alt={props.name} />
      </Link>
      <p className="py-2 text-lg font-semibold">{props.name}</p>
      <div className="flex gap-4">
        <div className="text-gray-800 font-semibold text-lg">₹{props.new_price}</div>
        {props.old_price && (
          <div className="text-gray-500 font-semibold text-lg line-through">₹{props.old_price}</div>
        )}
      </div>
    </div>
  );
};

export default Item;
