
import { Link } from 'react-router-dom';



const Navbar = () => {


   return (
      <header className="main-header">
         <section className="flex-container container">
            <h1 className="flex-item">
               LOGO
            </h1>
            <nav className="main-nav flex-3">
               <ul className="flex-container nav-wrapper">


                  <li className="nav-item flex-item">
                     <Link to='/home'>Home</Link>
                     <Link to='/login'>Login</Link>
                     <Link to='/register'>Register</Link>
                     <Link to='/about'>About</Link>
                  </li>
               </ul>
            </nav>
         </section>

      </header>

   );
};

export default Navbar;
