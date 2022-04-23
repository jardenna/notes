import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { currentUser, logout } from '../../features/auth/authSlice';

const Navbar = () => {
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  let navigate = useNavigate();
  console.log(user, isAuthenticated);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, []);
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      navigate('/');
    }
  }, [isAuthenticated]);

  const guestLinks = (
    <>
      <li className="nav-item flex-item">Welcome {user && user.name}</li>
      <li className="nav-item flex-item">
        <NavLink className="nav-item flex-item" to="/login">
          Login
        </NavLink>
      </li>
      <li className="nav-item flex-item">
        <NavLink className="nav-item flex-item" to="/register">
          Register
        </NavLink>
      </li>
    </>
  );
  const logoutUser = () => {
    dispatch(logout());
  };
  const authLinks = (
    <>
      <li className="nav-item flex-item">
        <button className="btn-primary" onClick={logoutUser}>
          Logout
        </button>
      </li>
    </>
  );

  return (
    <nav className="main-nav flex-item">
      <ul className="nav-wrapper flex-container">
        <li className="nav-item flex-item">
          <NavLink to="/">Home</NavLink>
        </li>

        <li className="nav-item flex-item">
          <NavLink to="/protected">Protected</NavLink>
        </li>
        {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </nav>
  );
};

export default Navbar;
