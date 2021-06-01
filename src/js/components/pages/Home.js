

import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';


const Home = () => {


   return (
      <article className="flex-container">
         <section className="flex-item">
            <ContactForm />
         </section>


         <section className="flex-item">
            <Contacts />
         </section>
      </article>
   );
};

export default Home;
