import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import Footer from '../Pages/Footer/Footer';

const MainLayouts = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Toaster />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
