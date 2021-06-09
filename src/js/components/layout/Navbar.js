import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';


import AuthContext from '../../state/auth/AuthContext';


const Navbar = () => {
   const authContext = useContext(AuthContext);
   const { isAuthenticated, logout, loadUser, user } = authContext;


   useEffect(() => {

      loadUser();

   }, []);


   return (
      <header className="main-header">
         <section className="flex-container container">
            <h1 className="flex-item">
               LOGO
            </h1>
            <h2>{user && user.name}</h2>
            <button className="btn-primary" onClick={logout}>Logout</button>
            <nav className="main-nav flex-item">
               <ul className="nav-wrapper">


                  <li className="flex-container">
                     <Link className="nav-item flex-item" to='/'>Home</Link>
                     <Link className="nav-item flex-item" to='/protected'>Protected</Link>
                     {!isAuthenticated && <Link className="nav-item flex-item" to='/login'>Login</Link>}
                     {!isAuthenticated && <Link className="nav-item flex-item" to='/register'>Register</Link>}


                  </li>
               </ul>
            </nav>
         </section>

      </header>

   );
};

export default Navbar;
