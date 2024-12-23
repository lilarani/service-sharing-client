import { useLoaderData } from 'react-router-dom';

const AllServices = () => {
  const allServicesData = useLoaderData();
  const { photo, name, area, price, description } = allServicesData;

  return (
    <div>
      {allServicesData.map(allService => (
        <div key={allService._id} className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img className="w-full" src={allService.photo} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{allService.name}</h2>
            <p>Area: {allService.area}</p>
            <div className="card-actions ">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllServices;
