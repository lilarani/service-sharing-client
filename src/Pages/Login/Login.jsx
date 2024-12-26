import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const { userLogedIn, googleProvider } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    userLogedIn(email, password)
      .then(result => {
        toast.success(`Login Successfully`);
        navigate('/');
      })
      .catch(error => {
        toast.error(`Login Failed`);
      });
  };

  const handleLogedInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        toast.success(`Login Successfully`);
        navigate('/');
      })
      .catch(error => {
        toast.error(`LogIn Failed`);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="text-center text-2xl font-semibold">
            Login your Account
          </h2>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-12 right-2"
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye />}
                </button>
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-1 px-3 text-center text-white text-sm">
                Login
              </button>
            </div>
            <p
              onClick={handleLogedInWithGoogle}
              className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-1 px-3 text-center text-white text-sm"
            >
              Login with Google
            </p>
            <p>
              Dont't Have an Account?
              <span className="text-blue-500 underline ml-2 font-semibold">
                <Link to={'/register'}>Register</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
