import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';

const ServicesDetails = () => {
  const servicesData = useLoaderData();
  const {
    _id,
    name,
    photo,
    area,
    description,
    price,
    providerImage,
    providerName,
    providerEmail,
  } = servicesData;

  const { user } = useContext(AuthContext);

  const handleBookedNowButton = e => {
    e.preventDefault();
    const form = e.target;
    const date = form.date.value;
    const instruction = form.instruction.value;
    const CurrentUserEmail = user.email;
    const CurrentUserName = user.displayName;

    let bookedInformation = {
      servicesId: _id,
      servicesName: name,
      servicesImage: photo,
      currentUserEmail: user.email,
      currentUserName: user.displayName,
      takingDate: date,
      instructions: instruction,
      servicesPrice: price,
      providerEmail: providerEmail,
      providerName: providerName,
      providerImage: providerImage,
      serviceStatus: 'pending',
    };

    axios
      .post(`http://localhost:5000/bookedService`, bookedInformation)
      .then(data => {
        toast.success(`Service Booked Success`);
      });
  };

  return (
    <div className="my-24">
      <h2 className="text-center font-bold text-2xl">Details Service</h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 
      container mx-auto mt-16"
      >
        <div>
          <img
            className="w-full h-[400px] border-2 border-gray-600"
            src={photo}
            alt=""
          />
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="space-y-2 pr-6 ">
            <h3 className="text-xl font-bold mt-2">{name} </h3>

            <p className="font-bold text-base">
              Price: <span className="font-semibold">{price} BDT</span>
            </p>

            <p className="font-bold text-base">
              <span className="font-semibold">Description: {description}</span>
            </p>

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

            <div className="space-x-2 ">
              <button
                onClick={() =>
                  document.getElementById('my_modal_1').showModal()
                }
                className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-1 px-3 text-center text-white text-sm"
              >
                Book Now
              </button>

              <dialog id="my_modal_1" className="modal">
                <div className="modal-box space-y-3">
                  <form onSubmit={handleBookedNowButton} className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Service Taking Date</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Service Taking Date"
                        name="date"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Special instruction</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Special instruction"
                        name="instruction"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-1 px-3 text-center text-white text-sm  mt-4">
                      Purchase
                    </button>
                  </form>

                  <div className="modal-action text-center">
                    <button
                      onClick={() =>
                        document.getElementById('my_modal_1').close()
                      }
                      className="border-[1px] border-gray-700 py-1 px-3 text-center text-sm "
                    >
                      Close
                    </button>
                  </div>
                </div>
              </dialog>

              <Link
                to={'/allServices'}
                className="border-2 border-gradient-to-r from-violet-500 to-fuchsia-500 py-1 px-3 text-center text-sm hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 hover:text-white"
              >
                All Services
              </Link>
            </div>
          </div>
          <div className="space-x-2 border-l-2 p-4">
            <img className="w-16 h-16" src={providerImage} alt="" />
            <p className="font-semibold text-base">
              Name: <span className="font-medium">{providerName}</span>
            </p>
            <p className="font-medium text-base">Area: {area} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
