import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../Provider/AuthProvider';
import SingleServiceToDo from '../SingleServiceToDo/SingleServiceToDo';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const ServiceToDo = () => {
  const { user } = useContext(AuthContext);
  const [serviceToDo, setServiceToDo] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/information-service/${user.email}`)
        .then(data => setServiceToDo(data.data));
    }
  }, [user]);

  return (
    <div>
      <Helmet>
        <title> Service-Sharing | Service-To-Do</title>
      </Helmet>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 my-24">
        {serviceToDo.map(service => (
          <SingleServiceToDo
            key={service._id}
            service={service}
          ></SingleServiceToDo>
        ))}
      </div>
    </div>
  );
};

export default ServiceToDo;
