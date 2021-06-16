import { useContext, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


import AuthContext from '../../state/auth/AuthContext';


const Navbar = () => {
   const authContext = useContext(AuthContext);
   const { isAuthenticated, logout, loadUser, user } = authContext;

   const history = useHistory();

   useEffect(() => {
      if (!isAuthenticated) {
         history.push('/login');
      }
      loadUser();

   }, [isAuthenticated, history]);



   const guestLinks = (
      <>
         <li className="nav-item flex-item"><Link className="nav-item flex-item" to='/login'>Login</Link></li>
         <li className="nav-item flex-item"> <Link className="nav-item flex-item" to='/register'>Register</Link></li>

      </>
   );

   const authLinks = (
      <>
         <li className="nav-item flex-item">Welcome {user && user.name}</li>
         <li className="nav-item flex-item"> <button className="btn-primary" onClick={logout}>Logout</button></li>

      </>
   );

   return (

      <nav className="main-nav flex-item">

         <ul className="nav-wrapper flex-container">

            <li className="nav-item flex-item">
               <Link to='/'>Home</Link>
            </li>

            <li className="nav-item flex-item"> <Link to='/protected'>Protected</Link></li>
            {isAuthenticated ? authLinks : guestLinks}


         </ul>
      </nav>


   );
};

export default Navbar;
