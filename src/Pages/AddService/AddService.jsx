import axios from 'axios';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const AddService = () => {
  const { user } = useContext(AuthContext);

  const handleAddService = e => {
    e.preventDefault();

    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const price = form.price.value;
    const area = form.area.value;
    const description = form.description.value;
    let providerImage = user.photoURL;
    let providerName = user.displayName;
    let providerEmail = user.email;
    e.target.reset();

    const newService = {
      name,
      photo,
      price,
      area,
      description,
      providerImage,
      providerName,
      providerEmail,
    };

    axios.post(`http://localhost:5000/services`, newService).then(data => {
      if (data.data.insertedId) {
        Swal.fire({
          title: 'Success!',
          text: 'Service Added Successfully',
          icon: 'success',
          confirmButtonText: 'Cool',
        });
      }
    });
  };

  return (
    <div className="lg:w-3/4 mx-auto">
      <div className="text-center p-10">
        <h1 className="text-3xl font-bold">Add a Service!</h1>
        <p>
          The Add a Service page allows users to share their services by filling
          out a simple form with details like service name, price, area,
          description, and image URL. The service is added to the database and
          linked to the user’s profile. Users can manage their services later
          through the Manage Services page, ensuring control and flexibility.
        </p>
      </div>
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form onSubmit={handleAddService} className="card-body">
          {/* form first row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Image URL of the Service </span>
              </label>
              <input
                type="text"
                name="photo"
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
                placeholder="Description"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-1 px-3 text-center text-white text-sm">
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
