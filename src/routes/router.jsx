import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import MainLayouts from '../Layouts/MainLayouts';
import Services from '../Pages/Services/Services';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import AddService from '../Pages/AddService/AddService';
import ManageService from './../Pages/ManageService/ManageService';
import BookedServices from '../Pages/BookedServices/BookedServices';
import ServiceToDo from '../Pages/ServiceToDo/ServiceToDo';
import PrivetRouter from './PrivetRouter';
import ServicesDetails from '../Pages/ServiceDetails/ServicesDetails';
import AllServices from '../Pages/AllServices/AllServices';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/services',
        element: <Services></Services>,
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
        element: <ManageService></ManageService>,
      },
      {
        path: '/bookedServices',
        element: <BookedServices></BookedServices>,
      },

      {
        path: '/serviceToDo',
        element: <ServiceToDo></ServiceToDo>,
      },

      {
        path: '/serviceDetails/:id',
        element: (
          <PrivetRouter>
            <ServicesDetails></ServicesDetails>
          </PrivetRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },

      {
        path: '/allServices',
        element: <AllServices></AllServices>,
        loader: () => fetch(`http://localhost:5000/services`),
      },
    ],
  },
]);

export default router;
