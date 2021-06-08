import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';


import AuthContext from '../../state/auth/AuthContext';

import { userUrl } from '../../utils/endpoints';
const Navbar = () => {
   const authContext = useContext(AuthContext);
   const { logout, loadUser, user } = authContext;
   console.log(user);

   useEffect(() => {
      loadUser();
   }, []);


   return (
      <header className="main-header">
         <section className="flex-container container">
            <h1 className="flex-item">
               LOGO
            </h1>
            <button className="btn-primary" onClick={logout}>Logout</button>
            <nav className="main-nav flex-item">
               <ul className="nav-wrapper">


                  <li className="flex-container">
                     <Link className="nav-item flex-item" to='/'>Home</Link>
                     <Link className="nav-item flex-item" to='/protected'>Protected</Link>
                     <Link className="nav-item flex-item" to='/login'>Login</Link>
                     <Link className="nav-item flex-item" to='/register'>Register</Link>

                  </li>
               </ul>
            </nav>
         </section>

      </header>

   );
};

export default Navbar;
