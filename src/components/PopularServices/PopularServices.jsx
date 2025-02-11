import axios from 'axios';
import { useEffect, useState } from 'react';
import PopularService from '../PopularService/PopularService';
import 'aos/dist/aos.css';

const PopularServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/services`).then(data => {
      setServices(data.data);
    });
  }, []);

  return (
    <div className="py-10 container mx-auto">
      <h1 className="text-center text-3xl font-semibold">Popular Service</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
        {services.map(service => (
          <PopularService key={service._id} service={service}></PopularService>
        ))}
      </div>
    </div>
  );
};

export default PopularServices;
