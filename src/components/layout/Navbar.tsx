import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { logout } from '../../features/auth/authSlice';

const Navbar = () => {
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  console.log(user, logout, 78);

  const history = useHistory();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isAuthenticated) {
      history.push('/login');
    }
  }, [isAuthenticated, history]);

  const guestLinks = (
    <>
      <li className="nav-item flex-item">Welcome {user && user.name}</li>
      <li className="nav-item flex-item">
        <Link className="nav-item flex-item" to="/login">
          Login
        </Link>
      </li>
      <li className="nav-item flex-item">
        <Link className="nav-item flex-item" to="/register">
          Register
        </Link>
      </li>
    </>
  );
  const test = () => {
    console.log(123);

    dispatch(logout());
  };
  const authLinks = (
    <>
      <li className="nav-item flex-item">
        <button className="btn-primary" onClick={test}>
          Logout
        </button>
      </li>
    </>
  );

  return (
    <nav className="main-nav flex-item">
      <ul className="nav-wrapper flex-container">
        <li className="nav-item flex-item">
          <Link to="/">Home</Link>
        </li>

        <li className="nav-item flex-item">
          <Link to="/protected">Protected</Link>
        </li>
        {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </nav>
  );
};

export default Navbar;
