import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';

const MainLayouts = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Toaster />
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayouts;
