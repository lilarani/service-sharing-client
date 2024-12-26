import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import MainLayouts from '../Layouts/MainLayouts';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import AddService from '../Pages/AddService/AddService';
import BookedServices from '../Pages/BookedServices/BookedServices';
import ServiceToDo from '../Pages/ServiceToDo/ServiceToDo';
import PrivetRouter from './PrivetRouter';
import ServicesDetails from '../Pages/ServiceDetails/ServicesDetails';
import AllServices from '../Pages/AllServices/AllServices';
import ManageServices from '../Pages/ManageServices/ManageServices';
import ServiceUpdate from '../Pages/ServiceUpdate/ServiceUpdate';
import ErrPage from '../Pages/ErrPage/ErrPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrPage></ErrPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },

      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/addService',
        element: (
          <PrivetRouter>
            <AddService></AddService>,
          </PrivetRouter>
        ),
      },
      {
        path: '/manageService',
        element: (
          <PrivetRouter>
            <ManageServices></ManageServices>
          </PrivetRouter>
        ),
      },
      {
        path: '/bookedServices',
        element: (
          <PrivetRouter>
            <BookedServices></BookedServices>
          </PrivetRouter>
        ),
      },

      {
        path: '/serviceToDo',
        element: (
          <PrivetRouter>
            <ServiceToDo></ServiceToDo>
          </PrivetRouter>
        ),
      },

      {
        path: '/serviceDetails/:id',
        element: (
          <PrivetRouter>
            <ServicesDetails></ServicesDetails>
          </PrivetRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://service-sharing.vercel.app/services/${params.id}`),
      },

      {
        path: '/allServices',
        element: <AllServices></AllServices>,
        loader: () => fetch(`https://service-sharing.vercel.app/allServices`),
      },
      {
        path: '/serviceUpdate/:id',
        element: <ServiceUpdate></ServiceUpdate>,
        loader: ({ params }) =>
          fetch(`https://service-sharing.vercel.app/services/${params.id}`),
      },
    ],
  },
]);

export default router;
