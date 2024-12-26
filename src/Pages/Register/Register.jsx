import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
  const { user, setUser, createNewUser, updateUserProfile, googleProvider } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);

    createNewUser(email, password)
      .then(result => {
        setUser(result.user);
        updateUserProfile({
          displayName: name,
          photoURL: photo,
        }).then(() => {
          toast.success(`Registration Successfully`);
          navigate('/');
        });
      })
      .catch(error => {
        console.log(`Failed to create user ${error.message}`);
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
          <h2 className="text-center text-2xl font-semibold">Register Now!</h2>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="photo-URL"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-1 px-3 text-center text-white text-sm">
                Register
              </button>
            </div>
            <p
              onClick={handleLogedInWithGoogle}
              className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-1 px-3 text-center text-white text-sm"
            >
              Login with Google
            </p>
            <p>
              Already Have an Account?
              <span className="text-blue-500 underline ml-2 font-semibold">
                <Link to={'/login'}>Login</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
