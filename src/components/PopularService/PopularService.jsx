import React from 'react';
import { Link } from 'react-router-dom';

const PopularService = ({ service }) => {
  const { name, photo, price, area, description, providerImage, providerName } =
    service;
  return (
    <div className="card bg-base-100 shadow-xl ">
      <figure>
        <img className="w-full h-52" src={photo} alt="Shoes" />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title">{name}</h2>
        <p>{description.slice(0, 100)}...</p>
        <p>Price: {price} BDT</p>
        <div className="flex items-center gap-2">
          <div>
            <img
              className="h-12 w-12 rounded-full "
              src={providerImage}
              alt=""
            />
          </div>
          <div>
            <p>{providerName}</p>
          </div>
        </div>
        <div className="card-actions ">
          <Link
            to={`/serviceDetails/${service._id}`}
            className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-1 px-3 text-center text-white text-sm"
          >
            View Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularService;
