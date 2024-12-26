import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import BookedService from '../BookedService/BookedService';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const BookedServices = () => {
  const [bookedServices, setBookedServices] = useState([]);
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/bookedService?email=${user.email}`).then(data => {
      setBookedServices(data.data);
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title> Service-Sharing | Booked Service</title>
      </Helmet>
      {bookedServices.length === 0 ? (
        <h2 className="text-3xl text-red-600 text-center">
          You have not booked any services yet.
        </h2>
      ) : (
        bookedServices.map((service, index) => (
          <BookedService key={index} service={service}></BookedService>
        ))
      )}
    </div>
  );
};

export default BookedServices;
