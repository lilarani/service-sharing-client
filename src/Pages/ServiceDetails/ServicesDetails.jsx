import { Link, useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
  const servicesData = useLoaderData();
  const { name, photo, area, description, price } = servicesData;

  return (
    <div className="my-24">
      <h2 className="text-center font-bold text-2xl">Details Service</h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 
      container mx-auto mt-16"
      >
        <div>
          <img
            className="w-full h-[500px] border-2 border-gray-600"
            src={photo}
            alt=""
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold mt-2">{name} </h3>
          <p className="font-semibold text-base">Area: {area} </p>

          <p className="font-bold text-base">
            Description:{' '}
            <span className="font-semibold">Description: {description}</span>
          </p>
          <p className="font-bold text-base">
            Price: <span className="font-semibold">{price} BDT</span>
          </p>

          <Link
            to={'/allServices'}
            className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-1 px-3 text-center text-white text-sm"
          >
            All Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
