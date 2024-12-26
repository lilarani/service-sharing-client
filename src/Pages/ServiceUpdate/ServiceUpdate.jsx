import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ServiceUpdate = () => {
  const data = useLoaderData();
  const { _id, name, photo, price, area, description } = data;

  const handleUpdateService = e => {
    e.preventDefault();

    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const price = form.price.value;
    const area = form.area.value;
    const description = form.description.value;
    e.target.reset();

    const updateService = {
      _id,
      name,
      photo,
      price,
      area,
      description,
    };

    axios
      .put(`https://service-sharing.vercel.app/services/${_id}`, updateService)
      .then(data => {
        if (data.data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Service Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
      });
  };

  return (
    <div>
      <div className="lg:w-3/4 mx-auto">
        <div className="text-center p-10">
          <h1 className="text-3xl font-bold">Update a Service!</h1>
          <p>
            The 'Update a Service' page allows users to modify their existing
            services by updating details such as the service name, price, area,
            description, and image URL. This ensures users can keep their
            service information accurate and up-to-date, providing flexibility
            and better management of their offerings.
          </p>
        </div>
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <form onSubmit={handleUpdateService} className="card-body">
            {/* form first row */}
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Image URL of the Service </span>
                </label>
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  placeholder="Image URL of the Service "
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Service Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Service Name"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            {/* form second row */}
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  placeholder="Price"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Service Area</span>
                </label>
                <input
                  type="text"
                  name="area"
                  defaultValue={area}
                  placeholder="Service Area"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            {/* form third row */}
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  name="description"
                  defaultValue={description}
                  placeholder="Description"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="form-control mt-6">
              <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-1 px-3 text-center text-white text-sm">
                Update Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceUpdate;
