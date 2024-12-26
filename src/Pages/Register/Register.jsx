import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  const { user, setUser, createNewUser, updateUserProfile, googleProvider } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validatePassword = password => {
    let hasUppercase = false;
    let hasLowercase = false;

    for (const char of password) {
      if (char === char.toUpperCase() && char !== char.toLowerCase()) {
        hasUppercase = true;
      }
      if (char === char.toLowerCase() && char !== char.toUpperCase()) {
        hasLowercase = true;
      }
    }
    // Check for conditions
    if (!hasUppercase) {
      return 'Password must contain at least one uppercase letter';
    }
    if (!hasLowercase) {
      return 'Password must contain at least one lowercase letter';
    }
    if (password.length < 6) {
      return 'Password must be at least 6 characters long';
    }

    return '';
  };

  const handleRegister = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    // Validate password
    const error = validatePassword(password);
    if (error) {
      setPasswordError(error);
      return;
    }
    setPasswordError('');

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
              {passwordError && (
                <p className="text-red-500 text-sm mt-2">{passwordError}</p>
              )}
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
