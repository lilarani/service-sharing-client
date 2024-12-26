import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import ManageService from '../ManageService/ManageService';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const ManageServices = () => {
  const [manageServices, setManageServices] = useState([]);
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/my-services/${user.email}`).then(data => {
      setManageServices(data.data);
    });
  }, []);

  return (
    <div className="my-20 container mx-auto">
      <Helmet>
        <title> Service-Sharing | Manage Service</title>
      </Helmet>
      <h2 className="text-center font-bold text-2xl ">Manage Service</h2>
      {manageServices.map(service => (
        <ManageService key={service._id} service={service}></ManageService>
      ))}
    </div>
  );
};

export default ManageServices;
