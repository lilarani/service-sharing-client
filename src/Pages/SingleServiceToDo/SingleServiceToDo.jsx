import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const SingleServiceToDo = ({ service }) => {
  const {
    servicesName: name,
    servicesImage: img,
    instructions,
    takingDate,
    servicesPrice,
    providerName,
    providerImage,
    _id,
    serviceStatus,
  } = service;
  const { theme } = useContext(AuthContext);

  const handleServiceStatus = e => {
    let status = e.target.value;
    // console.log(status, _id);

    axios.put('https://service-sharing.vercel.app/status', {
      id: _id,
      status: status,
    });
  };

  return (
    <div
      className={`card bg-base-100 bg-transparent shadow-xl  ${
        theme === 'dark' ? 'border-[1px] border-gray-700 ' : ''
      }`}
    >
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-xl">{name}</h2>
        <p>Instructions: {instructions}</p>
        <p>Taking Date: {takingDate}</p>
        <p>Service Price: {servicesPrice}</p>
        <div>
          <select
            defaultValue={serviceStatus}
            onChange={handleServiceStatus}
            className="border-2"
          >
            <option value="pending">Pending</option>
            <option value="working">Working</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <img
              className="h-10 w-10 rounded-full "
              src={providerImage}
              alt=""
            />
          </div>
          <div>
            <p>{providerName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleServiceToDo;
