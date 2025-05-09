import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const AllServices = () => {
  const allServicesData = useLoaderData();
  const [search, setSearch] = useState('');
  const { theme } = useContext(AuthContext);

  const filteredService = allServicesData
    .filter(service =>
      service.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => b.price - a.price);

  return (
    <div className="my-20 px-4 container mx-auto">
      <Helmet>
        <title> Service-Sharing | All Services</title>
      </Helmet>
      <h2 className="text-center text-3xl font-bold ">
        Explore Our Premium Services
      </h2>
      <label className="input input-bordered flex items-center gap-2 mx-auto md:w-[400px] mt-8">
        <input
          type="text"
          className="grow text-black"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-14 ">
        {filteredService.map(allService => (
          <div
            key={allService._id}
            className={`card bg-base-100  bg-transparent shadow-xl  ${
              theme === 'dark' ? 'border-[1px] border-gray-700' : ''
            }`}
          >
            <figure>
              <img className="w-full h-52" src={allService.photo} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl">{allService.name}</h2>
              <p className="text-base">Area: {allService.area}</p>
              <p className="text-base">Price: {allService.price}</p>
              <p className="text-xs">
                Description: {allService.description.slice(0, 100)}...
              </p>

              <div className="flex items-center gap-2">
                <div>
                  <img
                    className="h-12 w-12 rounded-full "
                    src={allService.providerImage}
                    alt=""
                  />
                </div>
                <div>
                  <p>{allService.providerName}</p>
                </div>
              </div>
              <div className="card-actions ">
                <Link
                  to={`/serviceDetails/${allService._id}`}
                  className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-1 px-3 text-center text-white text-sm"
                >
                  View Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
