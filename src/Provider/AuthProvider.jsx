import { createContext, useEffect, useState } from 'react';
import { auth } from './../firebase/firebase.config';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import axios from 'axios';

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  let themeLocalStorage = localStorage.getItem('theme');
  let myTheme = themeLocalStorage ? themeLocalStorage : 'light';
  const [theme, setTheme] = useState(myTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // sign up new user
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signin user
  const userLogedIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // log-out user
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // update user
  const updateUserProfile = update => {
    return updateProfile(auth.currentUser, update);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      if (currentUser?.email) {
        const user = { email: currentUser.email };

        axios
          .post('http://localhost:5000/jwt', user, {
            withCredentials: true,
          })
          .then(response => {
            // console.log('login token', response.data);
            setLoading(false);
          })
          .catch(error => {
            console.error('Error fetching JWT token:', error);
          });
      } else {
        axios
          .post(
            'http://localhost:5000/logout',
            {},
            {
              withCredentials: true,
            }
          )
          .then(res => {
            // console.log('logout', res.data);
            setLoading(false);
          });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    createNewUser,
    userLogedIn,
    logOutUser,
    googleProvider,
    updateUserProfile,
    loading,
    toggleTheme,
    theme,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
