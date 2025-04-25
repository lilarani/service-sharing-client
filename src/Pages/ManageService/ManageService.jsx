import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageService = ({ service }) => {
  const { _id, name, area, photo, description, price } = service;

  const handleDelete = _id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        axios
          .delete(`https://service-sharing.vercel.app/services/${_id}`)
          .then(data => {
            if (data.deleteCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
            }
          });
      }
    });
  };

  return (
    <div className="mt-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <img
            className="w-full h-[300px] border-2 border-gray-600"
            src={photo}
            alt=""
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold ">{name} </h3>
          <p className="font-semibold text-base">Area: {area} </p>
          <p className="font-bold text-base">
            Price: <span className="font-semibold">{price} BDT</span>
          </p>
          <p className="font-bold text-base text-justify">
            <span className="font-semibold text-xs">
              Description: {description}
            </span>
          </p>
        </div>
        <div className="space-x-3 ml-20">
          <Link
            onClick={() => handleDelete(_id)}
            className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-1 px-4 text-center text-white text-base "
          >
            Delete
          </Link>
          <Link
            to={`/serviceUpdate/${_id}`}
            className="border-2 border-gradient-to-r from-violet-500 to-fuchsia-500 py-1 px-4 text-center text-base hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 hover:text-white"
          >
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ManageService;
