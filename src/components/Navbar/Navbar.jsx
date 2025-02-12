import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  const { user, logOutUser, toggleTheme, theme } = useContext(AuthContext);

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
        <NavLink to={'/allServices'}> Services</NavLink>
      </li>
      <li>
        <NavLink to={'/about'}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={'/blog'}>Blog</NavLink>
      </li>

      {user ? (
        <li>
          <details className="dropdown z-50 bg-transparent">
            <summary>Dashboard</summary>
            <ul className="menu dropdown-content bg-black text-white rounded-box z-[1] w-52 p-2 ">
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
      ) : (
        ' '
      )}
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50 nav bg-white/5% backdrop-blur-md ">
      <div className="navbar-start">
        <div className="dropdown z-50">
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
            className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <Link to={'/'}>
          <img
            className="w-16 h-16 rounded-full hidden md:flex"
            src={logo}
            alt=""
          />
        </Link>

        <a className=" text-base md:text-xl">Service Sharing</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end ">
        <div className="pr-6 md:pr-14">
          <input
            onClick={toggleTheme}
            type="checkbox"
            className="toggle"
            defaultChecked
          />
        </div>
        {user ? (
          <div className="flex flex-row gap-2">
            <img
              className="w-12 h-12 rounded-full"
              src={user && user?.photoURL}
              alt=""
            />

            <button
              className="text-sm md:text-base font-bold border-[1px] border-purple-500  text-purple-500 hover:text-purple-600 px-3 "
              onClick={handleLogOutUser}
            >
              Log-Out
            </button>
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
