
import { Link } from 'react-router-dom';

import { logoutUrl } from '../../utils/endpoints';


const Navbar = () => {

   const logout = async () => {
      try {
         const res = await fetch(logoutUrl,
            {
               method: 'GET',
               credentials: 'include'

            });

         const data = await res.json();
         console.log(data);
      } catch (e) {
         console.log(e);
      }
   };
   return (
      <header className="main-header">
         <section className="flex-container container">
            <h1 className="flex-3">
               LOGO
            </h1>
            <button className="btn-primary" onClick={logout}>Logout</button>
            <nav className="main-nav flex-item">
               <ul className="nav-wrapper">


                  <li className="flex-container">
                     <Link className="nav-item flex-item" to='/home'>Home</Link>
                     <Link className="nav-item flex-item" to='/login'>Login</Link>
                     <Link className="nav-item flex-item" to='/register'>Register</Link>
                     <Link className="nav-item flex-item" to='/about'>About</Link>
                  </li>
               </ul>
            </nav>
         </section>

      </header>

   );
};

export default Navbar;
