import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogOutUser = () => {
    logOutUser()
      .then(result => {
        toast.success(`LogOut Successfully`);
      })
      .catch(error => {
        toast.error(`LogOut Failed`);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>

      <li>
        <NavLink to={'/services'}>Services</NavLink>
      </li>
      <li>
        <details className="dropdown ">
          <summary className="btn m-1">Dashboard</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <NavLink to={'/addService'}>Add Service</NavLink>
            </li>
            <li>
              <NavLink to={'/manageService'}>Manage Service</NavLink>
            </li>
            <li>
              <NavLink to={'/bookedServices'}>Booked-Services</NavLink>
            </li>

            <li>
              <NavLink to={'/serviceToDo'}>Service-To-Do</NavLink>
            </li>
          </ul>
        </details>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end ">
        {user ? (
          <div className="flex flex-row gap-2">
            <img
              className="w-12 h-12 rounded-full"
              src={user && user?.photoURL}
              alt=""
            />

            <button onClick={handleLogOutUser}>Log-Out</button>
          </div>
        ) : (
          <div className="space-x-2">
            <Link to={'/login'}>Login</Link>
            <Link to={'/register'}>Register</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
