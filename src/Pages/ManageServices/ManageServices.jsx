import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import ManageService from '../ManageService/ManageService';
import { AuthContext } from '../../Provider/AuthProvider';

const ManageServices = () => {
  const [manageServices, setManageServices] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/services?email=${user.email}`)
      .then(data => {
        setManageServices(data.data);
      });
  }, [manageServices]);

  return (
    <div className="my-20 container mx-auto">
      <h2 className="text-center font-bold text-2xl ">Manage Service</h2>
      {manageServices.map(service => (
        <ManageService key={service._id} service={service}></ManageService>
      ))}
    </div>
  );
};

export default ManageServices;
