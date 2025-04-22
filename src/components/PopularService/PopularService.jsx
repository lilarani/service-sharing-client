import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const PopularService = ({ service }) => {
  const { theme } = useContext(AuthContext);
  const { name, photo, price, area, description, providerImage, providerName } =
    service;

  return (
    <div
      className={`card bg-base-100 bg-transparent shadow-xl  ${
        theme === 'dark' ? 'border-[1px] border-gray-700 ' : ''
      }`}
    >
      <figure>
        <img className="w-full h-52 px-6" src={photo} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-base">{name}</h2>
        <p className="text-base">Price: {price} BDT</p>
        <p className="text-xs">Description: {description.slice(0, 100)}...</p>
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
